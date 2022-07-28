function getAverage(marks) {
  let total = 0;

  for (let value of marks) {
    total += value;
  }

  return Math.ceil(total / marks.length);
  //return Number.parseInt(total / marks.length);
}

/*
const getAverage = marks  => Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
*/

let array = [1, 2, 3, 4, 5, 4];

console.log(getAverage(array));
