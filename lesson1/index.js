// Метод forEach

/*

массив.forEach(function callback(element, index, array) {
  // Тіло колбек-функції
});

*/

let array = "100101110101"; // ['1', '0', ......]

function callback(element, index, array) {
  if (+element == 0) array[index] = "1";
  else array[index] = "0";
}

let sum = 0;
array = array.split("");

array.forEach((value, index) => {
  sum += value;
});

array = array.join("");

console.log(sum);
