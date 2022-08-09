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

let refs = {
  userList: document.querySelector(".js-list-user"),
  userCard: document.querySelector(".js-user-card"),
  backDrop: document.querySelector(".js-backdrop"),
  userInfo: document.querySelector(".js-user-info"),
};
function loadData() {
  let result = users.map((user, index) => {
    return ` 
<li class="user-card js-user-card" data-id=${user.id}>
  <div class="snip1344">
      <img src="https://source.unsplash.com/100x100/?random=${index}&avatar,person,boy,girl" alt="profile-sample1" class="background"/>
      <img src="https://source.unsplash.com/100x100/?random=${index}&avatar,person,boy,girl" alt="profile-sample1" class="profile"/>
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
function MainFunction() {
  ////////////////////////////////////////////////////////////////////
  refs.userCard = document.querySelector(".js-list-user");

  refs.userCard.addEventListener("click", onUserCardClick);
  refs.backDrop.addEventListener("click", onbackDropToClose);

  function onUserCardClick(e) {
    document.body.classList.add("show-modal");

    let myTarget = e.target;
    while (myTarget.nodeName !== "LI") {
      myTarget = myTarget.parentNode;
    }
    let id = myTarget.dataset.id;
    let user = users.find((elem) => elem.id == id);

    loadUserData(user);
    refs.inputDel = document.querySelector(".js-delete-user-btn");
    refs.inputDel.addEventListener("click", onCardDelete);
    function onCardDelete() {
      console.log(id);
    }
  }
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
  function onbackDropToClose(eve) {
    if (eve.currentTarget === eve.target)
      document.body.classList.remove("show-modal");
  }
  ///////////////////////////////////////////////////////////////////
}

/* 
<div class="tomato box box-gorizont">
    <img src="https://source.unsplash.com/100x100/?random=${index}&avatar,person,boy,girl" alt="avatar">
    <div class="box">
        <h1>NAME NAME</h1>
    </div>
</div>
<div class="tomato box"></div>
*/

/* 
<li class="user-card js-user-card">
    <div class="snip1344">
        <img src="https://source.unsplash.com/100x100/?random=1&avatar,person,boy,girl" alt="profile-sample1" class="background"/>
        <img src="https://source.unsplash.com/100x100/?random=1&avatar,person,boy,girl" alt="profile-sample1" class="profile"/>
        <figcaption>
          <h3>...<span>...</span></h3>
            <div>adress</div>
        </figcaption>
    </div>
</li>
*/
