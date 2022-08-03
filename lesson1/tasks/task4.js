function f() {
  const foo = () => {
    this.x = 5;

    (function () {
      this.x = 3;
    })();

    console.log(this);
  };

  return foo;
}

let obj1 = {
  name: 123,
  foo1: f(),
};

obj1.foo1();
