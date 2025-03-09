import { Page, expect } from '@playwright/test';
import {
  UserResumeLocators,
  UserResumePersonalDetailsLocators,
  UserResumeWorkExperiencesLocators,
  UserResumeEducationsLocators,
  UserResumeOrganizationsLocators,
  UserResumeOthersLocators,
} from '../../locators/user-dashboard/userResumeLocators';

export default class UserResumePage {
  constructor(public page: Page) {}

  /**
   * @description clicks new resume button
   */
  async clickNewResume() {
    await this.page.locator(UserResumeLocators.new_resume_builder_button).waitFor({
      state: 'visible',
      timeout: 5000,
    });
    await this.page.locator(UserResumeLocators.new_resume_builder_button).click();
  }

  /**
   * @description clicks new blank resume builder button
   */
  async clickBlankNewResume() {
    await this.page.locator(UserResumeLocators.new_resume_blank_button).click();
  }

  /**
   * @description verify new resume created
   */
  async verifyToastResumeCreatedVisible() {
    await expect(this.page.locator(UserResumeLocators.resume_created_toast)).toBeVisible();
  }

  /**
   * @description verify resume title modal appear
   */
  async verifyResumeModal() {
    await this.page.locator(UserResumeLocators.resume_title_modal).waitFor({
      state: 'visible',
      timeout: 5000,
    });
  }

  /**
   * @description input resume title
   */
  async inputResumeTitle(resume_title: string) {
    await this.page.locator(UserResumeLocators.resume_title_field).fill(resume_title);
  }

  /**
   * @description click button save resume title
   */
  async clickSaveResumeTitle() {
    await this.page.locator(UserResumeLocators.resume_title_save_button).click();
  }

  /**
   * @description verify resume saved
   */
  async verifyResumeSaved() {
    await expect(this.page.locator(UserResumeLocators.resume_saved_toast)).toBeVisible();
  }

  /**
   * @description Click save and continue button
   */
  async clickSaveAndContinueButton() {
    await this.page.locator(UserResumeLocators.resume_save_continue_button).click();
  }

  /**
   * @description Fill in personal details form
   */
  async fill_inputName(fullName) {
    await this.page.locator(UserResumePersonalDetailsLocators.input_nameResume).fill(fullName);
  }

  async fill_inputPhoneNumber(phoneNumber) {
    await this.page.locator(UserResumePersonalDetailsLocators.input_phoneResume).fill(phoneNumber);
  }

  async fill_inputEmail(email) {
    await this.page.locator(UserResumePersonalDetailsLocators.input_emailResume).fill(email);
  }

  async fill_inputLinkedInUrl(linkedinUrl) {
    await this.page.locator(UserResumePersonalDetailsLocators.input_linkedInResume).fill(linkedinUrl);
  }

  async fill_inputPortfolio(portfolioUrl) {
    await this.page.locator(UserResumePersonalDetailsLocators.input_portfolioResume).fill(portfolioUrl);
  }

  async fill_inputAddress(address) {
    await this.page.locator(UserResumePersonalDetailsLocators.input_addressResume).fill(address);
  }

  async fill_inputBio(bio) {
    await this.page.locator(UserResumePersonalDetailsLocators.input_bioResume).fill(bio);
  }

  /**
   * @description Check visibility of preview data
   */
  async visible_previewName(fullName) {
    await expect(this.page.locator(UserResumePersonalDetailsLocators.txt_previewName(fullName))).toBeVisible();
  }

  async visible_previewAddress(address) {
    await expect(this.page.locator(UserResumePersonalDetailsLocators.txt_previewAddress(address))).toBeVisible();
  }

  async visible_previewBio(bio) {
    await expect(this.page.locator(UserResumePersonalDetailsLocators.txt_previewBio(bio))).toBeVisible();
  }

  /**
   * @description Upload profile image
   */
  async fill_uploadProfileImage(fileDir) {
    await this.page.locator(UserResumePersonalDetailsLocators.upload_profileImage).setInputFiles(fileDir);
    await this.page.locator(UserResumePersonalDetailsLocators.btn_uploadConfirmation).click();
  }

  async visible_toastSuccessUploadImage() {
    await expect(this.page.locator(UserResumePersonalDetailsLocators.toast_successUploadImage)).toBeVisible();
  }

