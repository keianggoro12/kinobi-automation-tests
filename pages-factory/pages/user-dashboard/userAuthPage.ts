import { Page, expect } from '@playwright/test';
import { UserAuthLocators } from '../../locators/user-dashboard/userAuthLocators';

export default class UserAuthPage {
  constructor(public page: Page) {}

  /**
   * @description Launches user login page
   */
  async openUrl(url: string) {
    await this.page.goto(url);
  }

  /**
   * @description Clicks Login button and selects Login as Student
   */
  async clickButtonLoginStudent() {
    await this.page.locator(UserAuthLocators.login_button).click();
    await this.page.locator(UserAuthLocators.login_student_button).click();
  }

  /**
   * @description Fills in the Email field
   */
  async fillInputEmail(email: string) {
    await this.page.locator(UserAuthLocators.email_field).fill(email);
  }

  /**
   * @description Fills in the Password field
   */
  async fillInputPassword(password: string) {
    await this.page.locator(UserAuthLocators.password_field).fill(password);
  }

  /**
   * @description Clicks Sign In button
   */
  async clickButtonSignIn() {
    await this.page.locator(UserAuthLocators.signin_button).click();
  }

  /**
   * @description Checks if success login toast is visible
   */
  async visibleToastSuccessLogin() {
    await expect(this.page.locator(UserAuthLocators.success_login_toast)).toBeVisible();
  }

  /**
   * @description Checks if invalid password toast is visible
   */
  async visibleToastInvalidPassword() {
    await expect(this.page.locator(UserAuthLocators.invalid_password_toast)).toBeVisible();
  }
  /**
   * @description Checks if sign in button is disabled
   */
  async visibleDisabledSignInButton() {
    const disabledButton = this.page.locator(`${UserAuthLocators.signin_button}[@disabled]`);
    await expect(disabledButton).toBeDisabled();
  }
  /**
   * @description Checks if sign in w
   */
}
