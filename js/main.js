$(document).ready(function (){
  'use strict';

  const navBar = document.querySelector('.navbar-bottom'),
    menuButton = document.querySelector('.menu-button'),
    body = document.querySelector('body'),
    navBarBottom = document.querySelector('.navbar-bottom');

  //JQ const
  const modalOverlay = $('.modal__overlay'),
      modalDialog = $('.modal__dialog'),
      buttonModal = $('.button-modal'),
      modalClose = $('.modal__close');

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
  

  // JQ Functions
const modalOpen = $('[data-toggle=modal]');

  function openModal() {
    const targetModal = $(this).attr('data-href');
    $(`#${targetModal}`).find('.modal__overlay').addClass('modal__overlay--visible');
    $(`#${targetModal}`).find('.modal__dialog').addClass('modal__dialog--visible');
  };

  function closeModal(e) {
    e.preventDefault();
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

  modalOpen.on('click', openModal);
  modalClose.on('click', closeModal);
});