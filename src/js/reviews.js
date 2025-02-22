import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

Swiper.use([Navigation, Pagination, Grid]);

const swiper = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 8,

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
      slidesPerView: 1,
      // spaceBetween: 24,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});
