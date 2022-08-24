import '../css/common';
import '../css/user';
import { UsersApi } from './modules/usersAPI';
import cardUsers from '../templates/card-user';

const usersApi = new UsersApi();
const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  userList: document.querySelector('.js-articl-list'),
  deleteForm: document.querySelector('.js-delete-form'),
};

refs.btnLoadMore.addEventListener('click', onBtnLoadClick);

async function onBtnLoadClick(e) {
  const users = await usersApi.getUsers();
  refs.userList.innerHTML = cardUsers(users);
}
