function Soru(metin, cevap, dogruCevap) {
  this.metin = metin;
  this.cevap = cevap;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

const soruListesi = [
  new Soru(
    "1-Hangisi javascript paket yönetim uygulamasıdır?",
    {
      a: "node.js",
      b: "typescript",
      c: "nuget",
      d: "npm",
    },
    "d"
  ),
  new Soru(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    {
      a: "css",
      b: "html",
      c: "javascript",
      d: "sql",
    },
    "d"
  ),
  new Soru(
    "3-Hangisi backend kapsamında değerlendirilir?",
    {
      a: "node.js",
      b: "typescript",
      c: "angular",
      d: "react",
    },
    "a"
  ),
  new Soru(
    "4-Hangisi javascript programlama dilini kullanmaz?",
    {
      a: "react",
      b: "angular",
      c: "vuejs",
      d: "asp.net",
    },
    "d"
  ),
];
