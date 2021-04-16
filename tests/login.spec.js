const assert = require('assert');
const loginPage = require('../pages/login.page');
const headerPage = require('../pages/header.page');

describe('Login Test Suite', () => {
  //  Valid email: 1@2.com
  //  Valid password: password
  var email = '1@2.com';
  var password = 'password';

  beforeEach(() => {
    browser.url('');
  });

  /*   afterEach(() => {
    browser.pause(3000);
  }); */

  it('should display error when password is missing', () => {
    loginPage.emailField = email;
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when email is missing', () => {
    loginPage.passwordField = password;
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when email and password are missing', () => {
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when email is incorrect', () => {
    loginPage.emailField = 'test@test.com';
    loginPage.passwordField = password;
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when password is incorrect', () => {
    loginPage.emailField = email;
    loginPage.passwordField = 'pass';
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when password case is incorrect', () => {
    loginPage.emailField = email;
    loginPage.passwordField = password.toUpperCase();
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should login with valid email and password', () => {
    loginPage.emailField = email;
    loginPage.passwordField = password;
    loginPage.submitButton.click();

    assert.strictEqual(loginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
  });

  it('should remember login credentials', () => {
    loginPage.emailField = email;
    loginPage.passwordField = password;
    loginPage.rememberLoginCheckbox.click();
    loginPage.submitButton.click();

    assert.strictEqual(loginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');

    headerPage.logoutLink.click();

    assert.strictEqual(loginPage.overlay.isDisplayed(), true, 'Overlay is not displayed');
    assert.strictEqual(loginPage.emailField.getValue(), email, 'Values (email) are not the same');
    assert.strictEqual(loginPage.passwordField.getValue(), password, 'Values (password) are not the same');
    assert.strictEqual(loginPage.rememberLoginCheckbox.isSelected(), true, 'Remember checkbox is not selected');
  });

  it('should not remember login credentials', () => {
    loginPage.emailField = email;
    loginPage.passwordField = password;
    loginPage.submitButton.click();

    assert.strictEqual(loginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');

    headerPage.logoutLink.click();

    assert.strictEqual(loginPage.overlay.isDisplayed(), true, 'Overlay is not displayed');
    assert.strictEqual(loginPage.emailField.getValue(), '', 'Values (email) are not the same');
    assert.strictEqual(loginPage.passwordField.getValue(), '', 'Values (password) are not the same');
    assert.strictEqual(loginPage.rememberLoginCheckbox.isSelected(), false, 'Remember checkbox is selected');
  });
});
