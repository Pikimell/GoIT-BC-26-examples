let todos = [];
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => (todos = json));
// setTimeout(() => {
//   console.log(todos);
// }, 1000);

const MAX_LENGTH = 3;
let CURRENT_PAGE = 0;

const refs = {
  closeModalBtn: document.querySelector("#closeModalBtn"),
  listTodos: document.querySelector(".js-list"),
  backdrop: document.querySelector(".js-backdrop"),
  inputSearchElement: document.querySelector(".js-search-input"),
  nextBtnElement: document.querySelector("#nextBtn"),
  previousBtnElement: document.querySelector("#previousBtn"),
  modalDivFirst: document.querySelector(".js-modal-1"),
  modalDivSecond: document.querySelector(".js-modal-2"),
  closeBtn: document.querySelector("#closeModalBtnFirst"),
  createBtn: document.querySelector(".js-create-todo-btn"),
  bodyToDo: document.querySelector(".js-body-todo"),
  titleToDo: document.querySelector(".js-title-todo"),
  checkboxBtn: document.querySelector(".js-checkbox"),
};

function loadData(page) {
  refs.listTodos.innerHTML = `<h3>Page - ${CURRENT_PAGE + 1}</h3>`;
  for (let i = 0; i < MAX_LENGTH; i++) {
    if (i + page * MAX_LENGTH < todos.length) {
      let { title, body } = todos[i + page * MAX_LENGTH];
      refs.listTodos.innerHTML += `
    <div class="box">
    <h2 class="js-title">${title}</h2>
      <p class="js-body">
        ${body}
      </p>
    </div> 
    `;
    } else break;
  }
}

document.addEventListener("keypress", (event) => {
  if (
    event.ctrlKey &&
    event.code === "KeyQ" &&
    !refs.modalDivSecond.classList.contains("visibility")
  ) {
    refs.modalDivFirst.classList.add("visibility");
    document.body.classList.add("show-modal");
    document.addEventListener("keydown", onDocumentCloseModal);
  }
});

/////////////////////////////////////////
function onDocumentCloseModal(event) {
  if (event.code === "Escape") {
    refs.modalDivFirst.classList.remove("visibility");
    document.body.classList.remove("show-modal");
    document.removeEventListener("keydown", onDocumentCloseModal);
    refs.modalDivSecond.classList.remove("visibility");
  }
}
refs.closeModalBtn.addEventListener("click", () => {
  refs.modalDivFirst.classList.remove("visibility");
  document.body.classList.remove("show-modal");
  document.removeEventListener("keydown", onDocumentCloseModal);
});
refs.backdrop.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    refs.modalDivFirst.classList.remove("visibility");
    document.body.classList.remove("show-modal");
    document.removeEventListener("keydown", onDocumentCloseModal);
  }
});
/////////////////////////////////////////

function search() {
  let index = +refs.inputSearchElement.value - 1;
  let { title, body } = todos[index];

  refs.listTodos.innerHTML = `
  <div class="box">
  <h2 class="js-title">${title}</h2>
    <p class="js-body">
      ${body}
    </p>
  </div> 
  `;

  refs.inputSearchElement.value = 1;
  document.body.classList.remove("show-modal");
  document.removeEventListener("keydown", onDocumentCloseModal);
}

refs.nextBtnElement.addEventListener("click", () => {
  if (CURRENT_PAGE < Math.floor(todos.length / MAX_LENGTH))
    loadData(++CURRENT_PAGE);
});

refs.previousBtnElement.addEventListener("click", () => {
  if (CURRENT_PAGE > 0) loadData(--CURRENT_PAGE);
});

function fooTodu() {
  document.body.classList.add("show-modal");
  refs.modalDivSecond.classList.add("visibility");
  document.addEventListener("keydown", onDocumentCloseModal);
}

refs.closeBtn.addEventListener("click", () => {
  refs.modalDivSecond.classList.remove("visibility");
  document.body.classList.remove("show-modal");
  document.removeEventListener("keydown", onDocumentCloseModal);
});

refs.createBtn.addEventListener("click", (event) => {
  let obj = {
    title: refs.titleToDo.value,
    body: refs.bodyToDo.value,
  };
  if (refs.titleToDo.value.trim() !== "" && refs.bodyToDo.value.trim() !== "") {
    todos.push(obj);
    refs.titleToDo.value = "";
    refs.bodyToDo.value = "";
    console.log("good");
    refs.checkboxBtn.checked = false;
    refs.createBtn.disabled = true;
  }
  refs.titleToDo.focus();
});
refs.checkboxBtn.addEventListener("change", () => {
  refs.createBtn.disabled = !refs.checkboxBtn.checked;
  console.log(refs.createBtn.disabled);
});
