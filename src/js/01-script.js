import "../css/common.css";
import { serchHero, showHero } from "./modules/heroesAPI";
import { refs } from "./modules/refs.js";

// =======================================================
refs.form.addEventListener("submit", onSerachHeroClick);
function onSerachHeroClick(event) {
  event.preventDefault();
  let hero = refs.form.elements.query.value;
  serchHero(hero)
    .then(showHero)
    .finally(() => {
      refs.form.elements.query.value = "";
    });
}
// =======================================================
refs.form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const options = {
    headers: {
      "X-RapidAPI-Key": "fd83113197msh93c2b2d5cc00a3ep1c503bjsn3e85bf01dd76",
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    },
  };
  fetch("https://free-nba.p.rapidapi.com/players", options).then((response) =>
    console.log(response.json())
  );
});
