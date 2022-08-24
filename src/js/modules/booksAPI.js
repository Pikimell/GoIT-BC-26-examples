import axios from 'axios';
import { faker } from '@faker-js/faker';
faker.seed(0);
faker.locale = 'ru';
const baseURL = 'http://localhost:4040';

const axiosUp = axios.create({
  baseURL: `${baseURL}/books`,
});

export class BooksAPI {
  constructor(page, limit) {
    this._page = page;
    this._limit = limit;
  }

  async getBooks() {
    try {
      const response = await axiosUp.get('');
      return response.data;
    } catch {
      return [];
    }
  }

  async getLimitBooks() {
    this._page++;
    try {
      const response = await axiosUp.get(
        `?_page=${this._page}&_limit=${this._limit}`,
      );
      if (response.status !== 200) {
        const myError = new Error('no response from server');
        throw myError;
      }
      return response.data;
    } catch (error) {
      console.dir(error);
    }
  }

  async createBook(book) {
    try {
      const response = await axiosUp.post('', book);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async replaceBook(book, id) {
    try {
      const response = await axiosUp.put(`/${id}`, book);
      return response.data;
    } catch {
      console.log('Id is undefined');
      return [];
    }
  }

  async updateBook(book, id) {
    try {
      const response = await axiosUp.patch(`/${id}`, book);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteBook(id) {
    try {
      const response = await axiosUp.delete(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return {
        title: 'Default',
      };
    }
  }

  static getRandomBook() {
    return {
      author: faker.name.firstName(),
      desc: faker.lorem.paragraph(),
      title: faker.word.preposition(),
    };
  }
}
