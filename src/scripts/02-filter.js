let list = [
  { label: "Html" },
  { label: "Css" },
  { label: "JavaScript" },
  { label: "Redux" },
  { label: "React" },
  { label: "Vue" },
  { label: "C++" },
  { label: "C#" },
  { label: "NodeJs" },
  { label: "Vanil" },
];

let filterElem = document.querySelector(".js-filter");
let listElem = document.querySelector(".js-list");

function onLoad() {
  listElem.innerHTML = list
    .map((item) => {
      return `<li>${item.label}</li>`;
    })
    .join("");
}

onLoad();
