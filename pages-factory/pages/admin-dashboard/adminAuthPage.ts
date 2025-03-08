import { Page, expect } from "@playwright/test";
import { AdminAuthLocators } from "../../locators/admin-dashboard/adminAuthLocators";

export default class UserAuthPage {
    constructor(public page: Page) {}


    /**
     * @description Fills in the Email field
     */
    async fillInputEmail(email: string) {
       
    }

}