  /**
   * @description Click add experience button
   */
  async click_buttonAddExperience() {
    await this.page.locator(UserResumeWorkExperiencesLocators.btn_addExperience).click();
  }

  /**
   * @description Fill in work experience form
   */
  async fill_inputCompanyName(companyName) {
    await this.page.locator(UserResumeWorkExperiencesLocators.input_companyName).fill(companyName);
  }

  async fill_inputRole(role) {
    await this.page.locator(UserResumeWorkExperiencesLocators.input_role).fill(role);
  }

  async fill_inputCompanyLocation(companyLocation) {
    await this.page.locator(UserResumeWorkExperiencesLocators.input_companyLocation).fill(companyLocation);
  }

  async fill_inputCompanyDescription(companyDescription) {
    await this.page.locator(UserResumeWorkExperiencesLocators.input_companyDescription).fill(companyDescription);
  }

  async fill_inputStartDate(monthStartDate, yearStartDate) {
    await this.page.locator(UserResumeWorkExperiencesLocators.option_monthStartDate).click();
    await this.page.locator(UserResumeWorkExperiencesLocators.select_monthStartDate(monthStartDate)).click();

    await this.page.locator(UserResumeWorkExperiencesLocators.option_yearStartDate).click();
    await this.page.locator(UserResumeWorkExperiencesLocators.select_yearStartDate(yearStartDate)).click();
  }

  async fill_inputEndDate(monthEndDate, yearEndDate) {
    await this.page.locator(UserResumeWorkExperiencesLocators.option_monthEndDate).click();
    await this.page.locator(UserResumeWorkExperiencesLocators.select_monthEndDate(monthEndDate)).click();

    await this.page.locator(UserResumeWorkExperiencesLocators.option_yearEndDate).click();
    await this.page.locator(UserResumeWorkExperiencesLocators.select_yearEndDate(yearEndDate)).click();
  }

  async fill_inputRoleDescription(roleDescription) {
    await this.page.locator(UserResumeWorkExperiencesLocators.input_roleDescription).fill(roleDescription);
  }

  /**
   * @description Check visibility of preview data
   */
  async visible_previewCompanyName(companyName) {
    await expect(this.page.locator(UserResumeWorkExperiencesLocators.txt_previewCompanyName(companyName))).toBeVisible();
  }

  async visible_previewCompanyLocation(companyLocation) {
    await expect(this.page.locator(UserResumeWorkExperiencesLocators.txt_previewCompanyLocation(companyLocation))).toBeVisible();
  }

  async visible_previewRole(role) {
    await expect(this.page.locator(UserResumeWorkExperiencesLocators.txt_previewRole(role))).toBeVisible();
  }

  async visible_previewCompanyDescription(companyDescription) {
    await expect(this.page.locator(UserResumeWorkExperiencesLocators.txt_previewCompanyDescription(companyDescription))).toBeVisible();
  }

  async visible_previewRoleDescription(roleDescription) {
    await expect(this.page.locator(UserResumeWorkExperiencesLocators.txt_previewRoleDescription(roleDescription))).toBeVisible();
  }

  /**
   * @description Click add education button
   */
  async click_buttonAddEducation() {
    await this.page.locator(UserResumeEducationsLocators.btn_addEducation).click();
  }

  /**
   * @description Fill in education form
   */
  async fill_inputSchoolName(schoolName) {
    await this.page.locator(UserResumeEducationsLocators.input_schoolName).fill(schoolName);
    await this.page.locator(UserResumeEducationsLocators.input_schoolName).press('Enter');
  }

  async fill_inputSchoolLocation(schoolLocation) {
    await this.page.locator(UserResumeEducationsLocators.input_schoolLocation).fill(schoolLocation);
  }

  async fill_inputSchoolStartDate(schoolStartMonth, schoolStartYear) {
    await this.page.locator(UserResumeEducationsLocators.option_schoolStartMonth).click();
    await this.page.locator(UserResumeEducationsLocators.select_schoolStartMonth(schoolStartMonth)).click();

    await this.page.locator(UserResumeEducationsLocators.option_schoolStartYear).click();
    await this.page.locator(UserResumeEducationsLocators.select_schoolStartYear(schoolStartYear)).click();
  }

