import { refs } from "./refs";
import heroCardTpl from "../../templates/hero-card.hbs";

export function showHero(heroObj) {
  heroObj.img = heroObj.images.sm;
  refs.cardContainer.innerHTML = heroCardTpl(heroObj);
}
