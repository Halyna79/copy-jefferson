import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function initProjectSwiper(selector) {
  const container = document.querySelector(selector);
  if (!container) return; // Якщо контейнера немає, функція не виконується

  new Swiper(container, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: `${selector} .next-slide`,
      prevEl: `${selector} .prev-slide`,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  });
}

// Викликаємо функцію для ініціалізації Swiper на секції projects
initProjectSwiper('.projects-slider');

