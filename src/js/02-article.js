import "../css/common.css";
import { refs } from "./modules/refs";
import articleAPI from "./modules/articleAPI";
import articlesMarkup from "../templates/articles";

const article = new articleAPI();

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  let query = refs.form.elements.query.value;
  if (query.trim().length >= 1) {
    article.resetPage();
    refs.articleList.innerHTML = "";
    article.getArticle(query).then((value) => {
      showArticle(value.articles);
    });
    refs.loadMoreBtn.disabled = false;
  }
});

refs.loadMoreBtn.addEventListener("click", (e) => {
  e.currentTarget.disabled = true;
  refs.loadMoreBtn.children[0].classList.remove("is-hidden");
  article.getArticle().then((value) => {
    showArticle(value.articles);
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtn.children[0].classList.add("is-hidden");
  });
});

function showArticle(article) {
  refs.articleList.insertAdjacentHTML("beforeend", articlesMarkup(article));
}
