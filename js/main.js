$(document).ready(function (){
  'use strict';

  const googleMap = `
    <iframe
      class="map__frame"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d731.6952820224184!2d-21.889675876456817!3d64.13966865680644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674b8cad6d071%3A0x9190a662ce80e764!2sHilton%20Reykjavik%20Nordica!5e0!3m2!1sru!2sru!4v1615843860219!5m2!1sru!2sru"
      width="347"
      height="213"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    </iframe>
  `;

  let frameCount = 0;
  $('.map').mouseover(function(){
    if (frameCount <= 0) {
      $('#imgThumb').remove();
      $('.map').append(googleMap);
      frameCount = 1;
    }
  });

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

  // validate
  $('.form').each(function(){
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: "Please specify your name",
          minlength :'name not short two symbols',
        },
        phone: "Please specify your phone",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
      },
      rules: {
        name: {
          minlength: '2',
        },
        phone: {
          minlength: '16',
        },
        email: {
          email: true,
        },
      },
    });
  });

  $('[name=phone]').mask('+0(000) 000-0000');

  modalOpen.on('click', openModal);
  modalClose.on('click', closeModal);

  AOS.init();
});
