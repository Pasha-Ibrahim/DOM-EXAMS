const colors = [
  { name: "qirmizi", code: "red" },
  { name: "yasil", code: "green" },
  { name: "mavi", code: "blue" },
  { name: "sari", code: "yellow" },
  { name: "narinci", code: "orange" },
  { name: "benovseyi", code: "purple" },
  { name: "qara", code: "black" },
  { name: "boz", code: "gray" },
  { name: "çəhrayı", code: "pink" },
  { name: "qəhvəyi", code: "brown" },
  { name: "firuzəyi", code: "turquoise" },
  { name: "açıq mavi", code: "lightblue" },
  { name: "tünd mavi", code: "darkblue" },
  { name: "qızılı", code: "gold" },
  { name: "gümüşü", code: "silver" },
  { name: "bej", code: "beige" },
  { name: "şabalıdı", code: "maroon" },
  { name: "zeytun", code: "olive" },
  { name: "dəniz mavisi", code: "navy" },
];

const colorsContainer = document.getElementById("colorsContainer");

const showColors = () => {
  colorsContainer.innerHTML = "";
  colors.forEach((color) => {
    colorsContainer.innerHTML += `<div class="color"
        style="background:${color.code}"
        onclick="setBodyBgColor('${color.code}')"
        ></div>`;
  });
};
showColors();

const setBodyBgColor = (color) => {
  const activeColor = document.body.style.backgroundColor;
  if (activeColor !== color) {
    document.body.style.backgroundColor = color;
  } else {
    document.body.style.backgroundColor = "white";
  }
};
