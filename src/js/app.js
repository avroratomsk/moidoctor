import * as functions from './modules/baseFunctions.js';

functions.isWebp();

// new VenoBox({
//   selector: '.my-image-links',
//   numeration: true,
//   infinigall: true,
//   share: true,
//   spinner: 'rotating-plane'
// });

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});

