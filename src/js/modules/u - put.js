import axios from "axios";
console.log("put");
const BASE_URL = "https://reqres.in";

function fetchPut(id) {
  const body = {
    name: "morpheus",
    job: "leader",
  };
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(`${BASE_URL}/api/users/${id}`, config)
    .then((res) => res.json())
    .then((value) => console.log("FETCH:", value));
}

function axiosPut(id) {
  const config = {
    method: "PUT",
    url: `${BASE_URL}/api/users/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      name: "morpheus",
      job: "leader",
    },
  };

  return axios.request(config).then((res) => console.log("AXIOS:", res.data));
}

function axiosPut2(id) {
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
    .put(`${BASE_URL}/api/users/${id}`, data, config)
    .then((res) => console.log("AXIOS:", res.data));
}

fetchPut(1);
axiosPut(1);
axiosPut2(2);
