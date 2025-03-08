import { Page, expect } from "@playwright/test";
import { AdminAuthLocators } from "../../locators/admin-dashboard/adminAuthLocators";
import { AdminHomePageLocators } from "../../locators/admin-dashboard/adminHomePageLocators";

export default class AdminAuthPage {
  constructor(public page: Page) {}

  /**
   * @description Launches user login page
   */
  async openUrl(url: string) {
    await this.page.goto(url);
  }

  /**
   * @description Clicks Login button and selects Login as Admin
   */
  async clickButtonLoginAdmin() {
    await this.page.locator(AdminAuthLocators.login_admin_button).click();
  }

  /**
   * @description Fills in the Email field
   */
  async fillInputEmail(email: string) {
    await this.page.locator(AdminAuthLocators.email_field).fill(email);
  }

  /**
   * @description Fills in the Password field
   */
  async fillInputPassword(password: string) {
    await this.page.locator(AdminAuthLocators.password_field).fill(password);
  }

  /**
   * @description Clicks Sign In button
   */
  async clickButtonSignIn() {
    await this.page.locator(AdminAuthLocators.signin_button).click();
  }

  /**
   * @description Checks if success login toast is visible
   */
  async visibleToastSuccessAdminLogin() {
    await expect(
      this.page.locator(AdminAuthLocators.success_admin_login_toast)
    ).toBeVisible();
  }
  /**
   * @description Checks if success login by role super admin
   */
  async verifyLoginSuperAdmin() {
    await expect(
      this.page.locator(AdminHomePageLocators.signin_super_admin_chip)
    ).toBeVisible();
  }
  /**
   * @description Checks if success login by role normal admin
   */
  async verifyLoginNormalAdmin() {
    await expect(
      this.page.locator(AdminHomePageLocators.signin_normal_admin_chip)
    ).toBeVisible();
  }
  /**
   * @description Checks if success login by role company admin
   */
  async verifyLoginCompanyAdmin() {
    await expect(
      this.page.locator(AdminHomePageLocators.signin_company_admin_chip)
    ).toBeVisible();
  }

  /**
   * @description clicks three dots button
   */
  async clickThreeDotsButton() {
    await this.page.locator(AdminHomePageLocators.three_dots_button).click();
  }

  /**
   * @description clicks logout button
   */
  async clickLogoutButton() {
    await this.page.locator(AdminHomePageLocators.logout_button).click();
    await expect(this.page.locator(AdminAuthLocators.login_button)).toBeVisible();}
}
