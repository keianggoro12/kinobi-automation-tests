export class AdminAuthLocators {
  static login_button = 'button:has-text("LOGIN")';
  static login_admin_button = 'role=menuitem[name="Login as Admin"]';
  static email_field = 'role=textbox[name="Email"]';
  static password_field = 'role=textbox[name="Password"]';
  static signin_button = '//button[span[normalize-space()="Login"]]';
  static success_admin_login_toast =
    'text="Welcome back! Redirecting to the homepage.."';
  static signin_super_admin_chip =
    '//span[@class="v-chip__content" and .//span[normalize-space()="Super Admin"]]';
  static signin_normal_admin_chip =
    '//span[@class="v-chip__content" and .//span[normalize-space()="University"]]';
  static signin_company_admin_chip =
    '//span[@class="v-chip__content" and .//span[normalize-space()="Company"]]';
  static invalid_password_toast =
    'text="Encountered error logging in: Invalid email/password."';
  static three_dots_button =
    '//button//i[contains(@class, "mdi-dots-horizontal")]';
  static logout_button =
    '//div[contains(@class, "menu-item")]//div[contains(text(), "Logout")]';
}
