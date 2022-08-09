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
}, 1000);
////////////////////////////////////////////////////////////////////
let refs = {
  userList: document.querySelector(".js-list-user"),
};
function loadData() {
  let result = "";

  result = `
<li class="user-card js-user-card">
  <div class="snip1344">
      <img src="https://source.unsplash.com/100x100/?random=1&avatar,person,boy,girl" alt="profile-sample1" class="background"/>
      <img src="https://source.unsplash.com/100x100/?random=1&avatar,person,boy,girl" alt="profile-sample1" class="profile"/>
      <figcaption>
        <h3>...<span>...</span></h3>
          <div>adress</div>
      </figcaption>
    </div>
</li>`;
  refs.userList.innerHTML = result;
}
///////////////////////////////////////////////////////////////////
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
