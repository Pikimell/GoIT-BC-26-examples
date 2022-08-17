const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody"),
};

//refs.startBtn.addEventListener("click", onStart);

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 5000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 7000);
});
let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4);
  }, 1000);
});
let p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(5);
  }, 500);
});

// let err = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(5);
//   }, 2000);
// });

//Promise.race([err, p5]).then((value) => console.log(value));

/*
 * Promise.all([]) для ожидания всех промисов
 */

// Promise.all([p1, p2, p3, p4, p5])
//   .then((value) => console.log(value))
//   .catch((err) => console.log("Err", err));

/* 
  Promise.any(iterable);  Как только один из промисов (Promise) выполнится успешно (fullfill), метод возвратит единственный объект Promise со значением выполненного промиса. Если ни один из промисов не завершится успешно (если все промисы завершатся с ошибкой, т.е. rejected), тогда возвращённый объект Promise будет отклонён (rejected) с одним из значений:

 */

// Promise.any([p1, p2, p3, p4, p5]).then((value) => console.log(value));

/* 
Метод Promise.allSettled() возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.
*/

// Promise.allSettled([p1, p2, p3, p4, p5]).then((value) => console.log(value));
