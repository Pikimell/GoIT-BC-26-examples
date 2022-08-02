let decrementBtn = document.querySelector(".decrement");
let incrementBtn = document.querySelector(".increment");
let counterValue = document.querySelector(".js-value");

let count = 0;
counterValue.textContent = count;

decrementBtn.addEventListener("click", () => {
  if (count > 10) counterValue.textContent = --count;
  localStorage.setItem("counter", count);
});

incrementBtn.addEventListener("click", () => {
  counterValue.textContent = ++count;
  localStorage.setItem("counter", count);
});
