let colorPalette = [];
const LENGTH = 5;
function createPaletteItems() {
  const items = [];
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
let refs = {
  itemList: document.querySelector(".js-colors-box"),
};

function loadColorPallet() {
  const pallete = colorPalette
    .map(({ hex, rgb }) => {
      return `<li class="color-item">
  <button class="color-body" style="background-color:${hex}";></button>
  <div class="color-footer">
      <div>HEX: ${hex}</div>
      <div>RGB: ${rgb}</div>
      <div></div>
  </div>
</li>`;
    })
    .join("");

  refs.itemList.innerHTML = pallete + refs.itemList.innerHTML;
}

loadColorPallet();
refs.itemList.addEventListener("click", (even) => {
  if (even.target.nodeName !== "BUTTON") return;
  console.log(even.target);
  document.body.classList.add("show-modal");
  function onBodyKeydown(eve) {
    if (eve.code === "Escape") {
      document.body.classList.remove("show-modal");
      document.removeEventListener("keydown", onBodyKeydown);
    }
  }
  document.addEventListener("keydown", onBodyKeydown);
});

////////////////////////////////////////////////////////////////////////////

/* 
nodeName
<li class="color-item">
    <button class="color-body style="background-color:...;"></button>
    <div class="color-footer">
        <div>HEX: ....</div>
        <div>RGB: ....</div>
        <div></div>
    </div>
</li>

*/
