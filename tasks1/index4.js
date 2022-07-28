function oddCount(n) {
  let count = 0;
  if (Number.isInteger(n) && n >= 0) {
    for (let i = 0; i <= n; i++) {
      if (i % 2 !== 0) count++;
    }
    return count;
  }

  return -1;
}

function oddCount1(n) {
  return Math.floor(n / 2);
}
