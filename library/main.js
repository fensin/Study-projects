const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');
const CAROUSEL = document.querySelector('#carousel');

const PAG_BTN1 = document.querySelector('#pag-btn1');
const PAG_BTN2 = document.querySelector('#pag-btn2');
const PAG_BTN3 = document.querySelector('#pag-btn3');
const PAG_BTN4 = document.querySelector('#pag-btn4');
const PAG_BTN5 = document.querySelector('#pag-btn5');

const PAG_CIRC1 = document.querySelector('#carousel__circle1');
const PAG_CIRC2 = document.querySelector('#carousel__circle2');
const PAG_CIRC3 = document.querySelector('#carousel__circle3');
const PAG_CIRC4 = document.querySelector('#carousel__circle4');
const PAG_CIRC5 = document.querySelector('#carousel__circle5');

const inlineStyles = CAROUSEL.style;

PAG_BTN1.addEventListener('click', () => {
  //CAROUSEL.classList.replace('transition-right', 'transition-left')//
  PAG_CIRC1.classList.add('pag_active')
  PAG_CIRC2.classList.remove('pag_active')
  PAG_CIRC3.classList.remove('pag_active')
  PAG_CIRC4.classList.remove('pag_active')
  PAG_CIRC5.classList.remove('pag_active')
  CAROUSEL.style.cssText = 'transform: translateX(0)'
});


PAG_BTN2.addEventListener('click', () => {
  //CAROUSEL.classList.add('transition-right')//
  PAG_CIRC2.classList.add('pag_active')
  PAG_CIRC1.classList.remove('pag_active')
  PAG_CIRC3.classList.remove('pag_active')
  PAG_CIRC4.classList.remove('pag_active')
  PAG_CIRC5.classList.remove('pag_active')
  CAROUSEL.style.cssText = 'transform: translateX(-20.3%)'
});

PAG_BTN3.addEventListener('click', () => {
  //CAROUSEL.classList.add('transition-right')//
  PAG_CIRC3.classList.add('pag_active')
  PAG_CIRC1.classList.remove('pag_active')
  PAG_CIRC2.classList.remove('pag_active')
  PAG_CIRC4.classList.remove('pag_active')
  PAG_CIRC5.classList.remove('pag_active')
  CAROUSEL.style.cssText = 'transform: translateX(-40.3%)'
});

PAG_BTN4.addEventListener('click', () => {
  //CAROUSEL.classList.add('transition-right')//
  PAG_CIRC4.classList.add('pag_active')
  PAG_CIRC1.classList.remove('pag_active')
  PAG_CIRC2.classList.remove('pag_active')
  PAG_CIRC3.classList.remove('pag_active')
  PAG_CIRC5.classList.remove('pag_active')
  CAROUSEL.style.cssText = 'transform: translateX(-60.3%)'
});

PAG_BTN5.addEventListener('click', () => {
  //CAROUSEL.classList.add('transition-right')//
  PAG_CIRC5.classList.add('pag_active')
  PAG_CIRC1.classList.remove('pag_active')
  PAG_CIRC2.classList.remove('pag_active')
  PAG_CIRC3.classList.remove('pag_active')
  PAG_CIRC4.classList.remove('pag_active')
  CAROUSEL.style.cssText = 'transform: translateX(-80.3%)'
});

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("burger").addEventListener("click",function()
  {
    document.querySelector(".header").classList.toggle("open")
  })
})



