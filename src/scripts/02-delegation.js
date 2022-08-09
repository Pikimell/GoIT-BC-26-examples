let refs = {
  firstBoxElem: document.querySelector(".js-box"),
  secondBoxElem: document.querySelector(".js-box-1"),
};

// refs.firstBoxElem.addEventListener("click", (event) => {
//   if (event.target.nodeName === "BUTTON") console.log(event.target.textContent);
// });

document.body.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    switch (event.target.parentNode.dataset.group) {
      case "group-1":
        console.log("group-1", event.target.textContent);
        break;
      case "group-2":
        console.log("group-2", event.target.textContent);
        break;
      case "group-3":
        console.log("group-3", event.target.textContent);
        break;
      case "group-4":
        console.log("group-4", event.target.textContent);
        break;
      case "group-5":
        console.log("group-5", event.target.textContent);
        break;
    }
  }
});
