import { Locator, Page } from "@playwright/test";
const data = JSON.parse(JSON.stringify(require("../Data/login.json")));

export default class LoginPage {
  readonly page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
 
  private getButton : Locator;
  constructor(page: Page) {
    this.page = page;
    this.getButton = page.locator("//div[@class='oxd-topbar-body-nav-slot']/button");
    this.usernameInput = page.locator("//input[@placeholder='username' or @placeholder='Username']");
    this.passwordInput = page.locator("//input[@placeholder='password' or @placeholder='Password']");
    this.loginButton = page.locator("//button[@type='submit']");
  }
  async performLogin() {
    await this.usernameInput.fill(data.ValidLogin.ValidUserName);
    await this.passwordInput.fill(data.ValidLogin.ValidPassword);
    await this.loginButton.click();
  }

}