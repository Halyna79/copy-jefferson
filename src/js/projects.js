// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll(".projects-slide");
//     const prevBtn = document.querySelector(".prev-slide");
//     const nextBtn = document.querySelector(".next-slide");
//     let currentIndex = 0;

//     function updateSlides() {
//         slides.forEach((slide, index) => {
//             slide.classList.toggle('active', index === currentIndex);
//         });

//         prevBtn.classList.toggle('disabled', currentIndex === 0);
//         nextBtn.classList.toggle('disabled', currentIndex === slides.length - 1);
//     }
    
//     nextBtn.addEventListener('click', () => {
//         if (!nextBtn.classList.contains("disabled") && currentIndex < slides.length - 1) {
//             currentIndex++;
//             updateSlides();
//         }
//     });
//     prevBtn.addEventListener('click', () => {
//         if (!prevBtn.classList.contains("disabled") && currentIndex > 0) {
//             currentIndex--;
//             updateSlides();
//         }
//     });
//     updateSlides();
// });
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Ініціалізація Swiper
const swiper = new Swiper('.projects-slider', {
  loop: true, // Безкінечний скрол
  slidesPerView: 1, // Скільки слайдів показувати
  spaceBetween: 20, // Відстань між слайдами
  navigation: {
    nextEl: '.next-slide', // Кнопка "вперед"
    prevEl: '.prev-slide', // Кнопка "назад"
  },
  keyboard: {
    enabled: true, // Дозволити керування з клавіатури
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // 2 слайди на планшетах
    },
    1440: {
      slidesPerView: 3, // 3 слайди на великих екранах
    },
  },
});