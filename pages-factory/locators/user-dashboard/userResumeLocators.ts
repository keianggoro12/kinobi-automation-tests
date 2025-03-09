export class UserResumeLocators {
  static new_resume_builder_button = '//div[contains(@class, "add-new-button")]//button';
  static new_resume_blank_button = '//button[@data-v-1f0c1fe0]//span[contains(text(), "New Resume")]';
  static resume_created_toast = 'text="Created your resume successfully!"';
  static resume_title_modal = 'text="Give your resume a title"';
  static resume_title_blank_field = 'text="Title is required"';
  static resume_title_field = '//input[@required="required"]';
  static resume_title_save_button = 'role=button[name="Save"]';
  static resume_saved_toast = 'text="Your resume title has been saved successfully!"';
  static resume_save_continue_button = 'role=button[name="Save & Continue"]';
}

export class UserResumePersonalDetailsLocators {
  static input_nameResume =
    "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='name']";
  static input_phoneResume =
    "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='phone']";
  static input_emailResume =
    "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='email']";
  static input_linkedInResume =
    "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='linked-in']";
  static input_portfolioResume =
    "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='portfolio-url']";
  static input_addressResume =
    "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::input[@id='address']";
  static input_bioResume =
    "//span[normalize-space()='Fill In Your Personal Information']/ancestor::div[@class='container']/descendant::textarea[@id='description']";
  static upload_profileImage = '//input[@type="file"][2]';
  static btn_uploadConfirmation = 'role=button[name="Save"]';
  static toast_successUploadImage = 'text="Profile has been saved and uploaded successfully."';

  static txt_previewName = (fullName) => `role=heading[name="${fullName}"]`;
  static txt_previewBio = (bio) => `text="${bio}"`;
  static txt_previewAddress = (address) => `text="${address}"`;
}

export class UserResumeWorkExperiencesLocators {
  static btn_addExperience = "//div[@data-v-19a8b42a]//button[contains(@class, 'v-btn') and contains(., 'Add experience')]";
  static input_companyName = "//input[@id='company-name']";
  static input_role = "//input[@id='job-title']";
  static input_companyLocation = "//input[@id='company-location']";
  static input_companyDescription = "//textarea[@id='company-description']";

  static option_monthStartDate =
    "//div[normalize-space()='Work Experiences']/ancestor::div[@class='container']/descendant::input[@id='start-date-month']";
  static option_yearStartDate =
    "//div[normalize-space()='Work Experiences']/ancestor::div[@class='container']/descendant::input[@id='start-date-year']";
  static option_monthEndDate =
    "//div[normalize-space()='Work Experiences']/ancestor::div[@class='container']/descendant::input[@id='end-date-month']";
  static option_yearEndDate = "//div[normalize-space()='Work Experiences']/ancestor::div[@class='container']/descendant::input[@id='end-date-year']";

  static select_monthStartDate = (monthStartDate) => `role=option[name='${monthStartDate}']`;
  static select_yearStartDate = (yearStartDate) => `role=option[name='${yearStartDate}']`;
  static select_monthEndDate = (monthEndDate) => `role=option[name='${monthEndDate}']`;
  static select_yearEndDate = (yearEndDate) => `role=option[name='${yearEndDate}']`;

  static input_roleDescription = '#elaboration-list-professional_experience0';

  static txt_previewCompanyName = (companyName) => `#pdf .body-title-country .body-title:has-text("${companyName}")`;
  static txt_previewCompanyLocation = (companyLocation) => `table.body-title-country-date span.body-country:has-text('${companyLocation}')`;
  static txt_previewRole = (role) => `//div[@id='pdf']//div[contains(@class, 'body-subtitle') and contains(text(), "${role}")]`;
  static txt_previewCompanyDescription = (companyDescription) => `text='${companyDescription}'`;
  static txt_previewRoleDescription = (roleDescription) => `#pdf >> text=${roleDescription}`;
}

export class UserResumeEducationsLocators {
  static btn_addEducation = "//div[@data-v-3e49a3d4]//button[contains(@class, 'v-btn') and contains(., 'Add education')]";
  static input_schoolName = "//input[@id='school-name']";
  static input_schoolLocation = "//input[@id='school-location']";

  static option_schoolStartMonth =
    "//div[normalize-space()='Education Level']/ancestor::div[@class='container']/descendant::input[@id='start-date-month']";
  static option_schoolStartYear =
    "//div[normalize-space()='Education Level']/ancestor::div[@class='container']/descendant::input[@id='start-date-year']";
  static option_schoolEndMonth = "//input[@id='graduation-date-month']";
  static option_schoolEndYear = "//input[@id='graduation-date-year']";
  static option_educationLevel = "//input[@id='education-level']";

