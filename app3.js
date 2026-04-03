const colorsContainer = document.getElementById("colorsContainer");

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

const showColors = () => {
  colorsContainer.innerHTML = "";
  colors.forEach((color) => {
    colorsContainer.innerHTML += `<div class="color"
        style="background:${color.code}"
        onclick="setBodyBgColor('${color.code}', '${color.name}')"
        ></div>`;
  });
};
showColors();

const setBodyBgColor = (color, name) => {
  document.body.style.backgroundColor = color;
  
  // Əgər əvvəlcə artıq varsa silirik
  const existing = document.getElementById("colorLabel");
  if (existing) existing.remove();
  
  // Yeni rəng adı əlavə edirik
  const label = document.createElement("div");
  label.id = "colorLabel";
  label.textContent = name;
  label.style.position = "fixed";
  label.style.top = "50%";
  label.style.left = "50%";
  label.style.fontSize = "24px";
  label.style.fontWeight = "bold";
  label.style.color = "#000";
  document.body.appendChild(label);
};