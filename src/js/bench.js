function slowFunc1(timeStart, maxTime) {
  let timeNow = Date.now();
  let res = timeNow - timeStart;
  for (let i = 0; i < 100000; i++) {
    console.log(i);
    timeNow = Date.now();
    res = timeNow - timeStart;
    if (res >= maxTime) throw new Error("myError");
  }
}

function slowFunc2(timeStart, maxTime) {
  let timeNow = Date.now();
  let res = timeNow - timeStart;
  for (let i = 0; i < 100; i++) {
    console.log(i);
    timeNow = Date.now();
    res = timeNow - timeStart;
    if (res >= maxTime) throw new Error("myError");
  }
}

function bench(callback) {
  let now = Date.now();

  try {
    callback(now, 1000);
  } catch {
    console.log("Error Time");
  }

  let end = Date.now();
  console.log("MSeconds", end - now);
}
