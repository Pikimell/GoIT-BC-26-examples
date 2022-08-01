function smaller(nums) {
  nums.map((item, index, array) => {
    return array.filter((item1, index1) => {
      return item > item1 && index1 > index;
    }).length;
  });
}

let array = [5, 4, 3, 2, 1];
