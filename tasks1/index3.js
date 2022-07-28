function foo(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    arr.push(i);
  }
  return arr;
}

let num = 10;
foo(num); // [1,2]
