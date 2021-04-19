const assert = require('assert');
const loginPage = require('../pages/login.page');
const headerPage = require('../pages/header.page');
const introPage = require('../pages/intro.page');
const rosterPage = require('../pages/roster.page');
const votePage = require('../pages/vote.page');

describe('Smoke Test Suite', () => {
  var email = '1@2.com';
  var password = 'password';

  beforeEach(() => {
    browser.url('');
  });

  it('should verify static element are present', () => {
    //  Verify login page elements
    assert.strictEqual(loginPage.headingTitle.isDisplayed(), true, 'loginPage.headingTitle is not displayed');
    assert.strictEqual(loginPage.emailLabel.isDisplayed(), true, 'loginPage.emailLabel is not displayed');
    assert.strictEqual(loginPage.emailField.isDisplayed(), true, 'loginPage.emailFied is not displayed');
    assert.strictEqual(loginPage.passwordLabel.isDisplayed(), true, 'loginPage.passwordLabel is not displayed');
    assert.strictEqual(loginPage.passwordField.isDisplayed(), true, 'loginPage.passwordField is not displayed');
    assert.strictEqual(
      loginPage.rememberLoginLabel.isDisplayed(),
      true,
      'loginPage.rememberLoginLabel is not displayed'
    );
    assert.strictEqual(
      loginPage.rememberLoginCheckbox.isDisplayed(),
      true,
      'loginPage.rememberLoginCheckbox is not displayed'
    );
    assert.strictEqual(loginPage.submitButton.isDisplayed(), true, 'loginPage.submitButton is not displayed');

    loginPage.login(email, password);

    //  Verify header page elements
    assert.strictEqual(headerPage.homeLink.isDisplayed(), true, 'headerPage.homeLink is not displayed');
    assert.strictEqual(headerPage.heroFactsLink.isDisplayed(), true, 'headerPage.heroFactsLink is not displayed');
    assert.strictEqual(headerPage.linkLink.isDisplayed(), true, 'headerPage.linkLink is not displayed');
    assert.strictEqual(headerPage.logoutLink.isDisplayed(), true, 'headerPage.logoutLink is not displayed');
    assert.strictEqual(headerPage.searchField.isDisplayed(), true, 'headerPage.searchField is not displayed');
    assert.strictEqual(headerPage.searchButton.isDisplayed(), true, 'headerPage.searchButton is not displayed');

    headerPage.heroFactsLink.click();
    assert.strictEqual(headerPage.wolverineOption.isDisplayed(), true, 'headerPage.wolverineOption is not displayed');
    assert.strictEqual(headerPage.spidermanOption.isDisplayed(), true, 'headerPage.spidermanOption is not displayed');

    //  Verify intro page elements
    assert.strictEqual(introPage.title.isDisplayed(), true, 'headerPage.title is not displayed');
    assert.strictEqual(introPage.mainImage.isDisplayed(), true, 'headerPage.mainImage is not displayed');

    //  Verify roster page elements
    assert.strictEqual(rosterPage.instructions.isDisplayed(), true, 'rosterPage.instructions is not displayed');
    assert.strictEqual(rosterPage.heroListTitle.isDisplayed(), true, 'rosterPage.heroListTitle is not displayed');
    assert.strictEqual(rosterPage.addHeroLabel.isDisplayed(), true, 'rosterPage.addHeroLabel is not displayed');
    assert.strictEqual(rosterPage.addHeroField.isDisplayed(), true, 'rosterPage.addHeroField is not displayed');
    assert.strictEqual(rosterPage.submitButton.isDisplayed(), true, 'rosterPage.submitButton is not displayed');
    for (let i = 0; i < rosterPage.heroList.length; i++) {
      assert.strictEqual(
        rosterPage.heroItem(i + 1).isDisplayed(),
        true,
        `rosterPage.heroItem(${i + 1}) is not displayed`
      );
    }

    //  Verify vote page elements
    assert.strictEqual(votePage.voteTitle.isDisplayed(), true, 'votePage.voteTitle is not displayed');
    assert.strictEqual(votePage.submitButton.isDisplayed(), true, 'votePage.submitButton is not displayed');
    for (let i = 0; i < votePage.voteItems.length; i++) {
      assert.strictEqual(
        votePage.voteItemLabel(i + 1).isDisplayed(),
        true,
        `votePage.voteItemLabel(${i + 1}) is not displayed`
      );
      assert.strictEqual(
        votePage.voteItemRadioButton(i + 1).isDisplayed(),
        true,
        `votePage.voteItemRadioButton(${i + 1}) is not displayed`
      );
    }
    for (let i = 0; i < votePage.tableItems.length; i++) {
      assert.strictEqual(
        votePage.tableItem(i + 1).isDisplayed(),
        true,
        `votePage.tableItem(${i + 1}) is not displayed`
      );
      assert.strictEqual(
        votePage.tableItemVotes(i + 1).isDisplayed(),
        true,
        `votePage.tableItemVotes(${i + 1}) is not displayed`
      );
    }
  });
});
