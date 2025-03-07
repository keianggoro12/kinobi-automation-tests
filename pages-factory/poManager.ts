import { Page } from "@playwright/test";
import UserAuthPage from "./pages/user-dashboard/userAuthPage";

export default class POManager {
    constructor(public page: Page) {}

    /**
     * @description Creating object reference for user authentication page class
     */
    getUserAuthPage() {
        return new UserAuthPage(this.page);
    }
}