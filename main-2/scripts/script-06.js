const openBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector("#closeModalBtn");
const backdropElem = document.querySelector(".js-backdrop");

function onBodyKeyUp(event) {
  console.log(event.key);
  if (event.key === "Escape") onModalClose();
}

function onModalClose() {
  document.body.removeEventListener("keyup", onBodyKeyUp);
  document.body.classList.remove("show-modal");
}

openBtn.addEventListener("click", () => {
  document.body.classList.add("show-modal");
  document.body.addEventListener("keyup", onBodyKeyUp);
});

closeBtn.addEventListener("click", onModalClose);

backdropElem.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) onModalClose();
});
