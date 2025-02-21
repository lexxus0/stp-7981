const burgerBtn = document.querySelector('.burger-btn');
const menuWindow = document.querySelector('.menu-window');
const menuCloseBtn = document.querySelector('.menu-close-btn');

function openMenu() {
  menuWindow.classList.add('is-open');
}
function closeMenu() {
  menuWindow.classList.remove('is-open');
}
function toggleMenu() {
  menuWindow.classList.toggle('is-open');
}

burgerBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', closeMenu);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuWindow.classList.contains('is-open')) {
    closeMenu();
  }
});

document.addEventListener('click', e => {
  const click = e.composedPath().includes(menuWindow);
  if (click) {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1200) {
    closeMenu();
  }
});
