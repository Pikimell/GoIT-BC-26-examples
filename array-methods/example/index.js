const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   }

// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

let task1 = cars.map(({ model }) => {
  return model;
});

// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.

// function makeCarsWithDiscount(cars, discount) {
//   let result = cars.map((car) => {
//     car = { ...car };
//     car.price *= (100 - discount) / 100;
//     return car;
//   });

//   return result;
// }

// console.log(makeCarsWithDiscount(cars, 10));

// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

// function filterByPrice(cars, threshold) {
//   return cars.filter(({ price }) => price < threshold);
// }
// console.log(filterByPrice(cars, 24045));

// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// function getCarsWithDiscount(cars) {
//   return cars.filter(({ onSale }) => !onSale);
// }
// console.log(getCarsWithDiscount(cars));

// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// function getCarsWithType(cars, type) {
//   return cars.filter((car) => car.type === type);
// }
// console.log(getCarsWithType(cars, "suv"));

// Пусть функция getCarByModel возвращает елемент где модель авто совпадает с параметром model.

// function getCarByModel(cars, model) {
//   return cars.find((car) => car.model === model);
// }
// let findCar = { ...getCarByModel(cars, "CX-9") };
// findCar.type = "newSuv";
// console.log(cars);

// function getCarByModel(cars, model) {
//   cars.reduce((total, element) => {
//     if (element.model === model && total.model === undefined)
//       total = { ...element };

//     return total;
//   }, {});
// }

// console.log(getCarByModel(cars, "bmv"));

// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

// function sortByAscendingAmount(cars) {
//   let newCars = [...cars];
//   let count = 0;
//   newCars.sort(({ amount: amountLeft }, { amount: amountRight }) => {
//     return amountLeft - amountRight;
//   });
//   return newCars;
// }

// console.log(sortByAscendingAmount(cars));

// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

//

// const sortByDescendingPrice = (cars) =>
//   [...cars].sort((a, b) => b.price - a.price);

// console.log(sortByDescendingPrice(cars));

// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// function sortByModel(cars, order) {
//   return [...cars].sort((a, b) =>
//     order > 0 ? a.model.localeCompare(b.model) : b.model.localeCompare(a.model)
//   );
// }

// console.log(sortByModel(cars, 0));

// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).
// {
//   make: "Honda",
//   model: "CR-V",
//   type: "suv",
//   amount: 14,
//   price: 24045,
//   onSale: true,
// },

// function getTotalAmount(cars) {
//   return cars.reduce((total, car) => total + car.amount, 0);
// }

// console.log(getTotalAmount(cars));

// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

// function getAvailableCarNames(cars) {
//   return cars.reduce((initialValue, car) => {
//     if (car.onSale) initialValue.push(car.model);

//     return initialValue;
//   }, []);
// }

// console.log(getAvailableCarNames(cars));

// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

// function getAvailableCarNames(cars) {
//   return cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price);
// }
// console.log(getAvailableCarNames(cars));
