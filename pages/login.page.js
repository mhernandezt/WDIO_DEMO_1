class LoginPage {
  get overlay() {
    return $('#overlay');
  }

  get headingTitle() {
    return $('#login-title');
  }

  get emailLabel() {
    return $('.form-group > label[for=loginEmail]');
  }

  get emailField() {
    return $('#loginEmail');
  }

  get passwordLabel() {
    return $('.form-group > label[for=loginPassword]');
  }

  get passwordField() {
    return $('#loginPassword');
  }

  get rememberLoginLabel() {
    return $('.form-check > label[for=rememberLoginChk]');
  }

  get rememberLoginCheckbox() {
    return $('#rememberLoginChk');
  }

  get submitButton() {
    return $('#form-login > button');
  }

  set emailField(value) {
    this.emailField.setValue(value);
  }

  set passwordField(value) {
    this.passwordField.setValue(value);
  }
}
module.exports = new LoginPage();
