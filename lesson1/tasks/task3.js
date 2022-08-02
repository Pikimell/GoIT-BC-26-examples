let elem = {
  value: "Привіт",
};

function func(surname, name) {
  console.log(this.value + ", " + surname + " " + name);
}

func = func.bind(elem);
func("Иванов", "Иван");
func("Петров", "Петр");
