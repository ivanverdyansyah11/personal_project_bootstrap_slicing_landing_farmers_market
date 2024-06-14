AOS.init({
    once: true
});

$('.button-hamburger').on('click', function() {
    $(this).toggleClass('active')
    $('.topbar').toggleClass('active')
})

const swiper = new Swiper(".swiperHero", {
    pagination: {
        el: ".swiper-pagination",
    },
});

const swiperPartner = new Swiper(".swiperPartner", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination-partner",
    },
});