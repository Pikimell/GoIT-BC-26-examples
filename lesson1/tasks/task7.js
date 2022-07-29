/*

Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

*/

// let array = [1, 2, 3, 5, 7, 1, 2];
// array.forEach((element, index, array) => (array[index] = element * 2));

// let array = ["reverse", "reverse", "reverse", "reverse", "reverse"];
// array.forEach((elem, index, array) => {
//   array[index] = elem.split("").reverse().join("");
// });

let array = ["reverse1", "reverse2", "reverse3", "reverse4", "reverse5"];
// array.forEach((str, index, array) => {
//   str = str.split("");
//   str[0] = str[0].toUpperCase();
//   str = str.join("");
//   array[index] = str;
// });

array.forEach((str, index, array) => {
  str = str[0].toUpperCase() + str.slice(1);
  array[index] = str;
});

console.log(array);
