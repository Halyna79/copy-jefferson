document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".projects-slide");
    const prevBtn = document.querySelector(".prev-slide");
    const nextBtn = document.querySelector(".next-slide");
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });

        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex === slides.length - 1);
    }
    
    nextBtn.addEventListener('click', () => {
        if (!nextBtn.classList.contains("disabled") && currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlides();
        }
    });
    prevBtn.addEventListener('click', () => {
        if (!prevBtn.classList.contains("disabled") && currentIndex > 0) {
            currentIndex--;
            updateSlides();
        }
    });
    updateSlides();
});