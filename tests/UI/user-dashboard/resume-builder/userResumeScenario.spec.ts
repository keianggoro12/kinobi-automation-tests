import { test, expect } from '@playwright/test';
import POManager from '../../../../pages-factory/poManager';
import dotenv from 'dotenv';

const dataResume = require('../../../../data-test/dataResume.json');
const personalInfo = dataResume['Personal Information'];
const workInfo = dataResume['Work Experiences'];
const educationInfo = dataResume['Education'];
const organizationInfo = dataResume['Organization'];
const othersInfo = dataResume['Others'];

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

  test('TC-2: Create a new blank resume successfully', async () => {
    await userHomePage.clickResumeBuilder();
    await userResumePage.clickNewResume();
    await userResumePage.clickBlankNewResume();
    await userResumePage.verifyToastResumeCreatedVisible();
    await userResumePage.verifyResumeModal();
    await userResumePage.inputResumeTitle(dataResume['Resume Title']);
    await userResumePage.clickSaveResumeTitle();
    await userResumePage.verifyResumeSaved();
  });
  
  test('TC-3: Fill in personal details completely', async () => {
    await userResumePage.fill_inputName(personalInfo.Name);
    await userResumePage.fill_inputPhoneNumber(personalInfo.PhoneNumber);
    await userResumePage.fill_inputEmail(personalInfo.Email);
    await userResumePage.fill_inputLinkedInUrl(personalInfo.LinkedIn);
    await userResumePage.fill_inputPortfolio(personalInfo.Portfolio);
    await userResumePage.fill_inputAddress(personalInfo.Address);
    await userResumePage.fill_inputBio(personalInfo.Bio);
  
    await userResumePage.fill_uploadProfileImage('data-test/images/image.jpg');
    await userResumePage.visible_toastSuccessUploadImage();
  
    await userResumePage.clickSaveAndContinueButton();
  });
  
  test('TC-4: Verify that personal details appear correctly in the preview', async () => {
    await userResumePage.visible_previewName(personalInfo.Name.toUpperCase());
    await userResumePage.visible_previewAddress(personalInfo.Address);
    await userResumePage.visible_previewBio(personalInfo.Bio);
  });
  
  test('TC-5: Fill in work experience details accurately', async () => {
    await userResumePage.click_buttonAddExperience();
    await userResumePage.fill_inputCompanyName(workInfo.CompanyName);
    await userResumePage.fill_inputRole(workInfo.Role);
    await userResumePage.fill_inputCompanyLocation(workInfo.CompanyLocation);
    await userResumePage.fill_inputCompanyDescription(workInfo.CompanyDescription);
    await userResumePage.fill_inputStartDate(workInfo.monthStartDate, workInfo.yearStartDate);
    await userResumePage.fill_inputEndDate(workInfo.monthEndDate, workInfo.yearEndDate);
    await userResumePage.fill_inputRoleDescription(workInfo.roleDescription);
    
    await userResumePage.clickSaveAndContinueButton();
  });
  
  test('TC-6: Verify that work experience details appear correctly in the preview', async () => {
    await userResumePage.visible_previewCompanyName(workInfo.CompanyName);
    await userResumePage.visible_previewCompanyLocation(workInfo.CompanyLocation);
    await userResumePage.visible_previewRole(workInfo.Role);
    await userResumePage.visible_previewCompanyDescription(workInfo.CompanyDescription);
    await userResumePage.visible_previewRoleDescription(workInfo.roleDescription);
  });
  
  test('TC-7: Fill in education details completely', async () => {
    await userResumePage.click_buttonAddEducation();
    await userResumePage.fill_inputSchoolName(educationInfo.SchoolName);
    await userResumePage.fill_inputSchoolLocation(educationInfo.SchoolLocation);
    await userResumePage.fill_inputSchoolStartDate(educationInfo.SchoolStartMonth, educationInfo.SchoolStartYear);
    await userResumePage.fill_inputSchoolEndDate(educationInfo.SchoolEndMonth, educationInfo.SchoolEndYear);
    await userResumePage.fill_inputEducationLevel(educationInfo.EducationLevel);
    await userResumePage.fill_inputMajor(educationInfo.Major);
    await userResumePage.fill_inputGPA(educationInfo.GPA, educationInfo.MaxGPA);
    await userResumePage.fill_inputSchoolActivity(educationInfo.SchoolActivity);
  
    await userResumePage.clickSaveAndContinueButton();
  });
  
  test('TC-8: Verify that education details appear correctly in the preview', async () => {
    await userResumePage.visible_previewEducationEntry(educationInfo.SchoolName, educationInfo.SchoolLocation);
    await userResumePage.visible_previewSchoolPeriod(
      educationInfo.SchoolStartMonth,
      educationInfo.SchoolStartYear,
      educationInfo.SchoolEndMonth,
      educationInfo.SchoolEndYear
    );
    await userResumePage.visible_previewSchoolDetails(educationInfo.EducationLevel, educationInfo.Major, educationInfo.GPA, educationInfo.MaxGPA);
    await userResumePage.visible_previewSchoolActivity(educationInfo.SchoolActivity);
  });
  
  test('TC-9: Fill in organization experience details accurately', async () => {
    await userResumePage.click_buttonAddOrganization();
    await userResumePage.fill_inputOrganizationName(organizationInfo.OrganizationName);
    await userResumePage.fill_inputOrganizationRole(organizationInfo.OrganizationRole);
    await userResumePage.fill_inputOrganizationDescription(organizationInfo.OrganizationDescription);
    await userResumePage.fill_inputOrganizationLocation(organizationInfo.OrganizationLocation);
    await userResumePage.fill_inputOrganizationStartDate(organizationInfo.OrganizationStartMonth, organizationInfo.OrganizationStartYear);
    await userResumePage.fill_inputOrganizationEndDate(organizationInfo.OrganizationEndMonth, organizationInfo.OrganizationEndYear);
    await userResumePage.fill_inputOrganizationRoleDescription(organizationInfo.OrganizationRoleDescription);
  
    await userResumePage.clickSaveAndContinueButton();
  });
  
  test('TC-10: Verify that organization experience details appear correctly in the preview', async () => {
    await userResumePage.visible_previewOrganizationName(organizationInfo.OrganizationName);
    await userResumePage.visible_previewOrganizationLocation(organizationInfo.OrganizationLocation);
    await userResumePage.visible_previewOrganizationPeriod(
      organizationInfo.OrganizationStartMonth,
      organizationInfo.OrganizationStartYear,
      organizationInfo.OrganizationEndMonth,
      organizationInfo.OrganizationEndYear
    );
    await userResumePage.visible_previewOrganizationRole(organizationInfo.OrganizationRole);
    await userResumePage.visible_previewOrganizationDescription(organizationInfo.OrganizationDescription);
    await userResumePage.visible_previewOrganizationRoleDescription(organizationInfo.OrganizationRoleDescription);
  });
  
  test('TC-11: Fill in additional skills, achievements, and other relevant experiences', async () => {
    await userResumePage.click_buttonAddOthers();
    await userResumePage.fill_inputOthersType(othersInfo.OthersType);
    await userResumePage.fill_inputOthersYear(othersInfo.OthersYear);
    await userResumePage.fill_inputOthersElaboration(othersInfo.OthersElaboration);
  
    await userResumePage.clickSaveAndContinueButton();
  });
  
  test('TC-12: Verify that additional skills, achievements, and experiences appear correctly in the preview', async () => {
    await userResumePage.visible_previewOthersType(othersInfo.OthersType);
    await userResumePage.visible_previewOthersYear(othersInfo.OthersYear);
    await userResumePage.visible_previewOthersElaboration(othersInfo.OthersElaboration);
  });
  
  test.afterAll(async () => {
    console.log('Closing resources...');
    await context.close();
  });
});
