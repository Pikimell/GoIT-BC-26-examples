/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// let promise = new Promise((resolve, reject) => {
//   let num = Math.random();

//   const DELAY = 300;

//   setTimeout(() => {
//     if (num >= 0.5) {
//       resolve("Ok");
//     } else {
//       reject("Err");
//     }
//   }, DELAY);
// });

//promise.then(onFulfilled).then().catch(onRejected).finally;

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// console.log(promise);

// let array;

// function onFulfilled(result) {
//   console.log(`✅ ${result}`);
//   return result * 2;
// }

// function onRejected(error) {
//   console.log("onRejected -> onRejected");
//   console.log(`❌ ${error}`);
// }

let BD = [
  {
    id: 1,
    name: "awdaw1",
    age: "12323",
  },
  {
    id: 2,
    name: "awdaw2",
    age: "12323",
  },
  {
    id: 3,
    name: "awdaw3",
    age: "12323",
  },
];

function getName(id) {
  return BD.find((user) => user.id === id).name;
}

function getAge(name) {
  return BD.find((user) => user.name === name).age;
}

let promise = new Promise((resolve, reject) => {
  const DELAY = 5000;
  let id = 1;
  setTimeout(() => {
    let name = getName(id);
    if (name) {
      resolve(name);
    } else {
      reject("Err");
    }
  }, DELAY);
});

let columns = [];
let findUser = {};

promise
  .then((value) => {
    findUser.name = value;
    return new Promise((resolve, reject) => {
      const DELAY = 1000;
      setTimeout(() => {
        let age = getAge(value);
        if (age) {
          resolve(age);
        } else {
          reject("Err");
        }
      }, DELAY);
    });
  })
  .then((value) => {
    findUser.age = value;
  })
  .finally(() => {
    console.log(findUser);
  });

promise.then().then().then().catch().then();

console.log(findUser);
