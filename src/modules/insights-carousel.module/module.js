const swiper = new Swiper('.insights-swiper', {
  speed: 300,
  spaceBetween: 20,
  loop: true,
  grabCursor: false,
  perMove:1,
  autoPlay: {
    delay: 3000
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    enabled: true,
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  centerSlides: true,
  pagination:{
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable:true
  },
  slidesPerView: 1
});