import { refs } from "./refs";
import quotesCardTemplate from "../../templates/quotes-card";

export function showQuotes(quotes) {
  console.log(quotes);
  refs.cardContainer2.innerHTML = quotesCardTemplate(quotes);
}
