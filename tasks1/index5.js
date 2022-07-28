function divisibleBy(numbers, divisor) {
  let array = [];
  for (let value of numbers) {
    if (value % divisor === 0) {
      array.push(value);
    }
  }
  return array;
}

let array = [0, 2, 3, 54, 6, 7, 8];

divisibleBy(array, 2);
