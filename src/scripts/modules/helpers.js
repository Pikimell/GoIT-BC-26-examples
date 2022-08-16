import dataArray from "../users-data.js";
let { users, photos, posts, albums, comments } = dataArray;

function loadAlbumDataToModal(title, albumId, refs) {
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

//Фукнція відображенння отриманого массиву коритсувачів
function showFilteredUsers(users, refs) {
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

function showComments(postId, refs) {
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
// Функція відображення Альбомів переданого юзера
function updateListAlbums(idUser, refs) {
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

const print = () => {
  console.log("Log helpers");
};

export default {
  loadAlbumDataToModal,
  showFilteredUsers,
  showComments,
  updateListAlbums,
  print,
};
