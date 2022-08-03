/* 
Контекст виконання функції
*/

// const petya = {
//   username: "Petya",
//   showName: function () {
//     console.log(this.username);
//   },
// };

// const lionya = {
//   username: "Linoya",
//   showName: petya.showName,
// };

// petya.showName();
// lionya.showName();

/* 
Правила визначення this
    - this у глобальній області видимості
    - this в методі об'єкта
    - this в callback-функціях
    - this у стрілочних функціях
*/
// "use strict";

function fun() {
  console.log(this);
  return this;
}

let obj1 = {
  fun1: fun,
  fun2() {
    console.log(this);
  },
  fun3: () => {
    console.log(this);
  },
};

obj1.fun1();
obj1.fun2();
obj1.fun3();

let obj = {
  name: "123",
  foo() {
    console.log(this);
  },
};

// let obj1 = {
//   foo: obj.foo
// }

// obj.foo()
// obj1.foo()

// const myFun = obj.foo;

// function myFun1() {
//   obj.foo();
// }

// myFun1();

//- this у callback функціях

// function math(obj1, a, b) {
//   return obj1.callback(a, b);
// }

// let obj1 = {
//   name: "aawd",
//   callback(a, b) {
//     console.log(this);
//     return a + b;
//   },
// };

// math(obj1, 10, 10);

//- this у стрілочних функціях

// let obj1 = {
//   fun1() {
//     console.log(this);
//   },
//   fun: () => {
//     console.log(this.fun1);
//   },
// };

//obj1.fun();

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

/* 
Методи функцій
    - Метод call()
    - Метод apply()
    - Метод bind()
*/

/* let obj1 = {
  foo(a, b) {
    console.log(arguments);
  },
};

let obj2 = {
  name: "awdaw",
  age: 123,
};

let obj3 = {
  name: "awdaw3",
  age: 1233,
  title: 123,
};

// obj1.foo.call(obj2, 10, 20);
// obj1.foo.apply(obj1, [10, 20]);
// const newFoo = obj1.foo.bind(obj2, 10,20)

const foo = () => {
  console.log(this);
};

foo.call(obj3); */
// const func = ;
// func(10, 20, 31, 32);
// func(11, 12, 31, 32);
