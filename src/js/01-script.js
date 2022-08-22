import "../css/common.css";
import refs from "./modules/refs";
import axios from "axios";

const options = {
  headers: {
    Authorization: "c8747511a2c34730a83caaff4f3693e7",
  },
  params: {
    q: "bitcoin",
  },
  data: {
    kuku: "awdawd",
  },
};

axios
  .post("https://newsapi.org/v2/everything", options)
  .then((res) => console.log(res.data));
