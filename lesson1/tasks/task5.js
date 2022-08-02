// https://habr.com/ru/post/149516/

/* var f = function () {
  this.x = 5;

  (function () {
    this.x = 3;
  })();
  console.log(this.x);
}; */

/* let obj = {
  x: 4,
  y: 4,
  m: () => {
    console.log(this, "посилається на Window, тому що стрілочна функція");
  },

  newFunc() {
    console.log(this, "this - посилається на (обьект) який викликає цей метод");

    const arrow = () => {
      console.log(
        this,
        "посилається на контекст батька(newFunc), тому що стрілочна функція"
      );
    };

    arrow();
  },
};

let newFunc = obj.newFunc;


newFunc(); */

//obj.newFunc.call(window);

/* var obj = {x: 4, 
    m: function() {
        // из пункта 1.2 следует, что this ссылается на вновь создаваемый объект
        // но внутри данной функции не устанавливается значение для this.x, поэтому результат - undefined
        console.log(this.x);
    }
}; */
