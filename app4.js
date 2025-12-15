// const link = document.getElementById("link");
// link.setAttribute("href", "https://google.com");
// link.setAttribute("class", "red");
// link.removeAttribute("class");
// link.removeAttribute("href");

const button = document.getElementById("btn");

versionEmoji = true;

const emoji = () => {
  const emoji = document.getElementById("emoji");
  if (versionEmoji) {
    emoji.setAttribute("src", "./images/emoji.jpeg");
    btn.innerText = "aglayan versiyani goster";
  } else {
    emoji.setAttribute("src", "./images/emoji2.jpeg");
    btn.innerText = "gulen versiyani goster";
  }
};

emoji();

btn.onclick = () => {
  versionEmoji = !versionEmoji;
  emoji();
};
