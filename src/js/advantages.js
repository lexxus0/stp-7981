import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

Swiper.use([Navigation, Pagination, Grid]);

const swiper = new Swiper('.swiper_adv', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 4,
      spaceBetween: 24,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});
