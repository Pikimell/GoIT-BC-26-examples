let listCoffe = [];
let autoSaveId;
init();

function saveDataToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function init() {
  listCoffe = loadDataFromLocalStorage("listCoffe");
  showCoffe();
}

function showCoffe() {
  coffeElements.innerHTML = listCoffe
    .map(({ title }) => {
      return `
  <li>${title}</li>
  `;
    })
    .join("");
}

function saveAll() {
  //saveDataToLocalStorage("listCoffe", listCoffe);
  console.log("Auto Saved!");
}

autoSaveBtn.addEventListener("click", (event) => {
  if (event.target.checked) {
    autoSaveId = setInterval(saveAll, 5000);
  } else {
    clearInterval(autoSaveId);
  }
});
