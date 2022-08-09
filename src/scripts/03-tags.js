let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

refs.firstTagsList.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    let activeElem =
      event.target.parentNode.parentNode.querySelector(".active");
    event.target.parentNode.classList.toggle("active");

    console.log(activeElem);
  }
});
