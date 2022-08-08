let colorPalette = [];
function createPaletteItems() {
  const items = [];
  const LENGTH = 20;
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}
createPaletteItems();

////////////////////////////////////////////////////////////////////////////
const refs = {
  colorBoxElem: document.querySelector(".js-colors-box"),
  modalElem: document.querySelector(".modal"),
};

function loadColorPallet() {
  refs.colorBoxElem.innerHTML = "";
  for (color of colorPalette) {
    let elem = `
<li class="color-item">
    <button class="color-body" style="background-color:${color.hex}";></button>
    <div class="color-footer">
        <div>HEX: ....</div>
        <div>RGB: ....</div>
        <div></div>
    </div>
</li>
    `;
    refs.colorBoxElem.innerHTML += elem;
  }
}

refs.colorBoxElem.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    let = document.body.classList.add("show-modal");
    refs.modalElem.style.backgroundColor = event.target.style.backgroundColor;
  }
});

document.addEventListener("keydown", () => {
  document.body.classList.remove("show-modal");
});
loadColorPallet();

////////////////////////////////////////////////////////////////////////////

/* 

<li class="color-item">
    <button class="color-body style="background-color:...;"></button>
    <div class="color-footer">
        <div>HEX: ....</div>
        <div>RGB: ....</div>
        <div></div>
    </div>
</li>

*/
