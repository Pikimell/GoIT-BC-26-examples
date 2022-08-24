import axios from 'axios';
import { faker } from '@faker-js/faker';
const baseURL = 'http://localhost:4040';

const instance = axios.create({
  baseURL: `${baseURL}/users`,
});

export class UsersApi {
  async getUsers() {
    try {
      const res = await instance.get('');
      return res.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  createUser(user) {
    return instance.post('', user).then(res => res.data);
  }
  resetUser(id, user) {
    return instance.put(`/${id}`, user).then(res => res.data);
  }
  updateUser(id, user) {
    return instance.patch(`/${id}`, user).then(res => res.data);
  }

  static getRandomUser() {
    return {
      name: faker.name.fullName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      room: [],
      readedBooks: [],
      books: [],
    };
  }
}
