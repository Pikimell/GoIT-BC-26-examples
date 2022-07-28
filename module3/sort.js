function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let left = array[i];
      let right = array[j];

      if (left < right) {
        [left, right] = [right, left];
        array[i] = left;
        array[j] = right;
      }
    }
  }

  console.log(array);
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

bubbleSort(array);
