const assert = require('assert');
const loginPage = require('../pages/login.page');
const introPage = require('../pages/intro.page');

describe('Intro Test Suite', () => {
  var email = '1@2.com';
  var password = 'password';

  beforeEach(() => {
    browser.url('');
  });

  /* afterEach(() => {
    browser.pause(3000);
  }); */

  it('should display correct title', () => {
    loginPage.emailField = email;
    loginPage.passwordField = password;
    loginPage.submitButton.click();

    assert.strictEqual(introPage.title.getText(), 'Superhero Roster', 'Text is not the same');
  });

  it('should display correct image', () => {
    loginPage.emailField = email;
    loginPage.passwordField = password;
    loginPage.submitButton.click();

    assert.strictEqual(
      introPage.mainImage.getAttribute('src'),
      browser.options.baseUrl + 'images/superhero.png',
      'Source is not the same'
    );
    assert.strictEqual(introPage.mainImage.getAttribute('alt'), 'Superhero Image', 'Alt is not the same');
  });
});
