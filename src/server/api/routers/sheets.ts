import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import { z } from "zod";
import { env } from "~/env.mjs";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const sheetRouter = createTRPCRouter({
  append: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        school: z.string(),
        grade: z.string(),
        reason: z.string(),
      })
    )
    .mutation(async ({ input: { name, email, school, grade, reason } }) => {
      const sheets = google.sheets({
        version: "v4",
        auth: new GoogleAuth({
          scopes: "https://www.googleapis.com/auth/spreadsheets",
          authClient: new google.auth.JWT(
            env.GOOGLE_SHEETS_CLIENT_EMAIL,
            undefined,
            env.GOOGLE_SHEETS_PRIVATE_KEY,
            "https://www.googleapis.com/auth/spreadsheets"
          ),  
        }),
      });

      

      const result = await sheets.spreadsheets.values.append({
        spreadsheetId: env.SPREADSHEET_ID,
        range: "A1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[new Date(), name, email, school, grade, reason]],
        },
      });

      console.log(`${result.data.updates?.updatedCells ?? 0} cells appended.`);

      return result.data.updates?.updatedCells ?? 0;
    }),
});
