// users, posts, comments, albums, photos
//Посилання на необхідні елементи
const refs = {
  inputUserFilter: document.querySelector("#user-filter"),
  outputUserFilter: document.querySelector("#outputInput"),
  userList: document.querySelector(".js-list-user"),
  postList: document.querySelector(".js-list-post-body"),
  btnOpenModal: document.querySelector("#open-modal"),
  backdrop: document.querySelector(".backdrop"),
  modalForm1: document.querySelector(".js-modal-1"),
  modalForm2: document.querySelector(".js-modal-2"),
  commentsListEl: document.querySelector(".js-list-post-comment"),
};

// Завантажую(Відображаю на сторінці) список користувачів
showFilteredUsers(users);

//Створюю прослуховувач події на інпуті
refs.inputUserFilter.addEventListener("input", _.debounce(onInputChange, 300));
// Колбек для прослуховувача (Фільтрує мавсссив користувачів)
function onInputChange(event) {
  const filteredUsers = users.filter((user) => {
    return user.name.includes(event.target.value);
  });

  //Відображаємо відфільтрованний массив коритсувачів
  showFilteredUsers(filteredUsers);
}

//Фукнція відображенння отриманого массиву коритсувачів
function showFilteredUsers(users) {
  let result = users
    .map((use) => {
      return `
      <li class="user-card" data-idUser="${use.id}">
       ${use.name}
      </li>
      `;
    })
    .join(""); // Перетворення массиву на розмітку ХТМЛ

  refs.userList.innerHTML = result;
  refs.btnOpenModal = document.querySelector("#open-modal");
}

// Прослуховувач подій клік на Списку користувачів
refs.userList.addEventListener("click", onUserClick);
//Колбек для прослуховувача
function onUserClick(event) {
  if (event.target.nodeName === "LI") {
    //Якщо клацнули по карточці Юзера

    //Отримуємо айді цього юзера
    let idUser = event.target.dataset.iduser;

    // Відображаем пости обраного юзера
    if (event.ctrlKey) updateListAlbums(idUser);
    else updateListPosts(idUser);
  }
}

// Функція відображення Альбомів переданого юзера
function updateListAlbums(idUser) {
  //Фільтруємо массив постів, залишаючи лише необхідні
  const filteredPosts = albums.filter(({ userId }) => {
    return userId === Number(idUser);
  });

  // Генеруємо массив з розміткою альбомів (елемент)
  const htmlPosts = filteredPosts.map(({ id, title }) => {
    return `
        <li class="box post-item" data-id="${id}">
            <b>${title}</b>
        </li>`;
  });

  // Отримуємо розмітку у вигляді цільного рядка
  let result = htmlPosts.join("");

  // Відображаємо цю розмітку на сторінці
  refs.postList.innerHTML = result;
}

// Функція відображення Постів переданого юзера (Все як і в верхній функції)
function updateListPosts(idUser) {
  const filteredPosts = posts.filter(({ userId }) => {
    return userId === Number(idUser);
  });
  const htmlPosts = filteredPosts.map(({ title, body, id }) => {
    return `
        <li class="box post-item" data-id='${id}'>
            <b>${title}</b>
            <p>${body}</p>
        </li>`;
  });

  let result = htmlPosts.join("");
  refs.postList.innerHTML = result;
}

// Додавання прослуховувача події на список постів (щоб відкривати модалку)
refs.postList.addEventListener("click", onListItemClick);

// Колбек для прослуховувача
function onListItemClick(event) {
  // Перевірка якщо клік саме по альбому
  let myTarget = event.target;
  if (
    !event.target.matches(".list-post-body") &&
    !event.target.matches(".post-item")
  )
    myTarget = event.target.closest(".post-item");

  if (myTarget.nodeName === "LI") {
    let albumId = myTarget.dataset.id;

    if (myTarget.children.length === 1) {
      // Додаю необхідні класи для відображення модалки
      document.body.classList.add("show-modal");
      refs.modalForm2.classList.add("visible");
      refs.modalForm1.classList.remove("visible");

      // Отримую данні обраного альбому
      let title = myTarget.children[0].textContent;

      // Викликаю функцію відобрадення альбому
      loadAlbumDataToModal(title, albumId);
    } else {
      showComments(albumId);
    }
  }
}

function showComments(postId) {
  let filteredComments = comments.filter((comment) => {
    return comment.postId == postId;
  });
  refs.commentsListEl.innerHTML = filteredComments
    .map(({ body, email }) => {
      return `
    <li class="comment-item">
            <i>${email}</i>
            <p>${body}</p>
          </li>
    `;
    })
    .join("");
}

// Фукнція відображення альбому в модальному вікні
function loadAlbumDataToModal(title, albumId) {
  let filteredListPhoto = photos.filter((photo) => {
    return photo.albumId == Number(albumId);
  });
  refs.modalForm2.children[0].textContent = title;
  refs.modalForm2.children[1].innerHTML = filteredListPhoto
    .map((elem) => {
      return ` <img class='list-photo-item lazyload' src="${elem.thumbnailUrl}" data-src="${elem.url}">`;
    })
    .join("");
}

// Прослуховувач подій на кнопці для створення нового юзера (Відкриває модальне вікно реєстрації)
refs.btnOpenModal.addEventListener("click", (event) => {
  event.stopPropagation(); //Зупиняє всплиття події на верх (до батька не дійде)
  document.body.classList.add("show-modal");
  refs.modalForm1.classList.add("visible");
  refs.modalForm2.classList.remove("visible");
});

// Прослуховувач подій на бекдроп для закриття модалок
refs.backdrop.addEventListener("click", (event) => {
  //якщо клацаю за межами модалки то
  if (event.target === event.currentTarget)
    // закриваю модалку видаливши клас
    document.body.classList.remove("show-modal");
});

refs.commentsListEl.addEventListener("mouseover", onCommentsListMouseOver);
refs.commentsListEl.addEventListener("mouseout", onCommentsListMouseOut);

function onCommentsListMouseOver(event) {
  console.log(refs.postList.style.height);
  refs.postList.style.height = "100px";
  event.currentTarget.style.height = "300px";
}

function onCommentsListMouseOut(event) {
  refs.postList.style.height = "300px";
  event.currentTarget.style.height = "100px";
}
