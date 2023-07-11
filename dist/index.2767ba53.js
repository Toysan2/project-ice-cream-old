// Slider z automatyczną zmianą zdjęć
var photoSlider = new Swiper(".photo-slider .swiper-container", {
    effect: "fade",
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000
    },
    speed: 2000
});
// Slider z opiniami
const swiper = new Swiper(".opinion-slider", {
    slidesPerView: 1,
    direction: "horizontal",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

//# sourceMappingURL=index.2767ba53.js.map
