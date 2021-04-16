class HeaderPage {
  get homeLink() {
    return $('.nav-item > a[href="./index.html"]');
  }

  get heroFactsLink() {
    return $('#navbarDropdown');
  }

  get wolverineOption() {
    return $('.dropdown-item[data-target="#wolverineModal"]');
  }

  get spidermanOption() {
    return $('.dropdown-item[data-target="#spidermanModal"]');
  }

  get linkLink() {
    return $('.nav-item > a[href="https://glitchitsystem.com/"]');
  }

  get logoutLink() {
    return $('.nav-item > .nav-link[onclick="logout()"]');
  }

  get searchField() {
    return $('#search-box');
  }

  get searchButton() {
    return $('#search-form > button');
  }

  get wolverineModalWindow() {
    return $('#wolverineModal');
  }

  get wolverineModalTitle() {
    return $('#wolverineModalLabel');
  }

  get wolverineModalContent() {
    return $('#wolverineModal .modal-body');
  }

  get wolverineModalCloseButton() {
    return $('#wolverineModal .modal-footer > button');
  }

  get spidermanModalWindow() {
    return $('#spidermanModal');
  }

  get spidermanModalTitle() {
    return $('#spidermanModalLabel');
  }

  get spidermanModalContent() {
    return $('#spidermanModal .modal-body');
  }

  get spidermanModalCloseButton() {
    return $('#spidermanModal .modal-footer > button');
  }

  set searchField(value) {
    this.searchField.setValue(value);
  }
}
module.exports = new HeaderPage();
