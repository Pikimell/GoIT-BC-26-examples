/*
Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
Индекс массы тела необходимо округлить до одной цифры после запятой;

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
*/

// const calcBMI = (weight, height) => {
//   weight = +weight.replace(",", ".");
//   height = +height.replace(",", ".");
//   //let sum = weight / height**n
//   let sum = weight / Math.pow(height, 2);
//   return (sum).toFixed(1);
// };
// console.log(calcBMI("88,3", "1.75"));

// function calcBMI(weight, heigth, callback) {
//   return callback(weight, heigth);
// }
// function callback(weight, height) {
//   weight = +weight.replace(",", ".");
//   height = +height.replace(",", ".");
//   //let sum = weight / height**n
//   let sum = weight / Math.pow(height, 2);
//   return sum.toFixed(1);
// }
// calcBMI("88,3", "1.75", callback);

// const calcBMI = (weight, height, callback) => {callback(weight, height)};
// const sum1 = (weight, height) => {
//   weight = +weight.replace(",", ".");
//   height = +height.replace(",", ".");
//   //let sum = weight / height**n
//   let sum = weight / Math.pow(height, 2);
//   return sum.toFixed(1);
// };
// calcBMI("88,3", "1.75", sum1);

// const calcBMI = (weight1, height1, callback) => callback(weight1,height1);
// calcBMI("88,3", "1.75", (weight, height) => {
//   weight = +weight.replace(",", ".");
//   height = +height.replace(",", ".");
//   //let sum = weight / height**n
//   let sum = weight / Math.pow(height, 2);
//   return sum.toFixed(1);
// });
