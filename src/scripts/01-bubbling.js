// event.target
// event.currentTarget

// stopPropagation()
// stopImmediatePropagation()

let refs = {
  parrent: document.querySelector(".js-parent"),
  child: document.querySelector(".js-child"),
  descendant: document.querySelector(".js-descendant"),
};

// refs.parrent.addEventListener("click", (event) => {
//   console.log(
//     `Target: ${event.target.dataset.value}`,
//     `CurrentTarget: ${event.currentTarget.dataset.value}`
//   );
// });

// refs.child.addEventListener("click", (event) => {
//   console.log(
//     `Target: ${event.target.dataset.value}`,
//     `CurrentTarget: ${event.currentTarget.dataset.value}`
//   );
//   event.stopPropagation();
// });

let COUNT_CLICK = 0;
document.body.addEventListener("click", () => {
  COUNT_CLICK++;
  console.log(COUNT_CLICK);
});

refs.descendant.addEventListener("click", (event) => {
  event.stopPropagation();
});
