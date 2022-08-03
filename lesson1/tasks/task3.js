let elem = {
  value: "Привіт",
};

function func(surname, name) {
  //console.log(this);
  let obj1 = {
    foo: () => {
      console.log(this);
    },
  };

  return obj1.foo;
}

const myFunc = func("Иванов", "Иван");
myFunc();

func.apply(elem, ["Vasya", "Vasya1"]);
