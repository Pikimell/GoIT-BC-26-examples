let array = [2, 57, 23, 8, 6, 3, 7];

function foo(array) {
  let i = 0;
  let array1 = [...array];
  for (let value of array1) {
    if (value % 2 !== 0) {
      let index = array1.indexOf(value) - i++;
      array.splice(index, 1);
    }
  }
}

// function foo(array) {
//     return array.filter((value) => value % 2 === 0);
// }

foo(array);
console.log(array);
