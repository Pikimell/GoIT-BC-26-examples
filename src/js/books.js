import '../css/common';
import '../css/book';
import { BooksAPI } from './modules/booksAPI';
import cardBooks from '../templates/card-books';
import cardBook from '../templates/card-book';
function callback() {
  console.log('CALLBACK');
}

const booksApi = new BooksAPI(0, 5);

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  bookList: document.querySelector('.js-articl-list'),
  deleteForm: document.querySelector('.js-delete-form'),
};

refs.btnLoadMore.addEventListener('click', onBtnLoadClick);
refs.createForm.addEventListener('submit', onCreateForm);
refs.resetForm.addEventListener('submit', onResetForm);
refs.updateForm.addEventListener('submit', onUpdateForm);
refs.deleteForm.addEventListener('submit', onDeleteForm);

async function onCreateForm(event) {
  event.preventDefault();

  let formData = new FormData(refs.createForm);

  let book = {};
  formData.forEach((value, key) => {
    book[key.replace('book', '').toLowerCase()] = value;
  });

  const createdBook = await booksApi.createBook(book);
  refs.bookList.insertAdjacentHTML('beforeend', cardBook(createdBook));
  refs.createForm.reset();
}

async function onResetForm(event) {
  event.preventDefault();

  let formData = new FormData(refs.resetForm);

  let book = {};
  formData.forEach((value, key) => {
    book[key.replace('book', '').toLowerCase()] = value;
  });
  let id = book.id;
  delete book.id;

  await booksApi.replaceBook(book, id);
  const books = await booksApi.getBooks();
  renderBooks(books);

  refs.resetForm.reset();
}

async function onUpdateForm(event) {
  event.preventDefault();
  let book = {};
  let formData = new FormData(refs.updateForm);
  formData.forEach((value, key) => {
    if (value.trim().length > 0)
      book[key.replace('book', '').toLowerCase()] = value;
  });
  let id = book.id;
  delete book.id;

  await booksApi.updateBook(book, id);
  const books = await booksApi.getBooks();
  renderBooks(books);

  refs.updateForm.reset();
}

async function onDeleteForm(event) {
  event.preventDefault();
  let id = refs.deleteForm.elements.bookId.value;
  const delateBook = await booksApi.deleteBook(id);
  const books = await booksApi.getBooks();
  renderBooks(books);
  console.log(`Book ${delateBook.title} deleted!`);
}

async function onBtnLoadClick(event) {
  const books = await booksApi.getBooks();
  renderBooks(books);
}

function renderBooks(books) {
  refs.bookList.innerHTML = cardBooks(books);
}

booksApi.getLimitBooks();
