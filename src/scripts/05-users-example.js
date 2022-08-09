let users = [];
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => (users = json));

setTimeout(() => {
  users = users.map((user, index) => {
    user.avatar = `https://source.unsplash.com/100x120/?random=${index}&avatar,person,boy,girl`;
    return user;
  });
  console.log(users);
  loadData();
  MainFunction();
}, 1000);
//////////////////////////////////////////////////////////////////////////////////////////////////

// Object references
let refs = {
  userList: document.querySelector(".js-list-user"),
  userCard: document.querySelector(".js-user-card"),
  backDrop: document.querySelector(".js-backdrop"),
  userInfo: document.querySelector(".js-user-info"),
  firstModal: document.querySelector(".js-user-info"),
  secondModal: document.querySelector(".js-form-regestration"),
};

// Функція завантажує дані про користувачів до списку
function loadData() {
  let result = users.map((user) => {
    return ` 
<li class="user-card js-user-card" data-id=${user.id}>
  <div class="snip1344">
      <img src="https://source.unsplash.com/100x100/?random=${user.id}&avatar,person,boy,girl" alt="profile-sample1" class="background"/>
      <img src="https://source.unsplash.com/100x100/?random=${user.id}&avatar,person,boy,girl" alt="profile-sample1" class="profile"/>
      <figcaption>
        <h3>${user.name}<span>${user.phone}</span></h3>
          <div>@${user.username}</div>
      </figcaption>
    </div>
</li>
`;
  });
  refs.userList.innerHTML = result.join("");
}

//Головна функція яка все об'єднала
function MainFunction() {
  ////////////////////////////////////////////////////////////////////

  // Створюємо додаткові посилання на необхідні елементи
  refs.userCard = document.querySelector(".js-list-user");

  // Додаємо слухачі подій на елементи
  refs.userCard.addEventListener("click", onUserCardClick); // Відкриття модалки при кліку на Юсера
  refs.backDrop.addEventListener("click", onbackDropToClose); // Закриття модалки при  кліку на бекдроп

  // Інструкція відкриття модалки
  function onUserCardClick(e) {
    document.body.classList.add("show-modal");

    if (users.length == 0) {
      // якщо коритсувачів немає в массиві (порожній список)
      refs.userInfo.classList.remove("visible");
      refs.secondModal.classList.add("visible");
    } else {
      //якщо користувачі є (список НЕ порожній)

      refs.userInfo.classList.add("visible");
      refs.secondModal.classList.remove("visible");

      // Отримую посилання на головний елемент юзера (тег - ЛІ)
      let myTarget = e.target;
      while (myTarget.nodeName !== "LI") {
        myTarget = myTarget.parentNode;
      }
      let id = myTarget.dataset.id; // отримую АйДі

      let user = users.find((elem) => elem.id == id); // Отримую юзера з массиву юзерів (лише того у якого задовільняє айді)

      loadUserData(user); //Викликаю функцію яка завантаже до модального вікна інформацію про Юзера

      // отримую посилання на кнопку для видалення юзера у модальному вікні
      refs.inputDel = document.querySelector(".js-delete-user-btn");

      //Додаю до цієї кнопки прослуховувач події Клік
      refs.inputDel.addEventListener("click", onCardDelete);

      // Описую коллбек для прослуховувача події у "inputDel"
      function onCardDelete() {
        // Отримую відфільтрованний массив користувачів які задовільняють умову
        users = users.filter((user) => user.id != id);

        // Після видалення юзеру приховую модальне вікно
        document.body.classList.remove("show-modal");

        //Викликаю функцію рендера юзерів у списку за оновленним массивом юзерів
        loadData();
      }
    }
  }

  // Функція яка завантажує данні про Юзера до модального вікна
  function loadUserData(user) {
    refs.userInfo.innerHTML = `
    <div class="box box-gorizont">
    <img src="${user.avatar}" alt="avatar">
    <div class="box">
        <h1>${user.name}</h1>
        ${user.email},<br> ${user.website},<br> ${user.phone}
        <br>
        <input type="button" value="Delete" class="js-delete-user-btn">
    </div>
</div>
<div class="box">
${Object.keys(user.address)
  .map((key) => {
    if (key === "geo") return "";
    return key + ": " + user.address[key] + "<br>";
  })
  .join("")}
</div>`;
  }

  // Колбек функція для закриття модального вікна
  function onbackDropToClose(eve) {
    if (eve.currentTarget === eve.target)
      document.body.classList.remove("show-modal");
  }
  ///////////////////////////////////////////////////////////////////
}
