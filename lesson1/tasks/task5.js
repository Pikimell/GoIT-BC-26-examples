/*
Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.
*/

function printContactsInfo(names, phones) {
  names = names.split(",");
  phones = phones.split(",");

  let callback = (element, index) => {
    console.log(element, phones[index]);
  };

  names.forEach((element, index) => {
    console.log(element, phones[index]);
  });
}

printContactsInfo(
  "Jacob,      William,    Solomon,     Artemis",
  "89001234567,89001112233,890055566377,890055566300"
);
