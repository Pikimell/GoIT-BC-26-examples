let myBtn = document.querySelector("#testButton");
let list = document.querySelector("ul");

console.log(list.lastElementChild);

const callback = () => {
  let elems = document.querySelector("ul");
  console.log(elems.parentNode.lastElementChild.innerHTML);
};

myBtn.addEventListener("click", callback);

/* 

elem.parentNode - вибере батьківський elem.
elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

*/
