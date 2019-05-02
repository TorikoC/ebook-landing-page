import 'normalize.css';

import './css/index.scss';

import './img/book.jpg';
import './img/logo.png';
import './img/logo-lg.png';

import './js/header';

window.onload = () => {
  let cm = document.querySelector('.comment__list');
  let one = document.querySelector('.index-1');
  let two = document.querySelector('.index-2');
  one.addEventListener('click', () => {
    one.classList.add('index--active');
    two.classList.remove('index--active');
    cm.classList.remove('comment__list--2');
  });
  two.addEventListener('click', () => {
    one.classList.remove('index--active');
    two.classList.add('index--active');
    cm.classList.add('comment__list--2');
  });
};
