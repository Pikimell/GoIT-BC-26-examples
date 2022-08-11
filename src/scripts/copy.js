const refs = {
  inputUserFilter: document.querySelector("#user-filter"),
  outputUserFilter: document.querySelector("#outputInput"),
  userList: document.querySelector(".js-list-user"),
  postList: document.querySelector(".js-list-post-body"),
  btnOpenModal: document.querySelector("#open-modal"),
  backdrop: document.querySelector(".backdrop"),
  modalForm1: document.querySelector(".js-modal-1"),
  modalForm2: document.querySelector(".js-modal-2"),
};

showFilteredUsers(users);

refs.inputUserFilter.addEventListener("input", _.debounce(onInputChange, 300));
function onInputChange(event) {
  const filteredUsers = users.filter((user) => {
    return user.name.includes(event.target.value);
  });

  showFilteredUsers(filteredUsers);
}

function showFilteredUsers(users) {
  let result = users
    .map((use) => {
      return `
          <li class="user-card" data-idUser="${use.id}">
           ${use.name}
          </li>
          `;
    })
    .join("");

  refs.userList.innerHTML = result;
}

refs.userList.addEventListener("click", onUserClick);
function onUserClick(event) {
  if (event.target.nodeName === "LI") {
    let idUser = event.target.dataset.iduser;
    updateListPosts(idUser);
  }
}

function updateListAlbums(idUser) {
  const filteredPosts = albums.filter(({ userId }) => {
    return userId === Number(idUser);
  });

  const htmlPosts = filteredPosts.map(({ id, title }) => {
    return `
            <li class="box post-item" data-id="${id}">
                <b>${title}</b>
            </li>`;
  });

  let result = htmlPosts.join("");

  refs.postList.innerHTML = result;
}

function updateListPosts(idUser) {
  const filteredPosts = posts.filter(({ userId }) => {
    return userId === Number(idUser);
  });
  const htmlPosts = filteredPosts.map(({ title, body }) => {
    return `
            <li class="box post-item">
                <b>${title}</b>
                <p>${body}</p>
            </li>`;
  });

  let result = htmlPosts.join("");
  refs.postList.innerHTML = result;
}

refs.postList.addEventListener("click", onAlbumListClick);

function onAlbumListClick(event) {
  if (event.target.nodeName === "LI") {
    document.body.classList.add("show-modal");
    refs.modalForm2.classList.add("visible");
    refs.modalForm1.classList.remove("visible");

    let albumId = event.target.dataset.id;
    let title = event.target.children[0].textContent;

    loadAlbumDataToModal(title, albumId);
  }
}

function loadAlbumDataToModal(title, albumId) {}

refs.btnOpenModal.addEventListener("click", (event) => {
  document.body.classList.add("show-modal");
  refs.modalForm1.classList.add("visible");
  refs.modalForm2.classList.remove("visible");
});

refs.backdrop.addEventListener("click", (event) => {
  if (event.target === event.currentTarget)
    document.body.classList.remove("show-modal");
});
