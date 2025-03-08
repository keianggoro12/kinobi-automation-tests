import { test, expect } from "@playwright/test";
import POManager from "../../../../pages-factory/poManager";
import dotenv from "dotenv";

dotenv.config();

let context, poManager, adminLoginPage;

test.describe("TS-1: Login Admin", () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    const page = await context.newPage();
    
    // Initialize Page Object Manager
    poManager = new POManager(page);
    adminLoginPage = poManager.getAdminAuthPage();



    console.log("Opening URL...");
    await adminLoginPage.openUrl(process.env.URL_DASHBOARD!);
    console.log("URL opened successfully.");
  });


    test.afterAll(async () => {
      console.log("Closing resources...");
      await context.close();
    });
  });