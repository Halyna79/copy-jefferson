document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".projects-slide");
    const prevBtn = document.querySelector(".prev-slide");
    const nextBtn = document.querySelector(".next-slide");
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex === slides.length - 1);
    }
    updateSlides();
    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlides();
        }
    });
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlides();
        }
    });
})