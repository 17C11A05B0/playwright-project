import { POManager } from '../pageobjects/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'

function makeRandomUser() {
  const suffix = Date.now().toString().slice(-6)
  return {
    username: `autoUser${suffix}`,
    password: `AutoPass${suffix}`
  }
}

test.describe('Open New Account flow', () => {
  test('register a random user, login, and open a new savings account', async ({ page }) => {
    const poManager = new POManager(page)
    const homePage = poManager.getHomePage()
    await homePage.goTo()

    await homePage.clickOnRegisterLink()

    const registerPage = poManager.getRegistrationPage()
    const randomUser = makeRandomUser()

    await registerPage.registerUser(
      'Auto',
      'Tester',
      '123 Test St',
      'Testville',
      'CA',
      '90001',
      '5551234567',
      '123456789',
      randomUser.username,
      randomUser.password
    )

    await registerPage.clickOnRegisterbutton()
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL(/register\.htm/)
    await expect(page.locator(`text=Welcome ${randomUser.username}`)).toBeVisible({ timeout: 60000 })
    await expect(page.locator('text=Your account was created successfully')).toBeVisible({ timeout: 60000 })

    await homePage.clickOnOpenNewAccount()

    const openAccountPage = poManager.getOpenAccountPage()
    await openAccountPage.openNewAccount('SAVINGS')

    await expect(openAccountPage.openAccountResult).toBeVisible()
    await expect(openAccountPage.newAccountLink).toHaveText(/^[0-9]+$/)
  })
})
