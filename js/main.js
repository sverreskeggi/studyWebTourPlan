'use strict';

document.querySelector('.menu-button')
  .addEventListener('click', () => {
    document.querySelector('.navbar-bottom')
      .classList.toggle('navbar-bottom--visible');
})

const mainSlider = new Swiper('.hotel-slider', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: 'coverflow',
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const newsletterSlider = new Swiper('.reviews-slider', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});