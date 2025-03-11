import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// import Swiper from 'swiper/bundle';
// import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  const accordion = new Accordion('.about-me-info-list', {
    duration: 400,
    openOnInit: [0],
    showMultiple: true,

    onOpen: currentElement => {
      setTimeout(() => {
        updateIcon(currentElement, 'open');
      }, 0);
    },

    onClose: currentElement => {
      setTimeout(() => {
        updateIcon(currentElement, 'close');
      }, 0);
    },
  });

  function updateIcon(element, state) {
    const icon = element.querySelector('.accordion-close-icon use');
    if (icon) {
      icon.setAttribute(
        'href',
        state === 'open'
          ? '/img/icons.svg#icon-accordion-opensvg'
          : '/img/icons.svg#icon-accordion-closesvg'
      );
    }
  }

  document.querySelectorAll('.about-me-info-item').forEach((item, index) => {
    updateIcon(item, index === 0 ? 'open' : 'close');
  });
});

//! === swiper ===
// const aboutMeSwiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,
//   spaceBetween: 0,
//   navigation: {
//     nextEl: 'swiper-button-next',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   mousewheel: {
//     invert: true,
//   },
//   resizeObserver: true,
//   slidesPerView: 2,
//   breakpoints: {
//     768: { slidesPerView: 3 },
//     1440: { slidesPerView: 6 },
//   },
// });