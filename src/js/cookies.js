import Cookies from "js-cookie";

const COOKIE_NAME = 'acceptCookies'
const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

if (!Cookies.get(COOKIE_NAME)) {
  document.addEventListener("DOMContentLoaded", () => {
    const cookiesWindow = document.querySelector('.cookies-popup');
    const overlay = document.querySelector('.overlay');
    const acceptBtn = document.querySelector('.accept');
    const declineBtn = document.querySelector('.decline');

    setTimeout(() => {
      cookiesWindow.classList.add('show-cookies-popup');
      overlay.classList.add('show-overlay');
    }, 1000);

    const handleAddCookie = () => {
      cookiesWindow.classList.remove('show-cookies-popup');
      overlay.classList.remove("show-overlay");
      Cookies.set(COOKIE_NAME, true, { expires });
    }
    const handleRemoveCookie = () => {
      cookiesWindow.classList.remove('show-cookies-popup');
      overlay.classList.remove("show-overlay");
      Cookies.set(COOKIE_NAME, false, { expires });
    }

    acceptBtn.addEventListener('click', handleAddCookie);
    declineBtn.addEventListener('click', handleRemoveCookie);
});
}