'use strict';

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  effect: 'coverflow',

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const yandexMapInit = () => {
  const myMap = new ymaps.Map("map", {
    center: [60.177343, 24.951565],
    zoom: 16
})
  const place = new ymaps.Placemark([60.177343, 24.951565], {
  hintContent: 'Hilton Hotel',
  balloonContent: 'Welcome to Hilton Hotel'
});
  myMap.geoObjects.add(place);
};



ymaps.ready(yandexMapInit);