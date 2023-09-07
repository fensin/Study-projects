const icon = document.querySelector('.header__profile-icon');
const burger = document.querySelector('#burger');
const modalProfile = document.querySelector('.ModalProfile_noAuth');
const header = document.querySelector('.header');
const burgerBack = document.querySelector('.burger_back');
const burgerItem = document.querySelectorAll('.navigation-item');
const burgerMenu = document.querySelector('.header__navigation');

//Burger menu open and close function
function burgerToggle() {
  header.classList.toggle('open');
  modalProfile.classList.remove('profActive');
  backActivate();
} 

burger.addEventListener('click', burgerToggle);

//Backgroung changing
function backActivate () {               
  burgerBack.classList.toggle('active');
}

//Background click event
burgerBack.addEventListener('click', burgerToggle);

//Click on burger items
burgerItem.forEach (function (item) {
  item.addEventListener('click', burgerToggle);
})

//Click on profile icon
function profileToggle () {
  modalProfile.classList.toggle('profActive');
  header.classList.remove('open');
  burgerBack.classList.remove('active');
}

icon.addEventListener('click', profileToggle)

//LogIn modal
const btnLogIn = document.querySelector('#logIn');
const btnRegister = document.querySelector('#register');
const modalWrap = document.querySelector('#modalWrap');
const modalLog = document.querySelector('.log');
const modalReg = document.querySelector('.reg');
const modalCross = document.querySelectorAll('.modal__cross');
const lnkLogIn = document.querySelector('#lnkLog');
const lnkReg = document.querySelector('#lnkReg');

btnLogIn.addEventListener('click', () => {
  profileToggle();
  modalWrap.classList.toggle('modal_hidden');
  modalLog.classList.toggle('active');
})

function closeModals () {
  modalWrap.classList.add('modal_hidden');
  modalLog.classList.remove('active');
  modalReg.classList.remove('active');
}

modalCross.forEach (function (item) {
  item.addEventListener('click', () => {
    closeModals()
  })
})

btnRegister.addEventListener('click', () => {
  profileToggle();
  modalWrap.classList.toggle('modal_hidden');
  modalReg.classList.add('active');
})

function backClose (e) {
  const click = e.composedPath().includes(modalLog);
  const click2 = e.composedPath().includes(modalReg);
  if (click == false && click2 == false) {
    closeModals()
  }
}

modalWrap.addEventListener('click', backClose);

lnkReg.addEventListener('click', () => {
  modalLog.classList.remove('active');
  modalReg.classList.add('active');
})

lnkLogIn.addEventListener('click', () => {
  modalReg.classList.remove('active');
  modalLog.classList.add('active');
})