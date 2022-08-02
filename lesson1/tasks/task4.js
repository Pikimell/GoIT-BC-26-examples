let f = function () {
  let obj = {
    x: 120,
    foo() {
      this.x = 5;

      //this -> window, тому що самовикликається
      (function () {
        this.x = 3;
      })();

      console.log(this.x); //5
    },
  };

  obj.foo();
};

f();
