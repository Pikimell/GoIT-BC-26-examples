import axios from "axios";

export default class {
  query = "Elon Musk";
  options = {
    method: "GET",
    url: "https://newsapi.org/v2/everything",
    headers: {
      Authorization: "c8747511a2c34730a83caaff4f3693e7",
    },
  };

  constructor() {
    this._page = 1;
    this._page_size = 10;
  }

  getArticle(query, optionsObj) {
    if (query === undefined) query = this.query;
    else this.query = query;

    console.log(optionsObj);
    this.options.params = {
      ...optionsObj,
      q: query,
      page: this._page,
      pageSize: this._page_size,
    };
    console.log(this.options);

    this.incrementPage();
    return axios.request(this.options).then((response) => {
      return response.data;
    });
  }

  incrementPage() {
    this._page = this._page + 1;
  }

  resetPage() {
    this._page = 1;
  }
}
