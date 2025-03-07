import { test, expect } from "@playwright/test";
import POManager from "../../../../pages-factory/poManager";
import dotenv from "dotenv";

dotenv.config();

let context, poManager, userLoginPage;

test.describe("TS-1: Login", () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    const page = await context.newPage();
    
    // Initialize Page Object Manager
    poManager = new POManager(page);
    userLoginPage = poManager.getUserAuthPage();


    console.log("Opening URL...");
    await userLoginPage.openUrl(process.env.URL!);
    console.log("URL opened successfully.");
  });

  test("TC-1: Login with disabled button", async () => {
    await userLoginPage.clickButtonLoginStudent();
    await userLoginPage.visibleDisabledSignInButton();
  });

  test("TC-3: Login with valid credentials as student", async () => {
    await userLoginPage.fillInputEmail(process.env.user_email!);
    await userLoginPage.fillInputPassword(process.env.user_password!);
    await userLoginPage.clickButtonSignIn();
    await userLoginPage.visibleToastSuccessLogin();
  });

  test.afterAll(async () => {
    console.log("Closing resources...");
    await context.close();
  });
});