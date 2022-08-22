import axios from "axios";
import { keyAPI } from "./constAPI";

export default class {
  options = {
    params: {
      api_key: keyAPI,
      page: 1,
      //language: "uk-Ukrainian",
    },
    method: "GET",
  };
  constructor() {}
  getTopRated() {
    this.options.url = "https://api.themoviedb.org/3/trending/all/day";
    return axios
      .request(this.options)
      .then((response) => {
        this.nextPage();
        return response.data;
      })
      .catch((error) => {
        console.log("Error", error.response.data.status_message);
        return { results: [] };
      });
  }

  nextPage() {
    this.options.params.page += 1;
  }
  setPage(numPage) {
    this.options.params.page = numPage;
  }

  getPopular() {
    this.options.url = "https://api.themoviedb.org/3/movie/popular";
    return axios
      .request(this.options)
      .then((response) => {
        this.nextPage();
        return response.data;
      })
      .catch((error) => {
        console.log("Error", error.response.data.status_message);
        return { results: [] };
      });
  }
}
