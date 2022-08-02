let decrementBtn = document.querySelector(".decrement");
let incrementBtn = document.querySelector(".increment");
let counterValue = document.querySelector(".js-value");

let count = 0;

decrementBtn.addEventListener("click", () => {
  counterValue.textContent = --count;
});

incrementBtn.addEventListener("click", () => {
  counterValue.textContent = ++count;
});
