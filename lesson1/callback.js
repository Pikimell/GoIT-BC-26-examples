/*
    Колбек-функції
        - Функція зворотного виклику (callback, колбек)
        - Функція вищого порядку (higher order function)
    
    Інлайн колбеки
    Декілька колбеків
    Абстрагування повторення
*/

// function calc(x, callback1, callback2) {
//   if (x < 0) callback1(x);
//   else callback2(x);
// }

// const neggative = (x) => {
//   console.log("Neg", x);
// };

// const possitive = (x) => {
//   console.log("Pos", x);
// };

// calc(-5, neggative, possitive);

// function myCycle(n, callback) {
//   for (let i = 0; i < n; i++) {
//     callback(i);
//   }
// }

// const callback1 = function (i) {
//   console.log(i);
// };

// const callback2 = function (i) {
//   console.log(i * i);
// };

// myCycle(5, callback2);

function foo() {
  let result;

  // .....

  if (x < y) result = x + x + (y * 2) / 4 - Math.PI;
  else result = x + x + ((y * 2) / 4) * Math.PI;

  //.....

  if (x < y) result = x + x + (y / 2) * 4 - Math.PI;
  else result = x + x + ((y * 2) / 4) * Math.PI;

  //.....

  if (x < y) result = x + x + (y * 2) / 4 - Math.PI;
  else result = x + x + ((y * 2) / 4) * Math.PI;

  //.....

  if (x < y) result = x + x + (y * 2) / 4 - Math.PI;
  else result = x + x + ((y * 2) / 4) * Math.PI;

  //.....

  if (x < y) result = x + x + (y * 2) / 4 - Math.PI;
  else result = x + x + ((y * 2) / 4) * Math.PI;
}

function foo() {
  let result;

  // .....

  result = myIf(x, y);

  //.....

  result = myIf(x1, y1);

  //.....

  result = myIf(x1, y1);

  //.....

  result = myIf(x1, y1);

  //.....

  result = myIf(x1, y1);
}

function myIf(x, y) {
  if (x < y) return x + x + (y * 2) / 4 - Math.PI;
  else return x + x + (y * 2) / 4 - Math.PI;
}
