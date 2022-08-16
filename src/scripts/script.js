// Створюємо глобальні змінні
let listCoffe = [];
let autoSaveId;
let idShowModalInterval;

// Глобальний об'єкт який зберігає посилання на елементу у HTML
const refs = {
  formElems: document.querySelectorAll("[data-form]"),
  formBox: document.querySelector(".js-form-box"),
  advWindow: document.querySelector(".js-advertising"),
  clickBtnClose: document.querySelector(".js-close-modal"),
};

// Викликаємо функцію для ініціалізації початкових значеннь
init();

//////////////////////////////////////////////////////////////////
//           СТВОРЮЄМО ПРОСЛУХОВУВАЧІ ПОДІЙ на елементах
restoreElemBtn.addEventListener("click", loadDataNewElement); // клік по кнопкі видалення елемента
btnHideModal.addEventListener("click", onHideModal); // клік по кнопці яка ховає модалку з рекламой
autoSaveBtn.addEventListener("click", onSaveBtnClick); // клік по чекбоксу автозбереження данних
createElemBtn.addEventListener("click", onCreateElemBtnClick); // клік по кнопці створення нового елементу
refs.clickBtnClose.addEventListener("click", onBtnClick); // клік по кнопці закриття реклами
refs.formBox.addEventListener("input", onInputChage); // ПОДІЯ ІНПУТ на формі (для усіх інпутів в середині цієї форми)
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//                     ДОДАТКОВИЙ ФУНКЦІОНАЛ

//Функція збереження данних в LocalStorage( далі буду писати - ЛС)
function saveDataToLocalStorage(key, value) {
  //записуємо об'єкт ДЖСОН в ЛС
  localStorage.setItem(key, JSON.stringify(value));
}

//Функція завантаження данних з ЛС
function loadDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// ФУНКЦІЯ що викликається лише один раз для ініціалізації початкових данних
function init() {
  listCoffe = loadDataFromLocalStorage("listCoffe"); //Завантажили данні з ЛС до глобального массиву
  showCoffe(); // Викликали функцію яка відображає массив з елементами на сторінкі
  restoreData(); // відновлює втраченні данні - завантажуючи їх з ЛС
  showAdvertising(); // Викликаємл функцію яка буде показувати рекламу
}

// Функція відображення массиву з елементами на сторіці
function showCoffe() {
  let result = [...listCoffe]
    .sort((a, b) => {
      //Стортуємо массив
      let res = 0;
      try {
        a.createdDate.getTime();
        a = new Date(a.createdDate);
        b = new Date(b.createdDate);
        res = b.getTime() - a.getTime(); // Сортуємо по даті створення
      } catch (error) {
        console.log("error");
        res = -1;
      }
      console.log(res);
      return res;
    })
    .map(({ title, createdDate }) => {
      // Проходимось по відсортованному Массиву елементів
      // Повертаємо для кожного елемента шаблон
      return ` 
  <li class='list-item'><h5>${title}</h5><p>${createdDate}</p></li>
  `;
    }) // Об'єднуємо массив шаблонів в один рядок (великий цілий шаблон)
    .join("");

  coffeElements.innerHTML = result; // Записуємо отриманний шаблон до сторінки
}

// Функція яка зберігає усі необхідні данні у ЛС
function saveAll() {
  saveDataToLocalStorage("listCoffe", listCoffe); // Збереження існуючого масиву
  console.log("Auto Saved!");
}

// Функція для відображення реклами
function showAdvertising() {
  // Створюємо інтервал на виклик реклами кожні 30хв
  idShowModalInterval = setInterval(() => {
    // Додаємо класс - модалка з рекламою виїзжає
    refs.advWindow.classList.add("show");

    // Цикл для зворотнього лічильника на кнопкі закриття реклами
    for (let i = 0; i <= 5; i++) {
      setTimeout(() => {
        btnHideModal.value = `Close ${5 - i}`;
      }, i * 1000);
    }

    // let i = 5;
    // const idInter = setInterval(() => {
    //   btnHideModal.value = `Close ${i--}`;
    // }, 1000);

    // BTN ENANBLED
    setTimeout(() => {
      /* ЗРОЗУМІЛА ВЕРСІЯ КОДУ НИЖЧЕ
      if(refs.advWindow.classList.contains("show")){
        btnHideModal.disabled = false // якщо рекламу видно то кнопка працює
      }else{
        btnHideModal.disabled = true // якщо рекламу не видно то кнопка не працює
      } 
      */
      // clearInterval(idInter); не потрібно
      btnHideModal.value = "Close";

      // ВИШЧЕ БІЛЬ ЗРОЗУМІЛА ВЕРСІЯ ТОГО ЩО ТУТ ВІДБУВАЄТЬСЯ
      btnHideModal.disabled = !refs.advWindow.classList.contains("show");
    }, 5000);

    //HIDE MODAL
    //Запускаємо таймер щоб заркити рекламу через 15 секунд
    setTimeout(() => {
      refs.advWindow.classList.remove("show");
    }, i * 1000 + 10000);
  }, 60000 * 30);
}

// Функція для збереження даних створюваного елементу (який ще не встигли створити)
function saveDateNewElement() {
  // Отримуємо значення з інпутів на формі
  let title = refs.formElems[0].value;
  let desc = refs.formElems[1].value;
  let imgUrl = refs.formElems[2].value;

  // Об'єднуємо отриманні данні в об'єкт
  let coffe = {
    title,
    description: desc,
    image: imgUrl,
  };

  // Зберігаємо отриманий об'єкт в ЛС
  saveDataToLocalStorage("newElement", coffe);
}

// Функція яка вмикає кнопку відновлення данних якщо в ЛС є об'єкт для відновлення
function restoreData() {
  if (localStorage.getItem("newElement")) {
    restoreElemBtn.disabled = false;
  }
}
/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//              КОЛБЕК ФУНКЦІЇ для прослуховувачів подій
function onSaveBtnClick(event) {
  if (event.target.checked) {
    autoSaveId = setInterval(saveAll, 5000);
  } else {
    clearInterval(autoSaveId);
  }
}

function onCreateElemBtnClick() {
  let title = refs.formElems[0].value;
  let desc = refs.formElems[1].value;
  let imgUrl = refs.formElems[2].value;

  let coffe = {
    title,
    description: desc,
    image: imgUrl,
    id: Math.ceil(Math.random() * 1000),
    createdDate: new Date(),
  };

  listCoffe.push(coffe);
  showCoffe();
}

function onInputChage() {
  saveDateNewElement();
}

function loadDataNewElement() {
  let newElementData = loadDataFromLocalStorage("newElement");
  refs.formElems[0].value = newElementData.title;
  refs.formElems[1].value = newElementData.description;
  refs.formElems[2].value = newElementData.image;
  restoreElemBtn.disabled = true;
  localStorage.removeItem("newElement");
}

function onBtnClick() {
  clearInterval(idShowModalInterval);
  refs.advWindow.classList.remove("show");
}

function onHideModal() {
  refs.advWindow.classList.remove("show");
  clearInterval(idShowModalInterval);
  showAdvertising();
}
//////////////////////////////////////////////////////////////////
