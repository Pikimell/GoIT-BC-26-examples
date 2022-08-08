/* 
    Mouse Event:
        - mouseenter and mouseleave
        - mouseover and mouseout
        - mousemove
*/

const parent = document.querySelector(".js-parent-box");
const child = document.querySelector(".js-cild-box");

// parent.addEventListener("mouseover", () => {
//   console.log("enter");
//   parent.classList.add("grey");
// });

// parent.addEventListener("mouseout", () => {
//   console.log("leave");
//   parent.classList.remove("grey");
// });

child.style.position = "absolute";
parent.addEventListener("mousemove", (event) => {
  child.style.left = event.clientX - 25 + "px";
  child.style.top = `${event.clientY - 25}px`;
});
