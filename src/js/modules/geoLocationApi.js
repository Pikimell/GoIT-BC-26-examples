const BASE_URL = "https://ejaz1-ip-geolocation-v1.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": "fd83113197msh93c2b2d5cc00a3ep1c503bjsn3e85bf01dd76",
    "X-RapidAPI-Host": "ejaz1-ip-geolocation-v1.p.rapidapi.com",
  },
};

export function getDataIpGeo(ip) {
  return fetch(`${BASE_URL}/ipgeo?ip=${ip}`, options)
    .then((response) => response.json())
    .then((value) => value);
}
