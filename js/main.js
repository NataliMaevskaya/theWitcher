let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        540: {
          slidesPerView: 2,
          spaceBetween: 40
        }
    }
});

const menuButton = document.querySelector ('.menu-button'),
    menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
});

const button = document.querySelector('.button');
button.classList.add('animated', 'fadeInRight');
