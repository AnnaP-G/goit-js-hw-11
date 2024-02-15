import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formElem: document.querySelector('.form'),
  formInput: document.querySelector('.form-input'),
  imgElem: document.querySelector('.container-gallery'),
}

refs.formElem.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchQuery = e.target.elements.query.value.trim();

  searchImg(searchQuery);
})

function searchImg(queryImg) {
  const BASE_URL = 'https://pixabay.com/api/';
  const PARAMS = `?q=${queryImg}`;
  const url = BASE_URL + PARAMS;

  const options = {
    key: '42275795-67b08ec4cba837c0f5cc84374',
    q: queryImg,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  }
  return fetch(url, options).then(res => res.json());
}

