import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

async function fetchReviews() {
  try {
    const { data } = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return data;
  } catch (error) {
    console.error('Error: ', error);
  }
}

function renderReviews(cards) {
  return cards
    .map(({ _id, author, avatar_url, review }) => {
      return `
		<li class="swiper-slide review-card">
		  <img src="${avatar_url}" alt="${author}"/>
			<div class="review-info">
			  <h4>${author}</h4>
				<p>${review}</p>
			</div>
		</li>
		`;
    })
    .join('');
}

const reviewsContainer = document.querySelector('.reviews-container');
const reviewsList = document.querySelector('.reviews-list');
const notFoundMes = document.querySelector('.reviews-error');
const btnPrev = document.querySelector('.reviews-button-prev');
const btnNext = document.querySelector('.reviews-button-next');
const swiperConteiner = document.querySelector('.reviews-can-see');

let isError = false;

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const result = await fetchReviews();

    if (!result || result.length === 0) {
      notFoundMes.classList.remove('hidden');
      notFoundMes.classList.add('css-err-mes');
      btnNext.setAttribute('disabled', 'true');
      isError = true;
      return;
    }

    reviewsList.innerHTML = renderReviews(result);

    const swiper = new Swiper(swiperConteiner, {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 16,
      navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        invert: true,
      },
      resizeObserver: true,
      slidesPerView: 1,
      breakpoints: {
        768: { slidesPerView: 2 },
        1440: { slidesPerView: 4 },
      },
    });

    function updateButtonSlider() {
      btnPrev.toggleAttribute('disabled', swiper.isBeginning);
      btnNext.toggleAttribute('disabled', swiper.isEnd);
    }

    swiper.on('slideChange', updateButtonSlider);
    updateButtonSlider();
  } catch (error) {
    isError = true;
    console.error(error);
  }
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (isError && entry.isIntersecting) {
        iziToast.error({
          title: 'Error',
          message: 'No feedback data about reviews. We are solving the problem',
          position: 'topRight',
        });
      }
    });
  },
  { threshold: 0.2 }
);

observer.observe(reviewsContainer);
