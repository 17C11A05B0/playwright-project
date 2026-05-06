# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TCopennewaccount.spec.js >> Open New Account flow >> register a random user, login, and open a new savings account
- Location: tests\TCopennewaccount.spec.js:13:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('h1.title')
Expected: "Customer Created"
Received: "Welcome autoUser951587"

Call log:
  - Expect "toHaveText" with timeout 60000ms
  - waiting for locator('h1.title')
    28 × locator resolved to <h1 class="title">Welcome autoUser951587</h1>
       - unexpected value "Welcome autoUser951587"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome Auto Tester
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e48]:
        - heading "Welcome autoUser951587" [level=1] [ref=e49]
        - paragraph [ref=e50]: Your account was created successfully. You are now logged in.
  - generic [ref=e52]:
    - list [ref=e53]:
      - listitem [ref=e54]:
        - link "Home" [ref=e55] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "About Us" [ref=e57] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e58]:
        - link "Services" [ref=e59] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "Products" [ref=e61] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e62]:
        - link "Locations" [ref=e63] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e64]:
        - link "Forum" [ref=e65] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e66]:
        - link "Site Map" [ref=e67] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Contact Us" [ref=e69] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e70]: © Parasoft. All rights reserved.
    - list [ref=e71]:
      - listitem [ref=e72]: "Visit us at:"
      - listitem [ref=e73]:
        - link "www.parasoft.com" [ref=e74] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { POManager } from '../pageobjects/POManager'
  2  | import { customtest as test, expect } from '../fixtures/testfixture'
  3  | 
  4  | function makeRandomUser() {
  5  |   const suffix = Date.now().toString().slice(-6)
  6  |   return {
  7  |     username: `autoUser${suffix}`,
  8  |     password: `AutoPass${suffix}`
  9  |   }
  10 | }
  11 | 
  12 | test.describe('Open New Account flow', () => {
  13 |   test('register a random user, login, and open a new savings account', async ({ page }) => {
  14 |     const poManager = new POManager(page)
  15 |     const homePage = poManager.getHomePage()
  16 |     await homePage.goTo()
  17 | 
  18 |     await homePage.clickOnRegisterLink()
  19 | 
  20 |     const registerPage = poManager.getRegistrationPage()
  21 |     const randomUser = makeRandomUser()
  22 | 
  23 |     await registerPage.registerUser(
  24 |       'Auto',
  25 |       'Tester',
  26 |       '123 Test St',
  27 |       'Testville',
  28 |       'CA',
  29 |       '90001',
  30 |       '5551234567',
  31 |       '123456789',
  32 |       randomUser.username,
  33 |       randomUser.password
  34 |     )
  35 | 
  36 |     await registerPage.clickOnRegisterbutton()
  37 |     await page.waitForLoadState('networkidle')
  38 |     await expect(page).toHaveURL(/register\.htm/)
> 39 |     await expect(page.locator('h1.title')).toHaveText('Customer Created', { timeout: 60000 })
     |                                            ^ Error: expect(locator).toHaveText(expected) failed
  40 |     await expect(page.locator('text=Your account was created successfully')).toBeVisible({ timeout: 60000 })
  41 | 
  42 |     await homePage.clickOnOpenNewAccount()
  43 | 
  44 |     const openAccountPage = poManager.getOpenAccountPage()
  45 |     await openAccountPage.openNewAccount('SAVINGS')
  46 | 
  47 |     await expect(openAccountPage.openAccountResult).toBeVisible()
  48 |     await expect(openAccountPage.newAccountLink).toHaveText(/^[0-9]+$/)
  49 |   })
  50 | })
  51 | 
```