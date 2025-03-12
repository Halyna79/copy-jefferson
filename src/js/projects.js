import Swiper from 'swiper/bundle';
import 'swiper/css';

const projectSwiper = document.querySelector('.project-swiper');
const swiper = new Swiper(projectSwiper, {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: '.button-swipe.next',
    prevEl: '.button-swipe.back',
  },
});

const slides = document.querySelectorAll('.swiper-slide');

function updateActiveSlide() {
 
  slides.forEach(slide => slide.querySelector('.projects-container').classList.remove('active'));
  

  const activeSlide = slides[swiper.activeIndex];
  if (activeSlide) {
    activeSlide.querySelector('.projects-container').classList.add('active');
  }
}

swiper.on('slideChange', updateActiveSlide);


updateActiveSlide();

// const nextBtn = document.querySelector('.button-swipe.next');
// const backBtn = document.querySelector('.button-swipe.back');

// // Функція для оновлення активності кнопок
// function updateNavigationButtons() {
//     nextBtn.classList.toggle('disabled', swiper.isEnd);
//     backBtn.classList.toggle('disabled', swiper.isBeginning);
// }

// // Додаємо обробник подій для зміни слайду
// swiper.on('slideChange', updateNavigationButtons);

// // Викликаємо функцію одразу після ініціалізації Swiper, щоб оновити стан кнопок
// updateNavigationButtons();
