/*
Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

function getRectArea(dimensions) {}
console.log(getRectArea('8 11'));
*/

const getRect = (dimensions, callback) => {
  dimensions = dimensions.split(" ");
  return callback(+dimensions[1], +dimensions[0]);
};

let getArea = (a, b) => {
  return a * b;
};

let callback2 = (a, b) => {
  return (a + b) * 2;
};

if (str === "Enter") {
  getRectArea(123, getArea);
} else {
  getRectArea(123, callback2);
}
