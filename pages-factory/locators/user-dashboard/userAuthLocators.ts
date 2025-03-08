export class UserAuthLocators {
  static login_button = 'button:has-text("Login")';
  static login_student_button = 'role=menuitem[name="Login as Student"]';
  static email_field = 'role=textbox[name="Email Address"]';
  static password_field = 'role=textbox[name="Password"]';
  static signin_button = '//button[span/span[text()="Sign In"]]';
  static success_login_toast = 'text="Welcome back! You have successfully logged in."';
  static invalid_password_toast = 'text="Encountered error logging in: Invalid email/password."';
}
