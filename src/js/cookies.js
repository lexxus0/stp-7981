import Cookies from "js-cookie";

const COOKIE_NAME = 'visit'
const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

if (!Cookies.get(COOKIE_NAME)) {
  document.addEventListener("DOMContentLoaded", () => {
    const cookiesWindow = document.querySelector('.cookies-popup');
    const overlay = document.querySelector(".overlay");

    setTimeout(() => {
      cookiesWindow.classList.add("show-cookies-popup");
      overlay.classList.add("show-overlay");
    }, 1000);

    document.querySelectorAll(".decline, .accept").forEach((button) => {
      const handleClick = () => {
        cookiesWindow.classList.remove('show-cookies-popup');
        overlay.classList.remove("show-overlay");
        Cookies.set(COOKIE_NAME, true, {expires})}
      button.addEventListener("click", handleClick);
    });
});
}