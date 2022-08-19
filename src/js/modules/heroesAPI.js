import { refs } from "./refs";
import heroCardTpl from "../../templates/hero-card.hbs";

const BASE_URL = "https://superhero-search.p.rapidapi.com";

export const serchHero = (hero) => {
  const options = {
    headers: {
      "X-RapidAPI-Key": "fd83113197msh93c2b2d5cc00a3ep1c503bjsn3e85bf01dd76",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  return fetch(`${BASE_URL}/api/?hero=${hero}`, options).then((res) =>
    res.json()
  );
};

export function showHero(heroObj) {
  heroObj.img = heroObj.images.sm;
  refs.cardContainer.innerHTML = heroCardTpl(heroObj);
}
