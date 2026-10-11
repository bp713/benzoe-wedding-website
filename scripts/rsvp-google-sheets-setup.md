# Connect RSVP to Google Sheets

The RSVP API uses the local Excel workbook during development. In production, it proxies guest reads and grouped submissions to the Apps Script in `rsvp-google-sheets.gs`.

## Prepare the sheet

The script is configured for spreadsheet `18lDy3HSqcddsFNbSCw6kqviTDRCJxV65vXYYmPxxSTg`, tab ID `0`, from the supplied link. The sheet should have guest names in column A, starting on row 2. Consecutive names form one invitation group; a blank row starts the next group.

The script uses columns A-J:

- A: invited guest name
- B: wedding attendance
- C: Wednesday night
- D: Thursday accommodation
- E: vegetarian, vegan, or other meal
- F: dietary details present flag
- G: dietary details
- H: group question (stored on the first guest row)
- I: other dietary requirements yes/no
- J: submission timestamp

Columns I and J are created/labelled by the script when the first RSVP is submitted. Leave the guest rows and blank group separators in place.

## Deploy Apps Script

1. Open the Google Sheet and choose **Extensions > Apps Script**.
2. Replace the contents of `Code.gs` with `scripts/rsvp-google-sheets.gs` from this repository, then save.
3. In Apps Script, open **Project Settings** and add a Script Property named `RSVP_API_TOKEN`. Set its value to a long random secret. Keep this value private.
4. Choose **Deploy > New deployment**, select **Web app**, and set **Execute as** to your account. Set **Who has access** to **Anyone** so Vercel can call it; the script checks the private token before returning or changing sheet data.
5. Deploy and copy the web app URL ending in `/exec`.

## Configure Vercel

In the Vercel project, open **Settings > Environment Variables** and add:

- `GOOGLE_RSVP_ENDPOINT`: the Apps Script `/exec` URL
- `GOOGLE_RSVP_TOKEN`: the exact same secret as the `RSVP_API_TOKEN` Script Property

Add these for Production (and Preview if you want RSVP enabled on preview deployments), then redeploy. Do not use or replace `GOOGLE_SHEETS_ENDPOINT`; that setting is for the newsletter.

The token stays server-side in Vercel and Apps Script; it is not sent to the browser. Production RSVP requests will return a configuration error until both Vercel variables are set. Development continues to use the local workbook copy.
