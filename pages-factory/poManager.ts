import { Page } from "@playwright/test";
import UserAuthPage from "./pages/user-dashboard/userAuthPage";
import UserHomePage from "./pages/user-dashboard/userHomePage";

export default class POManager {
    constructor(public page: Page) {}

    /**
     * @description Creating object reference for user authentication page class
     */
    getUserAuthPage() {
        return new UserAuthPage(this.page);
    }
    /**
    * @description Creating object reference for user home page class
    */
    getUserHomePage() {
        return new UserHomePage(this.page);
    }



}