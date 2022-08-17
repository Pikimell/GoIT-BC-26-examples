/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

function myPromise(call1, call2) {
  if (!true) {
    return call1();
  } else {
    return call2();
  }
}

//myPromise().then((value) => console.log(value));
//console.log(myPromise());

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

function myFun() {
  return Promise.resolve("awdawd");
}
function myFun2() {
  return Promise.reject("Err");
}

function myPromise(call1, call2) {
  if (!true) {
    return call1();
  } else {
    return call2();
  }
}

myPromise(myFun, myFun2).then((value) => console.log(value));
