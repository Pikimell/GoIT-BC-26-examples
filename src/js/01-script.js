import "../css/common.css";
import { refs } from "./modules/refs";
import filmCardTemplate from "../templates/films";
import FilmApi from "./modules/filmsAPI";

const filmApi = new FilmApi();

refs.loadMoreBtn.addEventListener("click", onLoadClick);
refs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  filmApi.setPage(1);
  filmApi.getTopRated().then((value) => {
    refs.loadMoreBtn.disabled = false;
    refs.articleList.innerHTML = "";
    renderMarkup(value.results);
  });
});

function renderMarkup(result) {
  refs.articleList.innerHTML += filmCardTemplate(result);
}

function onLoadClick() {
  refs.loadMoreBtn.disabled = true;
  filmApi.getTopRated().then((value) => {
    renderMarkup(value.results);
  });
  setTimeout(() => {
    refs.loadMoreBtn.disabled = false;
  }, 1000);
}

refs.paginationList.addEventListener("click", selectPage);

function selectPage(event) {
  if (event.target.nodeName !== "UL") {
    let numberPage = event.target.textContent;
    refs.paginationList.querySelector(".active").classList.remove("active");

    filmApi.setPage(numberPage);
    filmApi.getPopular().then((value) => {
      refs.articleList.innerHTML = "";
      renderMarkup(value.results);
    });

    let liObj = event.target;
    if (liObj.nodeName !== "LI") liObj = event.target.parentNode.parentNode;
    liObj.classList.add("active");
  }
}
