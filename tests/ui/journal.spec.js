/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * journal test
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { test, expect } from "@playwright/test";

/*Journal öffnen*/
test("Journal öffnet sich", async ({ page }) => {
    await page.goto("");
    await page.getByTestId("player-sign").click();
    await expect(page.getByTestId("journal-book")).toBeVisible();
});

/*Journal schließen*/
test("Journal öffnet sich", async ({ page }) => {
    await page.goto("");
    await page.getByTestId("player-sign").click();
    await page.getByTestId("journal-close").click();
    await expect(page.getByTestId("journal-book")).toBeHidden();
});
