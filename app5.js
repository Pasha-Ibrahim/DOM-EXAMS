const colorsContainer = document.getElementById("colorsContainer");

const colors = [
  { name: "qirmizi", code: "red" },
  { name: "yasil", code: "green" },
  { name: "mavi", code: "blue" },
  { name: "sari", code: "yellow" },
  { name: "qara", code: "black" },
  { name: "narıncı", code: "orange" },
  { name: "bənövşəyi", code: "purple" },
  { name: "çəhrayı", code: "pink" },
  { name: "boz", code: "gray" },
  { name: "qəhvəyi", code: "brown" },
  { name: "tünd-mavi", code: "navy" },
  { name: "açıq-mavi", code: "lightblue" },
];
colors.forEach((color) => {
  colorsContainer.innerHTML += `<div 
  class = "color" style = "background :
   ${color.code}"
   onclick="setBodybgColor('${color.code}')"
   >
   </div>`;
});

const setBodybgColor = (color) => (document.body.style.backgroundColor = color);
