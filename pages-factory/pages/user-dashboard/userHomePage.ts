import { Page, expect } from "@playwright/test";
import { UserHomePageLocators } from "../../locators/user-dashboard/userHomePageLocators";
import { UserAuthLocators } from "../../locators/user-dashboard/userAuthLocators";

export default class UserAuthPage {
    constructor(public page: Page) {}

    /**
     * @description clicks three dots button
     */
    async clickThreeDotsButton() {
        await this.page.locator(UserHomePageLocators.threeDotsButton).click();
    }

    /**
     * @description clicks logout button
     */
    async clickLogoutButton() {
        await this.page.locator(UserHomePageLocators.logoutButton).click();
        await expect(this.page.locator(UserAuthLocators.loginButton)).toBeVisible();
    }

}
