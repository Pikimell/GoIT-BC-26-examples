/*
 * Метод setInterval(callback, delay, args)
 */

const logger = (time) => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

let i = 0;
let idInterval = setInterval(() => {
  console.log("Inter1");
}, 1000);
let idInterval2 = setInterval(() => {
  console.log("Inter2");
}, 1000);
let idInterval3 = setInterval(() => {
  console.log("Inter3");
}, 1000);

let idInterval4 = setInterval(() => {
  console.log("Inter4");
}, 0);

/*
 * Очистка интервала с clearInterval(intervalId)
 */
