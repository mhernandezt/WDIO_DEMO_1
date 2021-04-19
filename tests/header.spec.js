const assert = require('assert');
const loginPage = require('../pages/login.page');
const headerPage = require('../pages/header.page');

describe('Header Test Suite', () => {
  var email = '1@2.com';
  var password = 'password';

  beforeEach(() => {
    browser.url('');
    loginPage.login(email, password);
  });

  it('should redirect to new site', () => {
    headerPage.linkLink.click();
    assert.strictEqual(browser.getUrl(), 'https://glitchitsystem.com/', 'Link url is not correct');
  });

  it('should open wolverine modal', () => {
    headerPage.heroFactsLink.click();
    headerPage.wolverineOption.click();

    headerPage.wolverineModalWindow.waitForDisplayed();

    assert.strictEqual(headerPage.wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');
    assert.strictEqual(headerPage.wolverineModalTitle.getText(), 'Wolverine Fact', 'Title is not the same');
    assert.strictEqual(
      headerPage.wolverineModalContent.getText(),
      'Wolverine made his first comic book appearance in 1974.',
      'Content is not the same'
    );
  });

  it('should close wolverine modal', () => {
    headerPage.heroFactsLink.click();
    headerPage.wolverineOption.click();

    headerPage.wolverineModalWindow.waitForDisplayed();

    assert.strictEqual(headerPage.wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');

    headerPage.wolverineModalCloseButton.click();
    browser.pause(1000);

    assert.strictEqual(headerPage.wolverineModalWindow.isDisplayed(), false, 'Modal is still displayed');
  });

  it('should open spiderman modal', () => {
    headerPage.heroFactsLink.click();
    headerPage.spidermanOption.click();

    headerPage.spidermanModalWindow.waitForDisplayed();

    assert.strictEqual(headerPage.spidermanModalWindow.isDisplayed(), true, 'Modal is not displayed');
    assert.strictEqual(headerPage.spidermanModalTitle.getText(), 'Spider-Man Fact', 'Title is not the same');
    assert.strictEqual(
      headerPage.spidermanModalContent.getText(),
      'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.',
      'Content is not the same'
    );
  });

  it('should close spiderman modal', () => {
    headerPage.heroFactsLink.click();
    headerPage.spidermanOption.click();

    headerPage.spidermanModalWindow.waitForDisplayed();

    assert.strictEqual(headerPage.spidermanModalWindow.isDisplayed(), true, 'Modal is not displayed');

    headerPage.spidermanModalCloseButton.click();
    browser.pause(1000);

    assert.strictEqual(headerPage.spidermanModalWindow.isDisplayed(), false, 'Modal is still displayed');
  });

  it('should search for wolverine', () => {
    let text = 'Wolverine';
    headerPage.searchField = text;
    headerPage.searchButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), text + ' is awesome!', 'Text is not the same');
  });

  it('should error because you did not search for wolverine', () => {
    let text = 'something';
    headerPage.searchField = text;
    headerPage.searchButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(
      browser.getAlertText(),
      'Your search for ' + text + ' returned 0 reults. Try something else.',
      'Text is not the same'
    );
  });

  it('should close the alert', () => {
    let text = 'something';
    headerPage.searchField = text;
    headerPage.searchButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });
});
