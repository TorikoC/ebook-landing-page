let header = document.querySelector('header');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    if (!header.classList.contains('header--fixed')) {
      header.classList.toggle('header--fixed');
    }
  } else {
    if (header.classList.contains('header--fixed')) {
      header.classList.toggle('header--fixed');
    }
  }
});
