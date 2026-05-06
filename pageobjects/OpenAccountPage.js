export class OpenAccountPage {
  constructor(page) {
    this.page = page
    this.accountType = page.locator('#type')
    this.fromAccount = page.locator('#fromAccountId')
    this.openAccountButton = page.locator('input.button[value="Open New Account"]')
    this.openAccountResult = page.locator('#openAccountResult')
    this.openAccountError = page.locator('#openAccountError')
    this.newAccountLink = page.locator('#newAccountId')
  }

  async waitForOpenAccountForm() {
    await this.accountType.waitFor({ state: 'visible' })
    await this.fromAccount.waitFor({ state: 'visible' })
    await this.page.waitForFunction(() => {
      const select = document.querySelector('#fromAccountId')
      return select && select.querySelectorAll('option').length > 0
    }, { timeout: 60000 })
  }

  async selectAccountType(accountType = 'SAVINGS') {
    await this.accountType.selectOption({ label: accountType.toUpperCase() })
  }

  async selectFromAccount(accountId) {
    if (accountId) {
      await this.fromAccount.selectOption(accountId)
    }
  }

  async clickOpenNewAccount() {
    await this.openAccountButton.click()
    await this.openAccountResult.waitFor({ state: 'visible' })
  }

  async openNewAccount(accountType = 'SAVINGS', accountId) {
    await this.waitForOpenAccountForm()
    await this.selectAccountType(accountType)
    await this.selectFromAccount(accountId)
    await this.clickOpenNewAccount()
  }
}
