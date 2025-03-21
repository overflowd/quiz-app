function Quiz(sorular) {
  this.soruIndex = 0;
  this.sorular = sorular;
  this.skor = 0;
}

Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};
