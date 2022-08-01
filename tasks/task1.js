function sortByValueAndIndex(array) {
  let result = array
    .map((element, index) => {
      return {
        value: element * (index + 1),
        index,
      };
    })
    .sort((a, b) => a.value - b.value)
    .map((element) => {
      return array[element.index];
    });

  return result;
}

let array = [1 * 1, 2 * 2, 5 * 3, 1, 7, 9, 4, 1];
// [1,2, 1, , 5]

console.log(sortByValueAndIndex(array));

// https://www.codewars.com/kata/58e0cb3634a3027180000040
