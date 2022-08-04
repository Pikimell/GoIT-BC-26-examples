let obj1 = {
  age: "OBJ1",
  name: () => {
    console.log(this);
  },
};

let obj2 = {
  age: "OBJ2",
  foo() {
    console.log(this);
    return this;
  },
};

let obj3 = {
  age: "OBJ3",
  foo() {
    console.log(this);
    return this;
  },
};

function myFun() {
  const fun = () => {};
  return fun;
}

obj1.copy = myFun;

// let fun = obj1.copy();
// let foo2 = fun();
// let foo3 = foo2();
// foo3();

function copy() {
  let fun = obj1.copy();
  let foo2 = fun();
  let foo3 = foo2.call(obj2);
  foo3();
}

let copy1 = copy.bind(obj2);

obj1.copy1();