  async fill_inputSchoolEndDate(schoolEndMonth, schoolEndYear) {
    await this.page.locator(UserResumeEducationsLocators.option_schoolEndMonth).click();
    await this.page.locator(UserResumeEducationsLocators.select_schoolEndMonth(schoolEndMonth)).click();

    await this.page.locator(UserResumeEducationsLocators.option_schoolEndYear).click();
    await this.page.locator(UserResumeEducationsLocators.select_schoolEndYear(schoolEndYear)).click();
  }

  async fill_inputEducationLevel(educationLevel) {
    await this.page.locator(UserResumeEducationsLocators.option_educationLevel).click();
    await this.page.locator(UserResumeEducationsLocators.select_educationLevel(educationLevel)).click();
  }

  async fill_inputMajor(major) {
    await this.page.locator(UserResumeEducationsLocators.input_Major).fill(major);
  }

  async fill_inputGPA(GPA, maxGPA) {
    await this.page.locator(UserResumeEducationsLocators.input_GPA).fill(GPA);
    await this.page.locator(UserResumeEducationsLocators.input_maxGPA).fill(maxGPA);
  }

  async fill_inputSchoolActivity(schoolActivity) {
    await this.page.locator(UserResumeEducationsLocators.input_schoolActivity).fill(schoolActivity);
  }

  /**
   * @description Check visibility of preview data
   */

  async visible_previewEducationEntry(schoolName, schoolLocation) {
    await expect(this.page.locator(UserResumeEducationsLocators.txt_previewEducationEntry(schoolName, schoolLocation))).toBeVisible();
  }

  async visible_previewSchoolPeriod(schoolStartMonth, schoolStartYear, schoolEndMonth, schoolEndYear) {
    await expect(
      this.page.locator(UserResumeEducationsLocators.txt_previewSchoolPeriod(schoolStartMonth, schoolStartYear, schoolEndMonth, schoolEndYear))
    ).toBeVisible();
  }

  async visible_previewSchoolDetails(educationLevel, major, GPA, maxGPA) {
    await expect(this.page.locator(UserResumeEducationsLocators.txt_previewSchoolDetails(educationLevel, major, GPA, maxGPA))).toBeVisible();
  }

  async visible_previewSchoolActivity(schoolActivity) {
    await expect(this.page.locator(UserResumeEducationsLocators.txt_previewSchoolActivity(schoolActivity))).toBeVisible();
  }

  /**
   * @description Clicks the "Add Organization" button.
   */
  async click_buttonAddOrganization() {
    await this.page.locator(UserResumeOrganizationsLocators.btn_addOrganization).click();
  }

  /**
   * @description Fills in the organization name.
   */
  async fill_inputOrganizationName(organizationName) {
    await this.page.locator(UserResumeOrganizationsLocators.input_organizationName).fill(organizationName);
  }

  /**
   * @description Fills in the organization role/title.
   */
  async fill_inputOrganizationRole(organizationRole) {
    await this.page.locator(UserResumeOrganizationsLocators.input_organizationRole).fill(organizationRole);
  }

  /**
   * @description Fills in the organization description.
   */
  async fill_inputOrganizationDescription(organizationDescription) {
    await this.page.locator(UserResumeOrganizationsLocators.input_organizationDescription).fill(organizationDescription);
  }

  /**
   * @description Fills in the organization location.
   */
  async fill_inputOrganizationLocation(organizationLocation) {
    await this.page.locator(UserResumeOrganizationsLocators.input_organizationLocation).fill(organizationLocation);
  }

  /**
   * @description Selects the organization start date (month & year).
   */
  async fill_inputOrganizationStartDate(organizationStartMonth, organizationStartYear) {
    await this.page.locator(UserResumeOrganizationsLocators.option_organizationStartMonth).click();
    await this.page.locator(UserResumeOrganizationsLocators.select_organizationStartMonth(organizationStartMonth)).click();

    await this.page.locator(UserResumeOrganizationsLocators.option_organizationStartYear).click();
    await this.page.locator(UserResumeOrganizationsLocators.select_organizationStartYear(organizationStartYear)).click();
  }

  /**
   * @description Selects the organization end date (month & year).
   */
  async fill_inputOrganizationEndDate(organizationEndMonth, organizationEndYear) {
    await this.page.locator(UserResumeOrganizationsLocators.btn_dateCurrentStillActive).click();

    await this.page.locator(UserResumeOrganizationsLocators.option_organizationEndMonth).click();
    await this.page.locator(UserResumeOrganizationsLocators.select_organizationEndMonth(organizationEndMonth)).click();

    await this.page.locator(UserResumeOrganizationsLocators.option_organizationEndYear).click();
    await this.page.locator(UserResumeOrganizationsLocators.select_organizationEndYear(organizationEndYear)).click();
  }

