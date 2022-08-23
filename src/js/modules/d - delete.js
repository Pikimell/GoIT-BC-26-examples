import axios from "axios";
console.log("delete");

function fetchDel(id) {
  let config = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  fetch(`https://reqres.in/api/users/${id}`, config).then((res) =>
    console.log(res)
  );
}

function axiosDel(id) {
  const instance = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
  });

  instance.delete(`/users/${id}`).then((res) => console.log(res));
}

fetchDel(1);
axiosDel(1);
