import { test, expect } from '@playwright/test';
import POManager from '../../../../pages-factory/poManager';
import dotenv from 'dotenv';

const dataResume = require('../../../../data-test/dataResume.json');
const personalInfo = dataResume['Personal Information'];
const workInfo = dataResume['Work Experiences'];

dotenv.config();

let context, poManager, userLoginPage, userHomePage, userResumePage;

test.describe('TS-1: Resume', () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    const page = await context.newPage();

    // Initialize Page Object Manager
    poManager = new POManager(page);
    userLoginPage = poManager.getUserAuthPage();
    userHomePage = poManager.getUserHomePage();
    userResumePage = poManager.getUserResumePage();

    console.log('Opening URL...');
    await userLoginPage.openUrl(process.env.URL!);
    console.log('URL opened successfully.');
    await userLoginPage.clickButtonLoginStudent();
    await userLoginPage.fillInputEmail(process.env.user_email!);
    await userLoginPage.fillInputPassword(process.env.user_password!);
    await userLoginPage.clickButtonSignIn();
    await userLoginPage.visibleToastSuccessLogin();
  });

  test('TC-2: Create new blank resume', async () => {
    await userHomePage.clickResumeBuilder();
    await userResumePage.clickNewResume();
    await userResumePage.clickBlankNewResume();
    await userResumePage.verifyToastResumeCreatedVisible();
    await userResumePage.verifyResumeModal();
    await userResumePage.inputResumeTitle(dataResume['Resume Title']);
    await userResumePage.clickSaveResumeTitle();
    await userResumePage.verifyResumeSaved();
  });

  test('TC-3: Fill personal details', async () => {
    console.log('Filling in personal details...');
    await userResumePage.fill_inputName(personalInfo.Name);
    await userResumePage.fill_inputPhoneNumber(personalInfo.PhoneNumber);
    await userResumePage.fill_inputEmail(personalInfo.Email);
    await userResumePage.fill_inputLinkedInUrl(personalInfo.LinkedIn);
    await userResumePage.fill_inputPortfolio(personalInfo.Portfolio);
    await userResumePage.fill_inputAddress(personalInfo.Address);
    await userResumePage.fill_inputBio(personalInfo.Bio);
    console.log('Personal details filled successfully.');

    console.log('Uploading profile image...');
    await userResumePage.fill_uploadProfileImage('data-test/images/image.jpg');
    await userResumePage.visible_toastSuccessUploadImage();
    console.log('Profile image uploaded successfully.');

    console.log('Verifying preview details...');
    await userResumePage.visible_previewName(personalInfo.Name.toUpperCase());
    await userResumePage.visible_previewAddress(personalInfo.Address);
    await userResumePage.visible_previewBio(personalInfo.Bio);
    console.log('Preview details verified successfully.');

    await userResumePage.clickSaveAndContinueButton();
  });

  test('TC-4: Fill work experience', async () => {
    console.log('Filling in work experience...');
    await userResumePage.click_buttonAddExperience();
    await userResumePage.fill_inputCompanyName(workInfo.CompanyName);
    await userResumePage.fill_inputRole(workInfo.Role);
    await userResumePage.fill_inputCompanyLocation(workInfo.CompanyLocation);
    await userResumePage.fill_inputCompanyDescription(workInfo.CompanyDescription);
    await userResumePage.fill_inputStartDate(workInfo.monthStartDate, workInfo.yearStartDate);
    await userResumePage.fill_inputEndDate(workInfo.monthEndDate, workInfo.yearEndDate);
    await userResumePage.fill_inputRoleDescription(workInfo.roleDescription);
    console.log('Work experience filled successfully.');

    console.log('Verifying work experience preview...');
    await userResumePage.visible_previewCompanyName(workInfo.CompanyName);
    await userResumePage.visible_previewCompanyLocation(workInfo.CompanyLocation);
    await userResumePage.visible_previewRole(workInfo.Role);
    await userResumePage.visible_previewCompanyDescription(workInfo.CompanyDescription);
    await userResumePage.visible_previewRoleDescription(workInfo.roleDescription);
    console.log('Work experience preview verified successfully.');

    await userResumePage.clickSaveAndContinueButton();
  });

  test.afterAll(async () => {
    console.log('Closing resources...');
    await context.close();
  });
});
