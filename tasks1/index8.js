function fixTheMeerkat(arr) {
  let [x, ...arr1] = arr;
  let y = arr[arr.length - 1];
  arr1.splice(arr1.length - 1, 1, x);
  return [y, ...arr1];
}

let array = [
  "3",
  "2",
  "1",
  "123",
  "2",
  "1",
  "123",
  "2",
  "1",
  "123",
  "2",
  "1",
  "123",
];
console.log(fixTheMeerkat(array));
