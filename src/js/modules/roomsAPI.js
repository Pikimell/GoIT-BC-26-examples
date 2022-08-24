import axios from 'axios';
const config = {
  baseURL: 'http://localhost:4040/rooms',
};
const axiosUp = axios.create(config);

export default class {
  async getRooms() {
    try {
      const rooms = await axiosUp.get('');
      return rooms.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getRoom(id) {
    try {
      const rooms = await axiosUp.get(`/${id}`);
      return rooms.data;
    } catch (error) {
      console.log(error);
    }
  }
  async createRoom(room) {
    try {
      const creatingRoom = await axiosUp.post('', room);
      return creatingRoom.data;
    } catch (error) {
      console.log(error);
    }
  }
  async updateRoom(id, room) {
    try {
      const creatingRoom = await axiosUp.patch(`/${id}`, room);
      return creatingRoom.data;
    } catch (error) {
      console.log(error);
    }
  }
}
