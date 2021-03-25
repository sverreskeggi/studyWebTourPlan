'use strict';

const navBar = document.querySelector('.navbar-bottom'),
  menuButton = document.querySelector('.menu-button'),
  body = document.querySelector('body'),
  navBarBottom = document.querySelector('.navbar-bottom');

  menuButton.addEventListener('click', () => {
    body.classList.toggle('scroll-hidden');
    navBar.classList.toggle('navbar-bottom--visible');
    navBarBottom.classList.toggle('scroll-modal-on');
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