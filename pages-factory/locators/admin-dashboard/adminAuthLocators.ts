export class AdminAuthLocators {
  static login_button = 'button:has-text("LOGIN")';
  static login_admin_button = 'role=menuitem[name="Login as Admin"]';
  static email_field = 'role=textbox[name="Email"]';
  static password_field = 'role=textbox[name="Password"]';
  static signin_button = '//button[span[normalize-space()="Login"]]';
  static success_admin_login_toast = 'text="Welcome back! Redirecting to the homepage.."';
}
