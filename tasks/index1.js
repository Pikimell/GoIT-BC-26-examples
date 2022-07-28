function shuffleIt(arr, ...arrays) {
  for (let value of arrays) {
    let [indexLeft, indexRight] = value;

    let x1 = arr[indexLeft];
    let y1 = arr[indexRight];

    arr[indexRight] = x1;
    arr[indexLeft] = y1;
  }

  return arr;
}

let array = [1, 2, 3, 81, 67, 5, 3];
let arrays = [
  [1, 2],
  [3, 5],
  [2, 3],
  [4, 2],
];