  /**
   * @description Fills in the organization role description.
   */
  async fill_inputOrganizationRoleDescription(organizationRoleDescription) {
    await this.page.locator(UserResumeOrganizationsLocators.input_organizationRoleDescription).fill(organizationRoleDescription);
  }

  /**
   * @description Verifies if the organization name is visible in the preview.
   */
  async visible_previewOrganizationName(organizationName) {
    await expect(this.page.locator(UserResumeOrganizationsLocators.txt_previewOrganizationName(organizationName))).toBeVisible();
  }

  /**
   * @description Verifies if the organization location is visible in the preview.
   */
  async visible_previewOrganizationLocation(organizationLocation) {
    await expect(this.page.locator(UserResumeOrganizationsLocators.txt_previewOrganizationLocation(organizationLocation))).toBeVisible();
  }

  /**
   * @description Verifies if the organization period is visible in the preview.
   */
  async visible_previewOrganizationPeriod(organizationStartMonth, organizationStartYear, organizationEndMonth, organizationEndYear) {
    await expect(
      this.page.locator(
        UserResumeOrganizationsLocators.txt_previewOrganizationPeriod(
          organizationStartMonth,
          organizationStartYear,
          organizationEndMonth,
          organizationEndYear
        )
      )
    ).toBeVisible();
  }

  /**
   * @description Verifies if the organization role is visible in the preview.
   */
  async visible_previewOrganizationRole(organizationRole) {
    await expect(this.page.locator(UserResumeOrganizationsLocators.txt_previewOrganizationRole(organizationRole))).toBeVisible();
  }

  /**
   * @description Verifies if the organization description is visible in the preview.
   */
  async visible_previewOrganizationDescription(organizationDescription) {
    await expect(this.page.locator(UserResumeOrganizationsLocators.txt_previewOrganizationDescription(organizationDescription))).toBeVisible();
  }

  /**
   * @description Verifies if the organization role description is visible in the preview.
   */
  async visible_previewOrganizationRoleDescription(organizationRoleDescription) {
    await expect(
      this.page.locator(UserResumeOrganizationsLocators.txt_previewOrganizationRoleDescription(organizationRoleDescription))
    ).toBeVisible();
  }

  /**
   * @description Clicks the "Add Experience" button for Others section.
   */
  async click_buttonAddOthers() {
    await this.page.locator(UserResumeOthersLocators.btn_addOthers).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.locator(UserResumeOthersLocators.btn_addOthers).click();
  }

  /**
   * @description Selects the "Others Type" from the dropdown.
   */
  async fill_inputOthersType(othersType) {
    await this.page.locator(UserResumeOthersLocators.option_othersType).click();
    await this.page.locator(UserResumeOthersLocators.select_othersType(othersType)).click();
  }

  /**
   * @description Selects the "Others Year" from the dropdown.
   */
  async fill_inputOthersYear(othersYear) {
    await this.page.locator(UserResumeOthersLocators.option_othersYear).click();
    await this.page.locator(UserResumeOthersLocators.select_othersYear(othersYear)).click();
  }

  /**
   * @description Fills in the elaboration field for Others section.
   */
  async fill_inputOthersElaboration(othersElaboration) {
    await this.page.locator(UserResumeOthersLocators.input_othersElaboration).fill(othersElaboration);
  }

  /**
   * @description Verifies if the selected "Others Type" is visible in the preview.
   */
  async visible_previewOthersType(othersType) {
    await expect(this.page.locator(UserResumeOthersLocators.txt_previewOthersType(othersType))).toBeVisible();
  }

  /**
   * @description Verifies if the selected "Others Year" is visible in the preview.
   */
  async visible_previewOthersYear(othersYear) {
    await expect(this.page.locator(UserResumeOthersLocators.txt_previewOthersYear(othersYear))).toBeVisible();
  }

  /**
   * @description Verifies if the entered "Others Elaboration" is visible in the preview.
   */
  async visible_previewOthersElaboration(othersElaboration) {
    await expect(this.page.locator(UserResumeOthersLocators.txt_previewOthersElaboration(othersElaboration))).toBeVisible();
  }
}
