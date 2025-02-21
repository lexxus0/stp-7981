const cookiesAcceptBtn = document.querySelector('.accept');
const cookiesDeclineBtn = document.querySelector('.decline');
const cookiesWindow = document.querySelector('.cookies');

function closeCookiesWindow() {
  cookiesWindow.classList.add('closed');
}

cookiesAcceptBtn.addEventListener('click', closeCookiesWindow);
cookiesDeclineBtn.addEventListener('click', closeCookiesWindow);