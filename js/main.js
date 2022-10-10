let mybutton = document.getElementById("btn-scroll-top");
let navigation = document.getElementById("js-navbar");
let menuClose = document.getElementById("js-close-menu");
let body = document.querySelector("body");

// Video autoplay
let videoPromo = document.getElementById("video-promo");
videoPromo.autoplay = true;
videoPromo.load();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function openMenu() {
  navigation.classList.add("is-active");
  body.classList.add("lock");
  menuClose.classList.add('is-active');
}

function closeMenu() {
  navigation.classList.remove("is-active");
  body.classList.remove("lock");
  menuClose.classList.remove('is-active');
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Slider for partners
document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper(".js-brand-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: ".js-brand-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.js-swiper-next-brand',
      prevEl: '.js-swiper-prev-brand'
    },
    breakpoints: {
      1400: {
        slidesPerView: 5,
        spaceBetween: 30,

      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,

      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
    },
  });

});

