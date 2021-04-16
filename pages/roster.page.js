class RosterPage {
  get instructions() {
    return $('.container-fluid p');
  }

  get heroListTitle() {
    return $('.container-fluid h3');
  }

  get addHeroLabel() {
    return $('#addHero-form label[for=heroInput]');
  }

  get addHeroField() {
    return $('#heroInput');
  }

  get submitButton() {
    return $('#addHero-form button');
  }

  get heroList() {
    return $$('#hero-list li');
  }

  set addHeroField(value) {
    this.addHeroField.setValue(value);
  }

  heroItem(option) {
    return $(`#hero-list li:nth-child(${option})`);
  }
}
module.exports = new RosterPage();
