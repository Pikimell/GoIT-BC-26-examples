function sortByBinaryOnes(list) {
  return list.sort((a, b) => {
    a = a.toString(2); // '1001010101' => [1,0,1,1,0] -> [1,1,1] -> 3
    b = b.toString(2); // '1110001101000000' -> [1,0,1,0,1,0,0,0] -> [1,1] -> 3

    let lenA = a.split("").filter((value) => value == "1").length;
    let lenB = b.split("").filter((value) => value == "1").length;

    if (lenA == lenB) {
      if (a.length == b.length) {
        return +a - +b;
      } else {
        return a.length - b.length;
      }
    } else {
      return lenB - lenA;
    }
  });
}

let array = [195, 195, 7, 3, 5];
console.log(sortByBinaryOnes(array));
