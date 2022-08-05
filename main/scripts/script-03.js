let myBtn = document.querySelector("#testButton");
let listItem = document.querySelector(".list-item");

myBtn.style.width = "100px";

const callback = () => {
  myBtn.style.width = `${parseInt(myBtn.style.width) + 10}px`;
  console.log(myBtn.style.width);
};

myBtn.addEventListener("click", callback);

/* 
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

/* 
Властивість style

myBtn.addEventListener("click", () => {
  myBtn.style.width = "10vh";
  console.log(myBtn.style.width);
});
*/
