import { refs } from "./refs";
import quotesCardTemplate from "../../templates/quotes-card";

const options = {
  method: "GET",
  params: { language_code: "en" },
  headers: {
    "X-RapidAPI-Key": "fd83113197msh93c2b2d5cc00a3ep1c503bjsn3e85bf01dd76",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};
const URL = "https://quotes15.p.rapidapi.com";
export function getQuotes() {
  return fetch(`${URL}/quotes/random/`, options)
    .then((response) => {
      if (response.status === 429) {
        throw new Error("Error - 429");
      }
      return response.json();
    })
    .then((value) => value)
    .catch(({ name, message }) => {
      console.log(`'name': ${name} mesage: ${message}`);
    });
}
export function showQuotes(quotes) {
  console.log(quotes);
  refs.cardContainer2.innerHTML = quotesCardTemplate(quotes);
}
