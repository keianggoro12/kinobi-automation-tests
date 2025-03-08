import { Page } from "@playwright/test";
import UserAuthPage from "./pages/user-dashboard/userAuthPage";
import UserHomePage from "./pages/user-dashboard/userHomePage";
import UserResumePage from "./pages/user-dashboard/userResumePage";
import UserPersonalPage from "./pages/user-dashboard/userResumePage";
import AdminAuthPage from "./pages/admin-dashboard/adminAuthPage";

export default class POManager {
    constructor(public page: Page) {}

    /**
     * @description Returns an instance of the User Authentication Page
     */
    getUserAuthPage() {
        return new UserAuthPage(this.page);
    }
    /**
     * @description Returns an instance of the User Home Page
     */
    getUserHomePage() {
        return new UserHomePage(this.page);
    }

    /**
     * @description Returns an instance of the User Resume Page
     */
    getUserResumePage(){
        return new UserResumePage(this.page);
    }

    /**
     * @description Returns an instance of the User Personal Details Page
     */
    getUserPersonalPage(){
        return new UserPersonalPage(this.page);
    }

    /**
     * @description Returns an instance of the Admin Authentication Page
     */
    getAdminAuthPage() {
        return new AdminAuthPage(this.page);
    }
}