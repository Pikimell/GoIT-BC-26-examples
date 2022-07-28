let num = 35345234; // 32 // 5

// function callback (previousValue, currentValue){
//     return previousValue+=currentValue
// }

// array.reduce(callback, 0)

function getSum(num) {
  //String(num)
  //num.toString()
  //num + ''
  let array = `${num}`.split(""); // ['6','6', ....]

  let sum = 0;
  for (const value of array) {
    if (sum < 10) sum += +value;
  }

  //1265468 //25 //7
  if (sum >= 10) sum = getSum(sum);

  return sum;
}

console.log(getSum(13234345));
