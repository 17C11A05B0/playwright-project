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
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=Your account was created successfully') to be visible
    - waiting for" https://parabank.parasoft.com/parabank/register.htm" navigation to finish...
    - navigated to "https://parabank.parasoft.com/parabank/register.htm"

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - 'row "First Name: First name is required." [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell [ref=e52]:
                - textbox [ref=e53]
              - cell "First name is required." [ref=e54]
            - 'row "Last Name: Tester" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Tester" [ref=e57]:
                - textbox [ref=e58]: Tester
              - cell [ref=e59]
            - 'row "Address: 123 Test St" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "123 Test St" [ref=e62]:
                - textbox [ref=e63]: 123 Test St
              - cell [ref=e64]
            - 'row "City: Testville" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "Testville" [ref=e67]:
                - textbox [ref=e68]: Testville
              - cell [ref=e69]
            - 'row "State: CA" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "CA" [ref=e72]:
                - textbox [ref=e73]: CA
              - cell [ref=e74]
            - 'row "Zip Code: 90001" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "90001" [ref=e77]:
                - textbox [ref=e78]: "90001"
              - cell [ref=e79]
            - 'row "Phone #: 5551234567" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "5551234567" [ref=e82]:
                - textbox [ref=e83]: "5551234567"
              - cell [ref=e84]
            - 'row "SSN: 123456789" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "123456789" [ref=e87]:
                - textbox [ref=e88]: "123456789"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: autoUser751377" [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "autoUser751377" [ref=e94]:
                - textbox [ref=e95]: autoUser751377
              - cell [ref=e96]
            - row "Password:" [ref=e97]:
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell [ref=e101]
            - row "Confirm:" [ref=e102]:
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell [ref=e106]
            - row "Register" [ref=e107]:
              - cell [ref=e108]
              - cell "Register" [ref=e109]:
                - button "Register" [ref=e110] [cursor=pointer]
  - generic [ref=e112]:
    - list [ref=e113]:
      - listitem [ref=e114]:
        - link "Home" [ref=e115] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134] [cursor=pointer]:
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
  36 |     await Promise.all([
> 37 |       page.waitForSelector('text=Your account was created successfully'),
     |            ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  38 |       registerPage.clickOnRegisterbutton()
  39 |     ])
  40 | 
  41 |     await homePage.clickOnOpenNewAccount()
  42 | 
  43 |     const openAccountPage = poManager.getOpenAccountPage()
  44 |     await openAccountPage.openNewAccount('SAVINGS')
  45 | 
  46 |     await expect(openAccountPage.openAccountResult).toBeVisible()
  47 |     await expect(openAccountPage.newAccountLink).toHaveText(/^[0-9]+$/)
  48 |   })
  49 | })
  50 | 
```