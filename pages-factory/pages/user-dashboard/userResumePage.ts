import { Page, expect } from "@playwright/test";
import { UserResumeLocators, UserResumePersonalDetailsLocators, UserResumeWorkExperiencesLocators } from "../../locators/user-dashboard/userResumeLocators";


export default class UserResumePage {
    constructor(public page: Page) {}

    /**
     * @description clicks new resume button
     */
    async clickNewResume(){
        await this.page.locator(UserResumeLocators.new_resume_builder_button).waitFor({
            state: "visible",
            timeout: 5000
        });
        await this.page.locator(UserResumeLocators.new_resume_builder_button).click();
    }

    /**
     * @description clicks new blank resume builder button
     */
    async clickBlankNewResume(){
        await this.page.locator(UserResumeLocators.new_resume_blank_button).click();
    }

    /**
     * @description verify new resume created
     */
    async verifyToastResumeCreatedVisible(){
        await expect(this.page.locator(UserResumeLocators.resume_created_toast)).toBeVisible();
    }

    /**
     * @description verify resume title modal appear
     */
    async verifyResumeModal() {
        await this.page.locator(UserResumeLocators.resume_title_modal).waitFor({
            state: "visible",
            timeout: 5000
        });
    }

    /**
     * @description input resume title
     */
    async inputResumeTitle(resume_title: string){
        await this.page.locator(UserResumeLocators.resume_title_field).fill(resume_title);
    }

    /**
     * @description click button save resume title
     */
    async clickSaveResumeTitle(){
        await this.page.locator(UserResumeLocators.resume_title_save_button).click();
    }

    /**
     * @description verify resume saved
     */
    async verifyResumeSaved(){
        await expect(this.page.locator(UserResumeLocators.resume_saved_toast)).toBeVisible();
    }

    /**
     * @description Click save and continue button
     */
    async clickSaveAndContinueButton(){
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


}