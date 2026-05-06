# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tcddt.spec.js >> Login Test TC02
- Location: tests\tcddt.spec.js:14:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: /username/i })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
      - generic [ref=e44]:
        - list [ref=e46]:
          - listitem [ref=e47]: ATM Services
          - listitem [ref=e48]:
            - link "Withdraw Funds" [ref=e49] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B?wsdl
          - listitem [ref=e50]:
            - link "Transfer Funds" [ref=e51] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B?wsdl
          - listitem [ref=e52]:
            - link "Check Balances" [ref=e53] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B?wsdl
          - listitem [ref=e54]:
            - link "Make Deposits" [ref=e55] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B?wsdl
        - list [ref=e56]:
          - listitem [ref=e57]: Online Services
          - listitem [ref=e58]:
            - link "Bill Pay" [ref=e59] [cursor=pointer]:
              - /url: services/bank;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B?_wadl&_type=xml
          - listitem [ref=e60]:
            - link "Account History" [ref=e61] [cursor=pointer]:
              - /url: services/bank;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B?_wadl&_type=xml
          - listitem [ref=e62]:
            - link "Transfer Funds" [ref=e63] [cursor=pointer]:
              - /url: services/bank;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B?_wadl&_type=xml
        - paragraph [ref=e64]:
          - link "Read More" [ref=e65] [cursor=pointer]:
            - /url: services.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - heading "Latest News" [level=4] [ref=e66]
        - list [ref=e67]:
          - listitem [ref=e68]: 05/06/2026
          - listitem [ref=e69]:
            - link "ParaBank Is Now Re-Opened" [ref=e70] [cursor=pointer]:
              - /url: news.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B#6
          - listitem [ref=e71]:
            - link "New! Online Bill Pay" [ref=e72] [cursor=pointer]:
              - /url: news.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B#5
          - listitem [ref=e73]:
            - link "New! Online Account Transfers" [ref=e74] [cursor=pointer]:
              - /url: news.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B#4
        - paragraph [ref=e75]:
          - link "Read More" [ref=e76] [cursor=pointer]:
            - /url: news.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
  - generic [ref=e78]:
    - list [ref=e79]:
      - listitem [ref=e80]:
        - link "Home" [ref=e81] [cursor=pointer]:
          - /url: index.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - text: "|"
      - listitem [ref=e82]:
        - link "About Us" [ref=e83] [cursor=pointer]:
          - /url: about.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - text: "|"
      - listitem [ref=e84]:
        - link "Services" [ref=e85] [cursor=pointer]:
          - /url: services.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - text: "|"
      - listitem [ref=e86]:
        - link "Products" [ref=e87] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e88]:
        - link "Locations" [ref=e89] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e90]:
        - link "Forum" [ref=e91] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e92]:
        - link "Site Map" [ref=e93] [cursor=pointer]:
          - /url: sitemap.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
        - text: "|"
      - listitem [ref=e94]:
        - link "Contact Us" [ref=e95] [cursor=pointer]:
          - /url: contact.htm;jsessionid=46A2AAD38B74E1B90019FECFD6D0F36B
    - paragraph [ref=e96]: © Parasoft. All rights reserved.
    - list [ref=e97]:
      - listitem [ref=e98]: "Visit us at:"
      - listitem [ref=e99]:
        - link "www.parasoft.com" [ref=e100] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const XLSX = require('xlsx');
  3  | const path = require('path');
  4  | 
  5  | // ✅ Robust path (CI safe)
  6  | const filePath = path.join(__dirname, '../testdata/parabank_login_data.xlsx');
  7  | 
  8  | const workbook = XLSX.readFile(filePath);
  9  | const sheet = workbook.Sheets['LoginData'];
  10 | const data = XLSX.utils.sheet_to_json(sheet);
  11 | 
  12 | for (const row of data) {
  13 | 
  14 |   test(`Login Test ${row.TestCaseID}`, async ({ page }) => {
  15 | 
  16 |     await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  17 | 
  18 |     // ✅ Use Playwright locator
> 19 |     await page.getByRole('textbox', { name: /username/i }).fill(row.Username || "");
     |                                                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  20 |     await page.getByRole('textbox', { name: /password/i }).fill(row.Password || "");
  21 | 
  22 |     await page.getByRole('button', { name: /log in/i }).click();
  23 | 
  24 |     // ✅ Replace waitForTimeout with assertion
  25 |     if (row.ExpectedResult === "valid") {
  26 |       await expect(page).toHaveURL(/overview/);
  27 |     } else {
  28 |       await expect(page.getByText('Error')).toBeVisible();
  29 |     }
  30 | 
  31 |   });
  32 | 
  33 | }
```