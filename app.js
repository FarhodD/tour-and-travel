const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const btn = document.querySelector('.menu-btn')
const header__inner = document.querySelector('.header__inner')

btn.addEventListener('click', ()=>{
header__inner.classList.toggle('menu-open');
});