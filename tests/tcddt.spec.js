const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');
const path = require('path');

// ✅ Robust path (CI safe)
const filePath = path.join(__dirname, '../testdata/parabank_login_data.xlsx');

const workbook = XLSX.readFile(filePath);
const sheet = workbook.Sheets['LoginData'];
const data = XLSX.utils.sheet_to_json(sheet);

for (const row of data) {

  test(`Login Test ${row.TestCaseID}`, async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.waitForLoadState('networkidle');

    // ✅ Use correct selectors based on actual form structure
    await page.locator('input[name="username"]').fill(row.Username || "");
    await page.locator('input[name="password"]').fill(row.Password || "");

    await page.locator('input[type="submit"][value="Log In"]').click();

    // ✅ Replace waitForTimeout with assertion
    if (row.ExpectedResult === "valid") {
      await expect(page).toHaveURL(/overview/, { timeout: 60000 });
    } else {
      await expect(page).toHaveURL(/index\.htm/, { timeout: 60000 });
    }

  });

}