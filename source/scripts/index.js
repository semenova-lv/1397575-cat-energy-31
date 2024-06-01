/* в этот файл добавляет скрипты*/
const map = document.querySelector('.location__map');
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

map.classList.remove('location__map--nojs');
navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.remove('navigation--opened');
    navMain.classList.add('navigation--closed');
  }
});
