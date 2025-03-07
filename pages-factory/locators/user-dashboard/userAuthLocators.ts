export class UserAuthLocators {
    static loginButton = 'button:has-text("Login")';
    static loginStudentButton = 'role=menuitem[name="Login as Student"]';
    static emailField = 'role=textbox[name="Email Address"]';
    static passwordField = 'role=textbox[name="Password"]';
    static signInButton = '//button[span/span[text()="Sign In"]]';
    static successLoginToast = 'text="Welcome back! You have successfully logged in."';
    static invalidPasswordToast = 'text="Encountered error logging in: Invalid email/password."';
}