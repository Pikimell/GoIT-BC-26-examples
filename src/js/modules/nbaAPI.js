import { refs } from "./refs";
import playerCardTpl from "../../templates/player-card";

const URL = "https://free-nba.p.rapidapi.com";

export function getPlayer(id) {
  const options = {
    headers: {
      "X-RapidAPI-Key": "9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4",
      "X-RapidAPI-Host": URL,
    },
  };
  return fetch(`${URL}/players/${id}`, options)
    .then((response) => {
      return response.json();
    })
    .then((value) => {
      return value.data;
    })
    .catch((error) => console.log(error));
}

export function createMarkupForPlayer(player) {
  refs.cardContainer1.innerHTML = playerCardTpl(player);
}
