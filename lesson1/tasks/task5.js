// https://habr.com/ru/post/149516/

/* var f = function () {
  this.x = 5;

  (function () {
    this.x = 3;
  })();
  console.log(this.x);
}; */

let obj = {
  x: 4,
  y: 4,
  m: () => {
    console.log(this);
  },

  newFunc() {
    console.log(this);

    const arrow = () => {
      console.log(this);
    };

    return arrow;
  },
};

const foo = obj.newFunc;

foo();

//obj.newFunc.call(window);

/* var obj = {x: 4, 
    m: function() {
        // из пункта 1.2 следует, что this ссылается на вновь создаваемый объект
        // но внутри данной функции не устанавливается значение для this.x, поэтому результат - undefined
        console.log(this.x);
    }
}; */
