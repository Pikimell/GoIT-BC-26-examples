/*
Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.

Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.
*/

const logItems = (items) => {
  items.forEach((element, index) => console.log(index + 1, element));
};

/*
    forEach(callback){
        for(let i=0;i<array.length;i++){
            //i = 0   "Mango"   0  
             callback(array[i], i, array)
        }
    }
*/

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
