const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody"),
  spiner: document.querySelector(".js-spiner"),
};
refs.startBtn.addEventListener("click", loadDataFromServer);

let promis = fetch("https://pokeapi.co/api/v2/pokemon/");
let promises = [];

let globalUrl = "https://pokeapi.co/api/v2/pokemon/";

function loadDataFromServer() {
  let promise = new Promise((resolve, reject) => {
    console.log("Start spinner");
    refs.spiner.classList.add("show");
    setTimeout(() => {
      fetch(globalUrl).then((value) => {
        resolve(value.json());
      });
    }, 3000);
  });

  promise
    .then((val) => {
      console.log("Stop spinner");
      globalUrl = val.next;
      showData(val.results);
      refs.spiner.classList.remove("show");
    })
    .catch((err) => {
      console.log("Stop spinner");
    });
}

function showData(array) {
  let result = array
    .map((obj) => {
      return `<li>${obj.name}</li>`;
    })
    .join("");

  listItems.innerHTML = result;
}

// function isServerOk(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((value) => {
//         if (value.status == 200) {
//           resolve(true);
//         } else {
//           resolve(false);
//         }
//       })
//       .catch((err) => console.log(err));
//   });
// }
