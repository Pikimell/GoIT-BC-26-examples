console.log("PATCH");
import axios from "axios";
const BASE_URL = "https://reqres.in";

function fetchPatch(id) {
  const body = {
    name: "morpheus",
    job: "leader",
  };
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(`${BASE_URL}/api/users/${id}`, config)
    .then((res) => res.json())
    .then((value) => console.log("FETCH:", value));
}

function axiosPatch(id) {
  const config = {
    method: "PATCH",
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

function axiosPatch2(id) {
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
    .patch(`${BASE_URL}/api/users/${id}`, data, config)
    .then((res) => console.log("AXIOS:", res.data));
}

fetchPatch(1);
axiosPatch(1);
axiosPatch2(2);
