const BASE_URL = "https://address-from-to-latitude-longitude.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": "fd83113197msh93c2b2d5cc00a3ep1c503bjsn3e85bf01dd76",
    "X-RapidAPI-Host": "address-from-to-latitude-longitude.p.rapidapi.com",
  },
};

export function getDataGeo(lat, lng) {
  return fetch(
    `${BASE_URL}/geolocationapi?lat=${lat}&lng=${lng}`,
    options
  ).then((response) => response.json());
}
