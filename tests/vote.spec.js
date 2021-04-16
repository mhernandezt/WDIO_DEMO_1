const assert = require('assert');
const loginPage = require('../pages/login.page');
const votePage = require('../pages/vote.page');

describe('Vote Section Test Suite', () => {
  var email = '1@2.com';
  var password = 'password';

  beforeEach(() => {
    browser.url('');
  });

  /* afterEach(() => {
    browser.pause(3000);
  }); */

  it('should increment vote', () => {
    loginPage.emailField = email;
    loginPage.passwordField = password;
    loginPage.submitButton.click();

    let option = 3;
    //  We need to get the original value before we validate it
    let votes = parseInt(votePage.tableItemVotes(option).getText());

    votePage.voteItemRadioButton(option).click();
    votePage.submitButton.click();

    assert.strictEqual(votePage.tableItemVotes(option).getText(), (votes + 1).toString(), 'Values are not the same');
    assert.strictEqual(votePage.thanksAlert.isDisplayed(), true, 'Alert is not displayed');
    assert.strictEqual(votePage.thanksAlert.getText(), 'Thanks for voting!', 'Alert text is not the same');
  });
});
