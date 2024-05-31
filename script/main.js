// Бургер жи есть
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector(".header").classList.toggle("open")
  });
})
// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.querySelector(".header").classList.remove("open")
  }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  document.querySelector(".header").classList.remove("open")
});

// Слайдер
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 500,
  effect: 'slider', //slider, cards, coverflow, flip, fade, cube (способ перелистывания),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0, 
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 30, 
    },
    1231: {
      slidesPerView: 3,
    }
  }
});

// Аккордеон
let acc = document.querySelectorAll('.accordion');

acc.forEach(item => {
    item.addEventListener('click', e => {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
      return;
    }
    acc.forEach(e=>e.classList.remove('active'));
    e.target.classList.add('active');
  });
});