import { Page, expect } from "@playwright/test";
import { UserAuthLocators } from "../../locators/user-dashboard/userAuthLocators";

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
        await this.page.locator(UserAuthLocators.loginButton).click();
        await this.page.locator(UserAuthLocators.loginStudentButton).click();
    }

    /**
     * @description Fills in the Email field
     */
    async fillInputEmail(email: string) {
        await this.page.locator(UserAuthLocators.emailField).fill(email);
    }

    /**
     * @description Fills in the Password field
     */
    async fillInputPassword(password: string) {
        await this.page.locator(UserAuthLocators.passwordField).fill(password);
    }

    /**
     * @description Clicks Sign In button
     */
    async clickButtonSignIn() {
        await this.page.locator(UserAuthLocators.signInButton).click();
    }

    /**
     * @description Checks if success login toast is visible
     */
    async visibleToastSuccessLogin() {
        await expect(this.page.locator(UserAuthLocators.successLoginToast)).toBeVisible();
    }

    /**
     * @description Checks if invalid password toast is visible
     */
    async visibleToastInvalidPassword() {
        await expect(this.page.locator(UserAuthLocators.invalidPasswordToast)).toBeVisible();
    }
    /**
     * @description Checks if sign in button is disabled
     */
    async visibleDisabledSignInButton() {
        const disabledButton = this.page.locator(`${UserAuthLocators.signInButton}[@disabled]`);
        await expect(disabledButton).toBeDisabled();
      }
     /**
     * @description Checks if sign in w
     */
    
}