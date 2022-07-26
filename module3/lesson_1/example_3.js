/*
Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
*/

const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
    for(let stone of stones){
        if(stone.name === stoneName)
            return stone.price * stone.quantity
    }
    return 0;
}

console.log(calcTotalPrice(stones,'Изумруд'))