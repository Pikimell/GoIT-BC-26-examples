# EXAMPLE

## Modules

- [uniqid](https://www.npmjs.com/package/uniqid)
- [date-fns](https://www.npmjs.com/package/date-fns)

---

## Fake API

- [BASE URL API ](https://sampleapis.com/)
- [Api url-1 sampleapis](https://api.sampleapis.com/coffee/hot)
- [Api url-2 sampleapis](https://api.sampleapis.com/coffee/iced)

```js
//Example use API
const baseURL = "https://api.sampleapis.com/coffee/iced";
fetch(baseURL)
  .then((resp) => resp.json())
  .then((data) => console.log(data));
```

---

## TASKS

1. завантажити масив з даними
1. зберігати в ЛС
1. завантажувати з ЛС
1. створити функціонал для створення та видалення нових екземплярів
1. Автозбереження
1. створити рекламу кофе
1. зберігати введений текст(при неочікуваному перезавантаженні сторінки відновити втрачені данні)
1. зробити кнопку для відновлення цих данних (повинна бути неактивною, якщо данних для відновлення не має)
1. Значення чекбоксу Автозбереження зберігається в ЛС
1. Через 5 секунд як зайшли на сайт, запитуємо, чи не бажає продовжити з місця де зупинились
1. відображення дати у кожного елементу
1. сортування за датою
1. якщо перейшли по рекламі то видалити таймер
