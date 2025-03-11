document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".projects-slide");
    const prevBtn = document.querySelector(".projects-slider-btn.prev");
    const nextBtn = document.querySelector(".projects-slider-btn.next");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
    showSlide(currentIndex);
});