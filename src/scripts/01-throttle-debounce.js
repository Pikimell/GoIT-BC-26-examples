let countMouseEventElement = document.querySelector(".js-count-mouse");
let inputElement = document.querySelector(".js-input");
let outputElem = document.querySelector(".js-output");

let countMouseEvent = 0;
let countInputEvent = 0;

// let throttleFun = _.throttle(onMouseMove, 3000, {
//   leading: false,
//   trailing: false,
// });
// let debounceFun = _.debounce(onMouseMove);
// document.addEventListener("mousemove", throttleFun);

// function onMouseMove() {
//   countMouseEventElement.innerHTML = ++countMouseEvent;
// }

function onInputChange(event) {
  outputElem.innerHTML = event.target.value;
}
const debounceFun = _.debounce(onInputChange, 5000, {
  leading: true,
  maxWait: 300,
  trailing: false,
});

inputElement.addEventListener("input", debounceFun);
