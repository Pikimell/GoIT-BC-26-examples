/*
Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/

//const min = (a, b) => Math.min(a, b);

const myCalc = (a, b, call) => {
  console.log(a, b);
  return call(a, b);
};

const callMin = (a, b) => {
  Math.min(a, b);
};
const callMax = (a, b) => {
  Math.max(a, b);
};

console.log(myCalc(5, 6, callMin));

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
