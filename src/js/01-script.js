// import "./modules/r - get";
// import "./modules/c - post";
// import "./modules/u - put";
// import "./modules/u - patch";
// import "./modules/d - delete";

let form = document.querySelector(".js-search-form");

form.addEventListener("submit", onFormSubmit);

/* function onFormSubmit(event) {
  event.preventDefault();
  let file = form.elements.query.files[0];

  let myData = new FormData();
  myData.append("file1", file);

  let config = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: myData,
  };
  fetch("localhost:3000/file/addFile", config);
} */

/* function onFormSubmit(event) {
  event.preventDefault();
  let file = form.elements.query.files[0];
  const blob = new Blob(["Hello world!"], { type: "text/plain" });
  saveFileBtn.href = URL.createObjectURL(file);
  console.log(saveFileBtn.href);
  saveFileBtn.download = "text.txt";
} */

/* function onFormSubmit(event) {
  event.preventDefault();

  let csv = [
    ["Col1", "Col2", "Col3"], // Col1,Col2,Col3
    [1, 1, 1],
    [2, 1, 1],
    [3, 1, 1],
    [4, 1, 1],
    [5, 1, 1],
  ];

  let mapCsv = csv.map((r) => r.join(","));

  const blob = new Blob([mapCsv], { type: "text/csv" });
  saveFileBtn.href = URL.createObjectURL(blob);
  console.log(saveFileBtn.href);
  saveFileBtn.download = "text.csv";
} */