  static select_schoolStartMonth = (schoolStartMonth) => `role=option[name='${schoolStartMonth}']`;
  static select_schoolStartYear = (schoolStartYear) => `role=option[name='${schoolStartYear}']`;
  static select_schoolEndMonth = (schoolEndMonth) => `role=option[name='${schoolEndMonth}']`;
  static select_schoolEndYear = (schoolEndYear) => `role=option[name='${schoolEndYear}']`;
  static select_educationLevel = (educationLevel) => `text=${educationLevel}`;

  static input_Major = "input[placeholder*='Information System']";
  static input_GPA = "//input[@id='gpa-recommended']";
  static input_maxGPA = "//input[@id='max-gpa']";
  static input_schoolActivity = '#elaboration-list-education0';

  static txt_previewEducationEntry = (schoolName, schoolLocation) =>
    `#pdf .body-title-country:has(.body-title:has-text("${schoolName}")) .body-country:has-text("- ${schoolLocation}")`;
  static txt_previewSchoolPeriod = (schoolStartMonth, schoolStartYear, schoolEndMonth, schoolEndYear) =>
    `#pdf >> text="${schoolStartMonth} ${schoolStartYear} - ${schoolEndMonth} ${schoolEndYear}"`;
  static txt_previewSchoolDetails = (educationLevel, major, GPA, maxGPA) =>
    `#pdf .body-subtitle:has-text("${educationLevel} of ${major}") >> span:has-text("${GPA}/${maxGPA}")`;
  static txt_previewSchoolActivity = (schoolActivity) => `#pdf >> text="${schoolActivity}"`;
}

export class UserResumeOrganizationsLocators {
  static btn_addOrganization = "//div[@data-v-49031e3f]//button[contains(@class, 'v-btn') and contains(., 'Add experience')]";
  static input_organizationName = '#organization-name';
  static input_organizationRole = '#your-role-title';
  static input_organizationDescription = '#organisation-description';
  static input_organizationLocation = '#organization-location';

  static option_organizationStartMonth =
    "//div[normalize-space()='Organisational Experience']/ancestor::div[@class='container']/descendant::input[@id='start-date-month']";
  static select_organizationStartMonth = (organizationStartMonth) => `role=option[name='${organizationStartMonth}']`;
  static option_organizationStartYear =
    "//div[normalize-space()='Organisational Experience']/ancestor::div[@class='container']/descendant::input[@id='start-date-year']";
  static select_organizationStartYear = (organizationStartYear) => `role=option[name='${organizationStartYear}']`;

  static btn_dateCurrentStillActive = "//label[contains(text(), 'I am currently active here')]";

  static option_organizationEndMonth =
    "//div[normalize-space()='Organisational Experience']/ancestor::div[@class='container']/descendant::input[@id='end-date-month']";
  static select_organizationEndMonth = (organizationEndMonth) => `role=option[name='${organizationEndMonth}']`;
  static option_organizationEndYear =
    "//div[normalize-space()='Organisational Experience']/ancestor::div[@class='container']/descendant::input[@id='end-date-year']";
  static select_organizationEndYear = (organizationEndYear) => `role=option[name='${organizationEndYear}']`;

  static input_organizationRoleDescription = '#elaboration-list-leadership_experience0';

  static txt_previewOrganizationName = (organizationName) => `#pdf >> text='${organizationName}'`;
  static txt_previewOrganizationLocation = (organizationLocation) => `#pdf >> text='- ${organizationLocation}'`;
  static txt_previewOrganizationPeriod = (organizationStartMonth, organizationStartYear, organizationEndMonth, organizationEndYear) =>
    `#pdf >> text='${organizationStartMonth} ${organizationStartYear} - ${organizationEndMonth} ${organizationEndYear}'`;
  static txt_previewOrganizationRole = (organizationRole) => `#pdf >> text='${organizationRole}'`;
  static txt_previewOrganizationDescription = (organizationDescription) => `#pdf >> text='${organizationDescription}'`;
  static txt_previewOrganizationRoleDescription = (organizationRoleDescription) => `#pdf >> text='${organizationRoleDescription}'`;
}

export class UserResumeOthersLocators {
  static btn_addOthers = "//div[@data-v-126f118b]//button[contains(@class, 'v-btn') and contains(., 'Add experience')]";
  static option_othersType = "//input[@id='category']";
  static select_othersType = (othersType) => `role=option[name='${othersType}']`;
  static option_othersYear = "//input[@id='experience-year']";
  static select_othersYear = (othersYear) => `role=option[name='${othersYear}']`;
  static input_othersElaboration = "//div[normalize-space()='Elaboration']/following-sibling::div/descendant::input";

  static txt_previewOthersType = (othersType) => `#pdf >> text='${othersType}'`;
  static txt_previewOthersYear = (othersYear) => `#pdf >> text='(${othersYear})'`;
  static txt_previewOthersElaboration = (othersElaboration) => `#pdf .body-elaboration-other-skills .body-individual-elaboration span:text("${othersElaboration}")`;;
}
