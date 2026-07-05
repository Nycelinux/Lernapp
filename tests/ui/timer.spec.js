/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * timer test
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { expect } from "@playwright/test";

//timer öffnen
test("Schreibtisch öffnet Timer", async ({ page }) => {
    await page.goto("file:///C:/Users/nikey/source/repos/Lernapp/index.html");

    await page.getByTestId("desk-hitbox").click();
    await expect(page.getByTestId("timer-menu")).toBeVisible();
});