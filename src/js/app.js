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

const burgerBtn = document.querySelector('.burger');
 burgerBtn?.addEventListener('click', () => {
   const navElement = document.querySelector('.nav');
   navElement.classList.add('active');
 })

const closeBtn = document.querySelector('.close');
 closeBtn?.addEventListener('click', () => {
   const navElement = document.querySelector('.nav');
   navElement.classList.remove('active');
 })
