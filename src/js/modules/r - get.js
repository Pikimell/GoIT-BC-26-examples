import axios from "axios";
console.log("get");
const BASE_URL = "https://reqres.in";

function fetchGet() {
  let url = `${BASE_URL}/api/users?page=1&delay=1`;
  const config = {
    headers: {
      apiKey: "awdawdwdawd",
    },
  };
  return fetch(url, config)
    .then((res) => res.json())
    .then((value) => console.log(value));
}

function axiosGet() {
  const OPTIONS = {
    method: "GET",
    url: `${BASE_URL}/api/users?page=23`,
    params: {
      page: 1,
      delay: 1,
    },
    headers: {
      apiKey: "awdawdwdawd",
    },
  };

  return axios.request(OPTIONS).then((res) => console.log(res.data));
}

function axiosGet2() {
  const OPTIONS = {
    params: {
      page: 1,
      delay: 1,
    },
    headers: {
      apiKey: "awdawdwdawd",
    },
  };
  let url = `${BASE_URL}/api/users`;
  return axios.get(url, OPTIONS).then((res) => console.log(res.data));
}

fetchGet();
axiosGet();
axiosGet2();
