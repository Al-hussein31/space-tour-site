"use strict";
const sliders = function() {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");
    let currentSlide = 0;
    const maxSlide = slides.length;
    // Functions
    const createDots = function() {
        slides.forEach((_, i)=>{
            dotsContainer.insertAdjacentHTML("beforeend", `
      <button class="dots__dot" data-slide="${i}"></button>
      `);
        });
    };
    const activateDots = function(s) {
        document.querySelectorAll(".dots__dot").forEach((dot)=>{
            dot.classList.remove("dots__dot--active");
        });
        document.querySelector(`.dots__dot[data-slide="${s}"]`).classList.add("dots__dot--active");
    };
    const goToSlide = function(slide) {
        slides.forEach((s, i)=>{
            s.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
    };
    const nextSlide = function() {
        if (currentSlide === maxSlide - 1) currentSlide = 0;
        else currentSlide++;
        goToSlide(currentSlide);
        activateDots(currentSlide);
    };
    const prevSlide = function() {
        if (currentSlide === 0) currentSlide = maxSlide - 1;
        else currentSlide--;
        goToSlide(currentSlide);
        activateDots(currentSlide);
    };
    const init = function() {
        createDots();
        activateDots(0);
        goToSlide(0);
    };
    init();
    // Events Handlers
    document.addEventListener("keydown", function(e) {
        console.log(e);
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
    });
    dotsContainer.addEventListener("click", function(e) {
        if (e.target.classList.contains("dots__dot")) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDots(slide);
        }
    });
};
sliders();

//# sourceMappingURL=crews.c4546ecb.js.map
