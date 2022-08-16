let listCoffe = [];
let autoSaveId;
let idShowModalInterval;

const refs = {
  formElems: document.querySelectorAll("[data-form]"),
  formBox: document.querySelector(".js-form-box"),
  advWindow: document.querySelector(".js-advertising"),
  clickBtnClose: document.querySelector(".js-close-modal"),
};

init();

restoreElemBtn.addEventListener("click", loadDataNewElement);

function saveDataToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function init() {
  listCoffe = loadDataFromLocalStorage("listCoffe");
  showCoffe();
  restoreData();
  showAdvertising();
}

function showCoffe() {
  coffeElements.innerHTML = [...listCoffe]
    .sort((a, b) => {
      let res = 0;
      try {
        a.createdDate.getTime();
        a = new Date(a.createdDate);
        b = new Date(b.createdDate);
        res = b.getTime() - a.getTime();
      } catch (error) {
        console.log("error");
        res = -1;
      }
      console.log(res);
      return res;
    })
    .map(({ title, createdDate }) => {
      return `
  <li class='list-item'><h5>${title}</h5><p>${createdDate}</p></li>
  `;
    })
    .join("");
}

function saveAll() {
  saveDataToLocalStorage("listCoffe", listCoffe);
  console.log("Auto Saved!");
}

autoSaveBtn.addEventListener("click", (event) => {
  if (event.target.checked) {
    autoSaveId = setInterval(saveAll, 5000);
  } else {
    clearInterval(autoSaveId);
  }
});

createElemBtn.addEventListener("click", () => {
  let title = refs.formElems[0].value;
  let desc = refs.formElems[1].value;
  let imgUrl = refs.formElems[2].value;

  let coffe = {
    title,
    description: desc,
    image: imgUrl,
    id: Math.ceil(Math.random() * 1000),
    createdDate: new Date(),
  };

  listCoffe.push(coffe);
  showCoffe();
});

refs.formBox.addEventListener("input", onInputChage);
function onInputChage(e) {
  saveDateNewElement();
}

function saveDateNewElement() {
  let title = refs.formElems[0].value;
  let desc = refs.formElems[1].value;
  let imgUrl = refs.formElems[2].value;

  let coffe = {
    title,
    description: desc,
    image: imgUrl,
  };

  saveDataToLocalStorage("newElement", coffe);
}

function loadDataNewElement() {
  let newElementData = loadDataFromLocalStorage("newElement");
  refs.formElems[0].value = newElementData.title;
  refs.formElems[1].value = newElementData.description;
  refs.formElems[2].value = newElementData.image;
  restoreElemBtn.disabled = true;
  localStorage.removeItem("newElement");
}

function restoreData() {
  if (localStorage.getItem("newElement")) {
    restoreElemBtn.disabled = false;
  }
}

function showAdvertising() {
  idShowModalInterval = setInterval(() => {
    refs.advWindow.classList.add("show");

    for (let i = 0; i <= 5; i++) {
      setTimeout(() => {
        btnHideModal.value = `Close ${5 - i}`;
      }, i * 1000);
    }

    // let i = 5;
    // const idInter = setInterval(() => {
    //   btnHideModal.value = `Close ${i--}`;
    // }, 1000);

    // BTN ENANBLED
    setTimeout(() => {
      /* 
      if(refs.advWindow.classList.contains("show")){
        btnHideModal.disabled = false
      }else{
        btnHideModal.disabled = true
      } 
      */
      clearInterval(idInter);
      btnHideModal.value = "Close";
      btnHideModal.disabled = !refs.advWindow.classList.contains("show");
    }, 5000);

    //HIDE MODAL
    setTimeout(() => {
      refs.advWindow.classList.remove("show");
    }, i * 1000 + 10000);
  }, 60000 * 30);
}

refs.clickBtnClose.addEventListener("click", onBtnClick);

function onBtnClick() {
  clearInterval(idShowModalInterval);
  refs.advWindow.classList.remove("show");
}

btnHideModal.addEventListener("click", onHideModal);
function onHideModal() {
  refs.advWindow.classList.remove("show");
  clearInterval(idShowModalInterval);
  showAdvertising();
}
