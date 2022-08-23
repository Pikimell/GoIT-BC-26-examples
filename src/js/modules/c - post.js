import axios from "axios";
console.log("post");
const BASE_URL = "https://reqres.in";

function fetchPost() {
  const body = {
    name: "morpheus",
    job: "leader",
  };
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(`${BASE_URL}/api/users`, config)
    .then((res) => res.json())
    .then((value) => console.log("FETCH:", value));
}

function axiosPost() {
  const config = {
    method: "POST",
    url: `${BASE_URL}/api/users`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      name: "morpheus",
      job: "leader",
    },
  };

  return axios.request(config).then((res) => console.log("AXIOS:", res));
}

function axiosPost2() {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let data = {
    name: "morpheus",
    job: "leader",
  };

  return axios
    .post(`${BASE_URL}/api/users`, data, config)
    .then((res) => console.log("AXIOS:", res));
}

fetchPost();
axiosPost();
axiosPost2();
