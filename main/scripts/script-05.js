let myBtn = document.querySelector("#testButton");
let list = document.querySelector(".usernames");

let ulItem = document.createElement("ul");
for (let i = 0; i < 5; i++) {
  let liItem = document.createElement("li");
  liItem.textContent = `Test - ${i}`;
  ulItem.append(liItem);
}

list.parentElement.append(ulItem);
list.remove();

/* 
Створення
document.createElement(tagName);
*/

/* 
    Додавання
    - element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
    - element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
    - element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
    - element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
*/

/* 
Видалення
elem.remove();
*/
