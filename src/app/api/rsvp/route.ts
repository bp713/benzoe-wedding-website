import ExcelJS from "exceljs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import type { GuestResponse } from "../../../types/rsvp";

export const runtime = "nodejs";

type GuestGroup = { id: string; names: string[]; rows: number[] };

const sourcePath = path.join(
  process.cwd(),
  "src",
  "assets",
  "Wedding Guests - RSVP Spreadsheet.xlsx",
);
const responsePath = path.join(
  process.cwd(),
  "data",
  "wedding-rsvp-local.xlsx",
);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

function getGuestGroups(sheet: ExcelJS.Worksheet): GuestGroup[] {
  const groups: GuestGroup[] = [];
  let current: GuestGroup | undefined;

  for (let rowNumber = 2; rowNumber <= sheet.rowCount; rowNumber += 1) {
    const cellValue = sheet.getCell(rowNumber, 1).value;
    const name = typeof cellValue === "string" ? cellValue.trim() : "";

    if (name) {
      if (!current) {
        current = { id: String(rowNumber), names: [], rows: [] };
        groups.push(current);
      }
      current.names.push(name);
      current.rows.push(rowNumber);
    } else {
      current = undefined;
    }
  }

  return groups;
}

function getSavedResponse(
  sheet: ExcelJS.Worksheet,
  rowNumber: number,
): GuestResponse | undefined {
  const savedAt = sheet.getCell(rowNumber, 10).value;
  if (typeof savedAt !== "string" || !savedAt) return undefined;

  const dietValue = sheet.getCell(rowNumber, 5).value;
  const dietaryAnswer = sheet.getCell(rowNumber, 9).value;
  const details = sheet.getCell(rowNumber, 7).value;

  return {
    attending: sheet.getCell(rowNumber, 2).value === true ? "yes" : "no",
    wednesdayNight: sheet.getCell(rowNumber, 3).value === true ? "yes" : "no",
    accommodation: sheet.getCell(rowNumber, 4).value === true ? "yes" : "no",
    diet:
      dietValue === "vegetarian" ||
      dietValue === "vegan" ||
      dietValue === "other"
        ? dietValue
        : "none",
    hasDietaryRequirements:
      dietaryAnswer === "yes" || dietaryAnswer === "no" ? dietaryAnswer : "",
    dietaryDetails: typeof details === "string" ? details : "",
  };
}

async function loadWorkbook(filePath: string, fallbackPath = sourcePath) {
  const workbook = new ExcelJS.Workbook();
  try {
    await workbook.xlsx.readFile(filePath);
  } catch {
    await workbook.xlsx.readFile(fallbackPath);
  }
  return workbook;
}

function isGuestResponse(value: unknown): value is GuestResponse {
  if (!isRecord(value)) return false;

  if (value.attending === "no") return true;

  return (
    value.attending === "yes" &&
    (value.wednesdayNight === "yes" || value.wednesdayNight === "no") &&
    (value.accommodation === "yes" || value.accommodation === "no") &&
    ["none", "vegetarian", "vegan", "other"].includes(String(value.diet)) &&
    (value.hasDietaryRequirements === "yes" ||
      value.hasDietaryRequirements === "no") &&
    typeof value.dietaryDetails === "string" &&
    value.dietaryDetails.length <= 2000
  );
}

function getGoogleRsvpConfig() {
  const endpoint = process.env.GOOGLE_RSVP_ENDPOINT;
  const token = process.env.GOOGLE_RSVP_TOKEN;
  return endpoint && token ? { endpoint, token } : undefined;
}

async function getGoogleGuestGroups() {
  const config = getGoogleRsvpConfig();
  if (!config) {
    return NextResponse.json(
      { error: "Google Sheets RSVP is not configured" },
      { status: 503 },
    );
  }

  try {
    const url = new URL(config.endpoint);
    url.searchParams.set("action", "guests");
    url.searchParams.set("token", config.token);
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("Google Sheets request failed");

    const groups: unknown = await response.json();
    if (!Array.isArray(groups)) throw new Error("Invalid guest list response");

    return NextResponse.json(groups, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json(
      { error: "Could not load guests from Google Sheets" },
      { status: 502 },
    );
  }
}

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return getGoogleGuestGroups();
  }

  try {
    const workbook = await loadWorkbook(responsePath);
    const sheet = workbook.worksheets[0];
    if (!sheet) throw new Error("Guest worksheet not found");

    return NextResponse.json(
      getGuestGroups(sheet).map((group) => ({
        id: group.id,
        names: group.names,
        responses: Object.fromEntries(
          group.names.map((name, index) => [
            name,
            getSavedResponse(sheet, group.rows[index]),
          ]),
        ),
        questions:
          typeof sheet.getCell(group.rows[0], 8).value === "string"
            ? sheet.getCell(group.rows[0], 8).value
            : "",
      })),
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      { error: "Could not load the local guest workbook" },
      { status: 500 },
    );
  }
}

