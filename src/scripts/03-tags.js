let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

refs.firstTagsList.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    let activeElem =
      event.target.parentNode.parentNode.querySelector(".active");

    if (activeElem) {
      activeElem.classList.remove("active");
    }

    event.target.parentNode.classList.add("active");
  }
});

let tagsList = [];
refs.secondTagsList.addEventListener("click", (event) => {
  tagsList = [];
  if (event.target.nodeName === "BUTTON" || event.target.nodeName === "DIV") {
    event.target.parentNode.classList.toggle("active");
  }

  //   let elems = refs.secondTagsList.querySelectorAll(".active");
  //   elems.forEach((elem) => {
  //     tagsList.push(elem.children[0].dataset.value);
  //   });

  let elems = refs.secondTagsList.querySelectorAll(
    ".active button.tag-item__btn"
  );
  elems.forEach((elem) => {
    tagsList.push(elem.dataset.value);
  });
});

const sendData = () => {
  console.log(tagsList);
};
