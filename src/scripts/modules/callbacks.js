function openModal(event) {
  let parent = event.target.closest(".box-horizontal").nextElementSibling;
  event.stopPropagation(); //Зупиняє всплиття події на верх (до батька не дійде)
  document.body.classList.add("show-modal");
  parent.children[0].classList.add("visible");
  parent.children[1].classList.remove("visible");
}

export default {
  openModal,
};
