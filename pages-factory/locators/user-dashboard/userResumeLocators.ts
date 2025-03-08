export class UserResumeLocators {
    static new_resume_builder_button = '//div[contains(@class, "add-new-button")]//button';
    static new_resume_blank_button ='//button[@data-v-1f0c1fe0]//span[contains(text(), "New Resume")]';
    static resume_created_toast = 'text="Created your resume successfully!"';
    static resume_title_modal = 'text="Give your resume a title"';
    static resume_title_blank_field = 'text="Title is required"';
    static resume_title_field ='//input[@required="required"]';
    static resume_title_save_button = 'role=button[name="Save"]';
    static resume_saved_toast = 'text="Your resume title has been saved successfully!"';
    static resume_save_continue_button = 'role=button[name="Save & Continue"]'
};

export class UserResumePersonalDetailsLocators {
    static input_nameResume = "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='name']";
    static input_phoneResume = "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='phone']";
    static input_emailResume = "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='email']";
    static input_linkedInResume = "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='linked-in']";
    static input_portfolioResume = "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='portfolio-url']";
    static input_addressResume = "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='address']";
    static input_bioResume = "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::textarea[@id='description']";
    static upload_profileImage = '//input[@type="file"][2]';
    static btn_uploadConfirmation = 'role=button[name="Save"]';
    static toast_successUploadImage = 'text="Profile has been saved and uploaded successfully."';
    
    static txt_previewName = (fullName) => `role=heading[name="${fullName}"]`;
    static txt_previewBio = (bio) => `text="${bio}"`;
    static txt_previewAddress = (address) => `text="${address}"`;
};


export class UserResumeWorkExperiencesLocators {
    static btn_addExperience = "//div[@data-v-19a8b42a]//button[contains(@class, 'v-btn') and contains(., 'Add experience')]";
    static input_companyName = "//input[@id='company-name']";
    static input_role = "//input[@id='job-title']";
    static input_companyLocation = "//input[@id='company-location']";
    static input_companyDescription = "//textarea[@id='company-description']";
    
    static option_monthStartDate = "//div[normalize-space()='Work Experiences']/ancestor::div[@class='container']/descendant::input[@id='start-date-month']";
    static option_yearStartDate = "//div[normalize-space()='Work Experiences']/ancestor::div[@class='container']/descendant::input[@id='start-date-year']";
    static option_monthEndDate = "//div[normalize-space()='Work Experiences']/ancestor::div[@class='container']/descendant::input[@id='end-date-month']";
    static option_yearEndDate = "//div[normalize-space()='Work Experiences']/ancestor::div[@class='container']/descendant::input[@id='end-date-year']";
    
    static select_monthStartDate = (monthStartDate) => `role=option[name='${monthStartDate}']`;
    static select_yearStartDate = (yearStartDate) => `role=option[name='${yearStartDate}']`;
    static select_monthEndDate = (monthEndDate) => `role=option[name='${monthEndDate}']`;
    static select_yearEndDate = (yearEndDate) => `role=option[name='${yearEndDate}']`;
    
    static input_roleDescription = "#elaboration-list-professional_experience0";
    
    static txt_previewCompanyName = (companyName) => `#pdf .body-title-country .body-title:has-text("${companyName}")`;
    static txt_previewCompanyLocation = (companyLocation) => `table.body-title-country-date span.body-country:has-text('${companyLocation}')`;
    static txt_previewRole = (role) => `//div[@id='pdf']//div[contains(@class, 'body-subtitle') and contains(text(), "${role}")]`;
    static txt_previewCompanyDescription = (companyDescription) => `text='${companyDescription}'`;
    static txt_previewRoleDescription = (roleDescription) => `#pdf >> text=${roleDescription}`;
};