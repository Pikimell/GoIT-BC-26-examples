import "../css/common.css";
import { serchHero, showHero } from "./modules/heroesAPI";
import { refs } from "./modules/refs.js";
import { getPlayer } from "./modules/nbaAPI";
import { getQuotes, showQuotes } from "./modules/quotesAPI";
import { getDataIpGeo } from "./modules/geoLocationApi";
import { getDataGeo } from "./modules/geolocationApiv2";
import mapLinkTemplate from "../templates/mapLink";

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
  let ip = refs.form1.elements.query.value;
  getDataIpGeo(ip).then((value) => console.log(value));
});
// =======================================================
refs.form2.addEventListener("submit", onBtnClickSubmit);

function onBtnClickSubmit(e) {
  e.preventDefault();
  getQuotes().then((quotes) => {
    showQuotes(quotes);
  });
}
// =======================================================

refs.form3.addEventListener("submit", onGeoLocotaionClick);

function onGeoLocotaionClick(event) {
  event.preventDefault();
  let lat = refs.form3.elements.lat.value;
  let lng = refs.form3.elements.lng.value;

  console.log(lat, lng);
  getDataGeo(lat, lng).then((value) => {
    console.log(value.Results[0]);
    map_link.innerHTML = mapLinkTemplate(value.Results[0]);
  });
}

// =======================================================
