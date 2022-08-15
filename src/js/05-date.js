/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/
setTimeout(() => {
  const date2 = new Date();

  console.log("date1", date1.getDate());
  console.log("date2", date2.getUTCDate());

  console.log(date2 - date1);
}, 3000);
