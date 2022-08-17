/* setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resovle, reject) {
  resovle();
  console.log("Создание промиса");
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");
 */

/* 
console.log(1); // 1-1

setTimeout(() => console.log(2)); // 3-6

Promise.resolve().then(() => console.log(3)); // 2-3

Promise.resolve().then(() => {setTimeout(() => console.log(4));}); // 2-4    3-8

Promise.resolve().then(() => console.log(5)); // 2-5

setTimeout(() => console.log(6)); // 3-7

console.log(7); // 1-2 
*/

/* console.log(1); //1

setTimeout(() => console.log(2)); //3

Promise.reject(3).catch(console.log); //2

new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
  setTimeout(console.log(4))
);

Promise.resolve(5).then(console.log); //2

console.log(6); //1

setTimeout(() => console.log(7), 0); //3

// 1 6 3 ... 5 2 4 7 */

/* console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

//1 6 3 5 2 7 4 */

/* const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });
setTimeout(() => console.log("in setTimeout1"), 1000);
myPromise(1000).then((res) => console.log("in Promise 1"));
setTimeout(() => console.log("in setTimeout2"), 100);
myPromise(2000).then((res) => console.log("in Promise 2"));
setTimeout(() => console.log("in setTimeout3"), 2000);
myPromise(1000).then((res) => console.log("in Promise 3"));
setTimeout(() => console.log("in setTimeout4"), 1000);
myPromise(5000).then((res) => console.log("in Promise ")); */

// 2 1 1 3 4 2 3 P
/* 
console.log(1); // 1

setTimeout(() => console.log(2)); // 3

Promise.resolve().then(() => console.log(3)); // 2

Promise.resolve().then(() => setTimeout(() => console.log(4))); // 2 > 3

Promise.resolve().then(() => console.log(5)); // 2

setTimeout(() => console.log(6)); // 3

console.log(7); // 1 */
////////////////////////////////////////////////////////////////////////

/* setTimeout(() => {
  console.log(1);
}, 0);
new Promise((resolve, reject) => {
  console.log(2);
  resolve(null);
}).then((v) => {
  console.log(3);
});
console.log(4); */
////////////////////////////////////////////////////

/* Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

// 1 2 */

/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Начните");
    resolve("TEST");
  }, 5000);
});

const start = Date.now();
console.log("w1");

promise.then((res) => {
  console.log(res, Date.now() - start); // Сходити в магазин
});

promise.then((res) => {
  console.log(res, Date.now() - start); // Відкласти
}); */

/* console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
});

// 1 4 10 5 6 7 2 3 9 8

new Promise((resolve, reject) => {
  console.log(4);
  resolve(5);
}).then((data) => {
  console.log(data);

  Promise.resolve()
    .then(() => {
      console.log(6);
    })
    .then(() => {
      console.log(7);

      setTimeout(() => {
        console.log(8);
      }, 0);
    });
});

setTimeout(() => {
  console.log(9);
});

console.log(10); */

/////////////////////////////////////////////////

/* Promise.resolve("1")
  .then((data) => {
    console.log(data); // 1
  })
  .then((data) => {
    // und
    console.log(data);
    return "2";
  })
  .then((data) => {
    console.log(data); // 2
  }); */

/* Promise.reject(1)
  .then((data) => {
    console.log(data);
  })
  .then(null, (data) => console.log(data))
  .then(() => console.log("ok"));
 */

/* Promise.reject(123).then(
  (data) => console.log("ok"),
  (data) => console.log(data)
); */

/* Promise.reject("1")
  .then(null)
  .then((data) => console.log(data));
 */
/* 
Promise.reject("Api Error")
  .then((data) => console.log("ok"))

  // обработка ошибки
  .catch((error) => {
    console.log(error); // => "Api Error"
    return "1";
  })

  // catch вернул "1"
  .then((data) => {
    console.log(data); // => "1"
  }); */

/* let res = new Promise((resolve, reject) => {
  resolve(123);
  reject("MyError");
}); */

Promise.reject()
  .then()
  .then()
  .then()
  .then()
  .catch(() => {
    console.log("error2");
  });
