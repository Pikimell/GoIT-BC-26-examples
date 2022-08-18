const refs = {
  nextBtn: document.querySelector(".js-next-page"),
  previousBtn: document.querySelector(".js-previous-page"),
  spiner: document.querySelector(".js-spiner"),
  listItems: document.querySelector("#listItems"),
};
//refs.nextBtn.addEventListener("click", loadDataFromServer);
//"https://pokeapi.co/api/v2/pokemon/"

let data = [];
let globalPage = 0;
let link = {
  next: "https://pokeapi.co/api/v2/pokemon/",
  previous: null,
};

refs.nextBtn.addEventListener("click", onClickBtn);
refs.previousBtn.addEventListener("click", onPreviousClickBtn);

function loadDataFromServer(linkValue) {
  refs.spiner.classList.add("show");
  fetch(linkValue)
    .then((data) => {
      return data.json();
    })
    .then((value) => {
      data = value.results;
      showItems(data);
      link.next = value.next;
      link.previous = value.previous;
      saveAll();
      refs.previousBtn.disabled = link.previous === null;
      refs.spiner.classList.remove("show");
    })
    .catch((error) => console.log(error));

  setTimeout(() => {
    refs.spiner.classList.remove("show");
  }, 10000);
}

function showItems(data) {
  let array = data.map((e) => {
    return `<li>${e.name}</li>`;
  });

  listItems.innerHTML +=
    `<li style='background-color:#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}'><hr><h5>${globalPage}</h5>` +
    `<ul>${array.join("")}</ul></li>`;
}

function onClickBtn(e) {
  loadDataFromServer(link.next);
}

function onPreviousClickBtn() {
  loadDataFromServer(link.previous);
}

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  let item = localStorage.getItem(key);
  try {
    return JSON.parse(item ?? []);
  } catch (error) {
    return [];
  }
}

function saveAll() {
  saveToLS("link", link);
  saveToLS("data", data);
}

function init() {
  link = loadFromLS("link").map ? link : loadFromLS("link");
  data = loadFromLS("data");

  if (data.length === 0) {
    console.log("test1");
    loadDataFromServer(link.next);
  } else {
    console.log("test2");
    showItems(data);
  }
}

init();

const BLOCK_HEIGTH = 360;

listItems.addEventListener("scroll", function () {
  let page = Math.ceil(event.target.scrollTop / BLOCK_HEIGTH);

  if (page > globalPage) {
    loadDataFromServer(link.next);
    globalPage++;
  }
});
