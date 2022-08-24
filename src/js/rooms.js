import '../css/common';
import '../css/room';
import Rooms from './modules/roomsAPI';
import roomsTemplate from '../templates/rooms';
import roomTemplate from '../templates/room';

const roomsAPI = new Rooms();
const refs = {
  showRoomsBtn: document.querySelector('.js-btn-load'),
  roomsList: document.querySelector('.js-rooms-list'),
  formCreate: document.querySelector('.js-create-form'),
  formUpdate: document.querySelector('.js-update-form'),
};

refs.showRoomsBtn.addEventListener('click', showRooms);
async function showRooms() {
  const room = await roomsAPI.getRooms();
  renderRooms(room);
}

function renderRooms(rooms) {
  refs.roomsList.innerHTML = roomsTemplate(rooms);
}

refs.formCreate.addEventListener('submit', onCreateFormSubmit);

async function onCreateFormSubmit(event) {
  event.preventDefault();

  let room = {};
  let data = new FormData(refs.formCreate);
  data.forEach((element, key) => {
    room = {
      ...room,
      [key]: element,
    };
  });

  const res = await roomsAPI.createRoom(data);
  console.log(res);
  //let markup = roomTemplate(room);
}
refs.formUpdate.addEventListener('submit', onFormSubmit);
refs.selectId = refs.formUpdate.elements.id;
refs.selectId.addEventListener('change', onSelectChange);
async function onSelectChange(event) {
  const id = refs.selectId.value;
  const room = await roomsAPI.getRoom(id);
  refs.formUpdate.elements.name.value = room.name;
  refs.formUpdate.elements.image.value = room.image;
}

async function onFormSubmit(e) {
  e.preventDefault();

  const data = new FormData(e.currentTarget);
  console.log(data);

  let objRoom = {};
  data.forEach((value, key) => {
    objRoom[key] = value;
  });

  await roomsAPI.updateRoom(objRoom.id, objRoom);
  showRooms();
}
