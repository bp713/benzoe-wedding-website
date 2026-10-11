const SPREADSHEET_ID = "18lDy3HSqcddsFNbSCw6kqviTDRCJxV65vXYYmPxxSTg";
const SHEET_GID = 0;

function doGet(event) {
  if (!isAuthorized_(event)) return json_({ error: "Unauthorized" });
  if (!event || event.parameter.action !== "guests") {
    return json_({ error: "Unknown action" });
  }

  try {
    const sheet = getSheet_();
    const groups = getGuestGroups_(sheet).map((group) => {
      const responses = {};
      group.names.forEach((name, index) => {
        const response = getSavedResponse_(sheet, group.rows[index]);
        if (response) responses[name] = response;
      });

      const questions = sheet.getRange(group.rows[0], 8).getValue();
      return {
        id: String(group.rows[0]),
        names: group.names,
        responses: responses,
        questions: typeof questions === "string" ? questions : "",
      };
    });

    return json_(groups);
  } catch (error) {
    return json_({ error: "Could not load RSVP guests" });
  }
}

function doPost(event) {
  if (!isAuthorized_(event)) return json_({ error: "Unauthorized" });

  try {
    const payload = JSON.parse(event.parameter.payload || "{}");
    if (
      typeof payload.groupId !== "string" ||
      !payload.responses ||
      typeof payload.responses !== "object" ||
      typeof payload.questions !== "string" ||
      payload.questions.length > 2000
    ) {
      return json_({ error: "Invalid RSVP response" });
    }

    const sheet = getSheet_();
    const group = getGuestGroups_(sheet).find(
      (guestGroup) => String(guestGroup.rows[0]) === payload.groupId,
    );
    if (
      !group ||
      !group.names.every((name) => isGuestResponse_(payload.responses[name]))
    ) {
      return json_({ error: "RSVP response does not match an invitation" });
    }

    sheet.getRange(1, 9).setValue("Other dietary requirements or allergies?");
    sheet.getRange(1, 10).setValue("RSVP submitted at");
    const submittedAt = new Date();
    const values = group.names.map((name, index) => {
      const response = payload.responses[name];
      const attending = response.attending === "yes";
      return [
        attending,
        attending && response.wednesdayNight === "yes",
        attending && response.accommodation === "yes",
        attending && response.diet !== "none" ? response.diet : "",
        attending &&
          (response.hasDietaryRequirements === "yes" ||
            response.diet === "other"),
        attending ? String(response.dietaryDetails || "").trim() : "",
        index === 0 ? payload.questions.trim() : "",
        attending ? response.hasDietaryRequirements : "",
        submittedAt,
      ];
    });

    sheet.getRange(group.rows[0], 2, values.length, 9).setValues(values);
    return json_({ success: true });
  } catch (error) {
    return json_({ error: "Could not save RSVP" });
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet
    .getSheets()
    .find((candidate) => candidate.getSheetId() === SHEET_GID);
  if (!sheet) throw new Error("The configured guest sheet tab was not found");
  return sheet;
}

function getGuestGroups_(sheet) {
  const lastRow = sheet.getLastRow();
  const names = sheet.getRange(2, 1, Math.max(lastRow - 1, 1), 1).getValues();
  const groups = [];
  let current;

  names.forEach((row, index) => {
    const name = String(row[0] || "").trim();
    const rowNumber = index + 2;
    if (name) {
      if (!current) {
        current = { names: [], rows: [] };
        groups.push(current);
      }
      current.names.push(name);
      current.rows.push(rowNumber);
    } else {
      current = undefined;
    }
  });

  return groups;
}

function getSavedResponse_(sheet, row) {
  if (!sheet.getRange(row, 10).getValue()) return null;
  const values = sheet.getRange(row, 2, 1, 8).getValues()[0];
  const diet = ["vegetarian", "vegan", "other"].includes(values[3])
    ? values[3]
    : "none";
  return {
    attending: values[0] === true ? "yes" : "no",
    wednesdayNight: values[1] === true ? "yes" : "no",
    accommodation: values[2] === true ? "yes" : "no",
    diet: diet,
    hasDietaryRequirements:
      values[7] === "yes" || values[7] === "no" ? values[7] : "",
    dietaryDetails: typeof values[5] === "string" ? values[5] : "",
  };
}

function isGuestResponse_(response) {
  if (!response || typeof response !== "object") return false;
  if (response.attending === "no") return true;

  return (
    response.attending === "yes" &&
    ["yes", "no"].includes(response.wednesdayNight) &&
    ["yes", "no"].includes(response.accommodation) &&
    ["none", "vegetarian", "vegan", "other"].includes(response.diet) &&
    ["yes", "no"].includes(response.hasDietaryRequirements) &&
    typeof response.dietaryDetails === "string" &&
    response.dietaryDetails.length <= 2000
  );
}

function isAuthorized_(event) {
  const expected =
    PropertiesService.getScriptProperties().getProperty("RSVP_API_TOKEN");
  const provided = event && event.parameter && event.parameter.token;
  return Boolean(expected && provided && expected === provided);
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
