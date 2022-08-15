const userList = document.querySelector("#user-list");
const userInput = document.querySelector("#user-name");
let users = [];

function addUser() {
  if (userInput.value !== "") {
    let liElem = document.createElement("li");
    liElem.textContent = userInput.value;
    userList.append(liElem);
    users.push(userInput.value);
    userInput.value = "";
    userInput.style.border = "1px solid black";
  } else {
    userInput.style.border = "1px solid red";
    //userInput.classList.add("error-empty")
  }
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
  let result = localStorage.getItem("users");
  if (result == null) saveUsers();
  else {
    try {
      users = JSON.parse(result);
    } catch {
      console.log("error: invalid parsing");
    }
    users.forEach((user) => {
      let liElem = document.createElement("li");
      liElem.textContent = user;
      userList.append(liElem);
    });
  }
}

function init() {
  setInterval(() => {
    saveUsers();
    console.log("Saved!");
  }, 10000);
  loadUsers();
}

init();

function clearUsers() {
  users = [];
  localStorage.removeItem("users");
  userList.textContent = "";
}
