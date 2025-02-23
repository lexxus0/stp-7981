document.addEventListener("DOMContentLoaded", () => {
    const cookiesWindow = document.querySelector('.cookies-popup');
    const overlay = document.querySelector(".overlay");

    setTimeout(() => {
      cookiesWindow.classList.add("show-cookies-popup");
      overlay.classList.add("show-overlay");
    }, 1000);

    document.querySelectorAll(".decline, .accept").forEach((button) => {
      button.addEventListener("click", () => {
        cookiesWindow.classList.remove('show-cookies-popup');
        overlay.classList.remove("show-overlay");
      });
    });
});