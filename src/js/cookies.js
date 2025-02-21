const cookiesBtn = document.querySelector('.cookies-popup-btn');
const menuWindow = document.querySelector('.menu-window');

function closeCookiesWindow() {
  menuWindow.classList.remove('active');
}

cookiesBtn.addEventListener('click', closeCookiesWindow);