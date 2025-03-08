import { test, expect } from '@playwright/test';
import POManager from '../../../../pages-factory/poManager';
import dotenv from 'dotenv';

dotenv.config();

let context, poManager, adminLoginPage;

test.describe('TS-1: Login Admin', () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    const page = await context.newPage();

    // Initialize Page Object Manager
    poManager = new POManager(page);
    adminLoginPage = poManager.getAdminAuthPage();

    console.log('Opening URL...');
    await adminLoginPage.openUrl(process.env.URL_DASHBOARD!);
    console.log('URL opened successfully.');
  });

  test('TC-1: Login Super Admin with valid password', async () => {
    await adminLoginPage.fillInputEmail(process.env.admin_email!);
    await adminLoginPage.fillInputPassword(process.env.admin_password!);
    await adminLoginPage.clickButtonSignIn();
    await adminLoginPage.visibleToastSuccessAdminLogin();
    await adminLoginPage.verifyLoginSuperAdmin();
    await adminLoginPage.clickThreeDotsButton();
    await adminLoginPage.clickLogoutButton();
  });
  test('TC-2: Login Normal Admin with valid password', async () => {
    await adminLoginPage.fillInputEmail(process.env.normal_admin_email!);
    await adminLoginPage.fillInputPassword(process.env.admin_password!);
    await adminLoginPage.clickButtonSignIn();
    await adminLoginPage.visibleToastSuccessAdminLogin();
    await adminLoginPage.verifyLoginNormalAdmin();
    await adminLoginPage.clickThreeDotsButton();
    await adminLoginPage.clickLogoutButton();
  });
  test('TC-3: Login Company Admin with valid password', async () => {
    await adminLoginPage.fillInputEmail(process.env.company_admin_email!);
    await adminLoginPage.fillInputPassword(process.env.admin_password!);
    await adminLoginPage.clickButtonSignIn();
    await adminLoginPage.visibleToastSuccessAdminLogin();
    await adminLoginPage.verifyLoginCompanyAdmin();
    await adminLoginPage.clickThreeDotsButton();
    await adminLoginPage.clickLogoutButton();
  });
  test.afterAll(async () => {
    console.log('Closing resources...');
    await context.close();
  });
});
