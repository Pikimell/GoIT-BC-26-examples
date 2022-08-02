let elem = {
  value: "123",
};

function func(a, b) {
  console.log(this.value);
  return a + b;
}

func.call(elem);

func();
