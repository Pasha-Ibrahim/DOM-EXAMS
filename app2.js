const btn = document.getElementById("btn");
let yananIsiq = true;

const lampa = () => {
  const lampImage = document.getElementById("lampImage");
  if (yananIsiq) {
    lampImage.setAttribute(
      "src",
      "https://www.w3schools.com/js/pic_bulbon.gif"
    );
    btn.innerText = "sondur";
  } else {
    lampImage.setAttribute(
      "src",
      "https://www.w3schools.com/js/pic_bulboff.gif"
    );
    btn.innerText = "yandir";
  }
};

lampa();

const lampaniYandirSondur = () => {
  yananIsiq = !yananIsiq;
  lampa();
};
