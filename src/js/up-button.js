//To-the-top button

const upBtn = document.querySelector('.up-button');

function checkScroll() {
  const scroll = window.scrollY;
  if (scroll >= 700) {
    upBtn.classList.remove('is-hidden');
  } else {
    upBtn.classList.add('is-hidden');
  }
}
window.addEventListener('scroll', checkScroll);