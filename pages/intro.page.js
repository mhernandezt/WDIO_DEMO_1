class IntroPage {
  get title() {
    return $('.container-fluid  h1');
  }

  get mainImage() {
    return $('.container-fluid img');
  }
}
module.exports = new IntroPage();
