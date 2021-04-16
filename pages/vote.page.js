class VotePage {
  get voteTitle() {
    return $('.container-fluid h4');
  }

  get submitButton() {
    return $('#vote-form button');
  }

  get thanksAlert() {
    return $('#vote-alert');
  }

  get voteItems() {
    return $$('#vote-form .form-check');
  }

  get tableItems() {
    return $$('.table tbody tr');
  }

  voteItemLabel(option) {
    return $(`#vote-form label[for=heroMovieRadio${option}]`);
  }

  voteItemRadioButton(option) {
    return $(`#vote-form #heroMovieRadio${option}`);
  }

  tableItem(option) {
    return $(`#movieName${option}`);
  }

  tableItemVotes(option) {
    return $(`#movieVotes${option}`);
  }
}
module.exports = new VotePage();
