"use strict";

document.addEventListener('DOMContentLoaded', () => {
  
  // Modal
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modalDialog = document.querySelector('.modal'),
        modalOverlay = document.querySelector('.overlay'),
        modalClose = document.querySelector('[data-close]');

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalDialog.classList.toggle('show');
      modalOverlay.classList.toggle('show');
      document.body.style.overflow='hidden';
    });
  });

  function closeModal() {
    modalDialog.classList.toggle('show');
    modalOverlay.classList.toggle('show');
    document.body.style.overflow='';
  }

  modalClose.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if(e.target === modalOverlay) {
      closeModal();
    }
  });

  // Smooth scroll pagetop

  const pagetopBtn = document.querySelector('.pagetop');

  window.addEventListener('scroll', () => {

    if (document.documentElement.scrollTop > 1200) {
      pagetopBtn.style.visibility='visible';
      pagetopBtn.style.opacity = '1';
    } else {
      pagetopBtn.style.visibility='';
      pagetopBtn.style.opacity = '';
    }

  });

  pagetopBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#top').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  // webp

  // Определяем, поддерживает или нет браузер формат изображений webp
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});


});