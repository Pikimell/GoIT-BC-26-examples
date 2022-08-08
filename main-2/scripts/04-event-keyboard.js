/* 
    - Type events (keypress,keydown,keyup)
        - keypress
        - Props KeyboardEvent.key and KeuboardEvent.code
*/

const p = document.querySelector(".js-p");

document.addEventListener("keypress", (event) => {
  event.preventDefault();
  console.log(event.key);
});
