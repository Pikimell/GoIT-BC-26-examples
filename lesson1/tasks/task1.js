let elem = {
  value: "123",
};

function func(a, b) {
  const arrow = (a, b) => {
    console.log(this);
  };

  arrow();
}

func.call(elem);

func();
