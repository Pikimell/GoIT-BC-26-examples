/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

function onFulfilled(result) {
  console.log("onFulfilled -> onFulfilled");
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log("onRejected -> onRejected");
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */
