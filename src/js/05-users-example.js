import data from "./05-users-data";
import userCards from "../templates/userCards.hbs";
import postItems from "../templates/postItem.hbs";
import albumItems from "../templates/albumItems.hbs";
import commentItems from "../templates/commentItems.hbs";
import imgItem from "../templates/imgItem.hbs";
let { users, albums, photos, posts, comments } = data;
localStorage.setItem("ALBUMS", JSON.stringify(albums));
/* 
let myUser = {
  name: "awdawd",
  age: 123,
  email: "awdawd",
  isAdmin: true,
  arrayUsers: [1, 2, 3, 4],
  info: {
    adress: "123123",
  },
};

let myStr = JSON.stringify(myUser);
let result;
try {
  let user = JSON.parse(myStr);
  if (!user.email.includes("@")) throw new Error("Error Email");
} catch (error) {
  console.log(error);
} 
*/

/* saveToLS(users);
users = loadFromLS("users"); */

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

[
  {
    id: 1,
    title: "",
    index: 0,
  },
  {
    id: 1,
    title: "",
    index: 1,
  },
  {
    id: 1,
    title: "",
    index: 2,
  },
  {
    id: 1,
    title: "",
    index: 2,
  },
];

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
  let myStr = userCards(users);
  let result = myStr; // Перетворення массиву на розмітку ХТМЛ

  refs.userList.innerHTML = result;
  refs.btnOpenModal = document.querySelector("#open-modal");
}

// Прослуховувач подій клік на Списку користувачів
refs.userList.addEventListener("click", onUserClick, 500);
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
  const filteredAlbum = albums.filter(({ userId }) => {
    return userId === Number(idUser);
  });

  // Відображаємо цю розмітку на сторінці
  let obj = {
    filteredAlbum: filteredAlbum,
  };
  refs.postList.innerHTML = albumItems(obj);
}

// Функція відображення Постів переданого юзера (Все як і в верхній функції)
function updateListPosts(idUser) {
  const filteredPosts = posts.filter(({ userId }) => {
    return userId === Number(idUser);
  });

  refs.postList.innerHTML = postItems(filteredPosts);
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

  refs.commentsListEl.innerHTML = commentItems(filteredComments);
}

// Фукнція відображення альбому в модальному вікні
function loadAlbumDataToModal(title, albumId) {
  let filteredListPhoto = photos.filter((photo) => {
    return photo.albumId == Number(albumId);
  });
  refs.modalForm2.children[0].textContent = title;
  refs.modalForm2.children[1].innerHTML = imgItem(filteredListPhoto);
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
  refs.postList.style.height = "100px";
  event.currentTarget.style.height = "300px";
}

function onCommentsListMouseOut(event) {
  refs.postList.style.height = "300px";
  event.currentTarget.style.height = "100px";
}
