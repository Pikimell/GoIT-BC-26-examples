/* 
    -Events
        - focus and blur
        - input and change
        - Checkbox and event "checked"
*/

const inputElem = document.querySelector(".js-email");
const emailElem = document.querySelector(".js-anonym");

inputElem.addEventListener("input", (event) => {
  emailElem.textContent = event.currentTarget.value;
});

const checkboxElem = document.querySelector(".js-pass");
const btnElem = document.querySelector(".js-btn");

checkboxElem.addEventListener("change", (event) => {
  btnElem.disabled = !event.currentTarget.checked;
});