let writeQueue: Promise<void> = Promise.resolve();

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "Local RSVP is only available in development" },
      { status: 403 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (
    !isRecord(body) ||
    typeof body.groupId !== "string" ||
    !isRecord(body.responses) ||
    typeof body.questions !== "string" ||
    body.questions.length > 2000
  ) {
    return NextResponse.json(
      { error: "Invalid RSVP response" },
      { status: 400 },
    );
  }

  const groupId = body.groupId;
  const guestResponses = body.responses;
  const questions = body.questions;

  if (!Object.values(guestResponses).every(isGuestResponse)) {
    return NextResponse.json(
      { error: "Invalid RSVP response" },
      { status: 400 },
    );
  }

  if (process.env.NODE_ENV !== "development") {
    const config = getGoogleRsvpConfig();
    if (!config) {
      return NextResponse.json(
        { error: "Google Sheets RSVP is not configured" },
        { status: 503 },
      );
    }

    try {
      const response = await fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          token: config.token,
          payload: JSON.stringify({
            groupId,
            responses: guestResponses,
            questions,
          }),
        }),
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Google Sheets request failed");

      const result: unknown = await response.json();
      if (!isRecord(result) || result.success !== true) {
        return NextResponse.json(
          {
            error:
              isRecord(result) && typeof result.error === "string"
                ? result.error
                : "Could not save RSVP to Google Sheets",
          },
          { status: 400 },
        );
      }

      return NextResponse.json({ success: true });
    } catch {
      return NextResponse.json(
        { error: "Could not save RSVP to Google Sheets" },
        { status: 502 },
      );
    }
  }

  const save = async () => {
    const workbook = await loadWorkbook(responsePath);
    const sheet = workbook.worksheets[0];
    if (!sheet) throw new Error("Guest worksheet not found");

    const group = getGuestGroups(sheet).find(({ id }) => id === groupId);
    if (
      !group ||
      !group.names.every((name) => isGuestResponse(guestResponses[name]))
    ) {
      throw new Error("RSVP response does not match a guest invitation");
    }

    sheet.getCell(1, 9).value = "Other dietary requirements or allergies?";
    sheet.getCell(1, 10).value = "Local RSVP submitted at";

    group.rows.forEach((rowNumber, index) => {
      const response = guestResponses[group.names[index]] as GuestResponse;
      sheet.getCell(rowNumber, 2).value = response.attending === "yes";
      sheet.getCell(rowNumber, 3).value =
        response.attending === "yes" && response.wednesdayNight === "yes";
      sheet.getCell(rowNumber, 4).value =
        response.attending === "yes" && response.accommodation === "yes";
      sheet.getCell(rowNumber, 5).value =
        response.attending === "yes" &&
        response.diet &&
        response.diet !== "none"
          ? response.diet
          : "";
      sheet.getCell(rowNumber, 6).value =
        response.attending === "yes" &&
        (response.hasDietaryRequirements === "yes" ||
          response.diet === "other");
      sheet.getCell(rowNumber, 7).value =
        response.attending === "yes" ? response.dietaryDetails.trim() : "";
      sheet.getCell(rowNumber, 8).value = index === 0 ? questions.trim() : "";
      sheet.getCell(rowNumber, 9).value =
        response.attending === "yes" ? response.hasDietaryRequirements : "";
      sheet.getCell(rowNumber, 10).value = new Date().toISOString();
    });

    await mkdir(path.dirname(responsePath), { recursive: true });
    await workbook.xlsx.writeFile(responsePath);
  };

  const operation = writeQueue.then(save);
  writeQueue = operation.catch(() => undefined);

  try {
    await operation;
    return NextResponse.json({ success: true });
  } catch (error) {
    const isInvalidResponse =
      error instanceof Error &&
      error.message === "RSVP response does not match a guest invitation";
    return NextResponse.json(
      {
        error: isInvalidResponse
          ? error.message
          : "Could not save the local RSVP workbook",
      },
      { status: isInvalidResponse ? 400 : 500 },
    );
  }
}
