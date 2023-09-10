const slideImages = document.querySelectorAll('.carousel__images div');
const nextBtn = document.querySelector('.carret._right');
const prevBtn = document.querySelector('.carret._left');
const pagDots = document.querySelectorAll('.carousel button');
const carousel = document.querySelector('#carousel');

let counter = 0;
let percent = -20.3;

function blockBtn () {
  if (counter >= 4) {
    nextBtn.classList.add('btnInactive');
    nextBtn.setAttribute('disabled', '');
  } else if (counter < 1) {
    prevBtn.classList.add('btnInactive');
    prevBtn.setAttribute('disabled', '');
  }
  if (counter > 0 && counter < 4) {
    nextBtn.classList.remove('btnInactive');
    nextBtn.removeAttribute('disabled');
    prevBtn.classList.remove('btnInactive');
    prevBtn.removeAttribute('disabled');
  }
}

function nextSlide () {
  counter = counter + 1
  carousel.style.transform = `translateX(${counter * percent}%)`;
  pagDots[counter].classList.toggle('pag_active');
  pagDots[counter - 1].classList.toggle('pag_active');
  pagDots[counter].toggleAttribute('disabled');
  pagDots[counter - 1].toggleAttribute('disabled');
  blockBtn ();
}

function prevSlide () {
  counter = counter - 1;
  carousel.style.transform = `translateX(${counter * percent}%)`;
  pagDots[counter].classList.toggle('pag_active');
  pagDots[counter + 1].classList.toggle('pag_active');
  pagDots[counter].toggleAttribute('disabled');
  pagDots[counter + 1].toggleAttribute('disabled');
  blockBtn ();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

pagDots[0].addEventListener('click', () => {
  counter = 0;
  carousel.style.transform = `translateX(${counter * percent}%)`;
  pagDots[counter].classList.toggle('pag_active');
  pagDots[counter].toggleAttribute('disabled');
  pagDots[1].classList.remove('pag_active');
  pagDots[1].removeAttribute('disabled');
  pagDots[2].classList.remove('pag_active');
  pagDots[2].removeAttribute('disabled');
  pagDots[3].classList.remove('pag_active');
  pagDots[3].removeAttribute('disabled');
  pagDots[4].classList.remove('pag_active');
  pagDots[4].removeAttribute('disabled');
  blockBtn ();
})

pagDots[1].addEventListener('click', () => {
  counter = 1;
  carousel.style.transform = `translateX(${counter * percent}%)`;
  pagDots[counter].classList.toggle('pag_active');
  pagDots[counter].toggleAttribute('disabled');
  pagDots[0].classList.remove('pag_active');
  pagDots[0].removeAttribute('disabled');
  pagDots[2].classList.remove('pag_active');
  pagDots[2].removeAttribute('disabled');
  pagDots[3].classList.remove('pag_active');
  pagDots[3].removeAttribute('disabled');
  pagDots[4].classList.remove('pag_active');
  pagDots[4].removeAttribute('disabled');
  blockBtn ();
})

pagDots[2].addEventListener('click', () => {
  counter = 2;
  carousel.style.transform = `translateX(${counter * percent}%)`;
  pagDots[counter].classList.toggle('pag_active');
  pagDots[counter].toggleAttribute('disabled');
  pagDots[1].classList.remove('pag_active');
  pagDots[1].removeAttribute('disabled');
  pagDots[0].classList.remove('pag_active');
  pagDots[0].removeAttribute('disabled');
  pagDots[3].classList.remove('pag_active');
  pagDots[3].removeAttribute('disabled');
  pagDots[4].classList.remove('pag_active');
  pagDots[4].removeAttribute('disabled');
  blockBtn ();
})

pagDots[3].addEventListener('click', () => {
  counter = 3;
  carousel.style.transform = `translateX(${counter * percent}%)`;
  pagDots[counter].classList.toggle('pag_active');
  pagDots[counter].toggleAttribute('disabled');
  pagDots[1].classList.remove('pag_active');
  pagDots[1].removeAttribute('disabled');
  pagDots[2].classList.remove('pag_active');
  pagDots[2].removeAttribute('disabled');
  pagDots[0].classList.remove('pag_active');
  pagDots[0].removeAttribute('disabled');
  pagDots[4].classList.remove('pag_active');
  pagDots[4].removeAttribute('disabled');
  blockBtn ();
})

pagDots[4].addEventListener('click', () => {
  counter = 4;
  carousel.style.transform = `translateX(${counter * percent}%)`;
  pagDots[counter].classList.toggle('pag_active');
  pagDots[counter].toggleAttribute('disabled');
  pagDots[1].classList.remove('pag_active');
  pagDots[1].removeAttribute('disabled');
  pagDots[2].classList.remove('pag_active');
  pagDots[2].removeAttribute('disabled');
  pagDots[3].classList.remove('pag_active');
  pagDots[3].removeAttribute('disabled');
  pagDots[0].classList.remove('pag_active');
  pagDots[0].removeAttribute('disabled');
  blockBtn ();
})