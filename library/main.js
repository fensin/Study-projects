const icon = document.querySelector('.header__profile-icon');
const burger = document.querySelector('#burger');
const modalProfile = document.querySelector('.ModalProfile_noAuth');
const header = document.querySelector('.header');
const substrate = document.querySelectorAll('.substrate');
const burgerItem = document.querySelectorAll('.navigation-item');
const burgerMenu = document.querySelector('.header__navigation');

//Backgroung changing
function subActivate () {               
  substrate.forEach(function (item) {
    item.classList.toggle('active');
  }
)}

//Burger menu open and close function
function burgerToggle() {
  header.classList.toggle('open');
  modalProfile.classList.remove('noAuth');
  subActivate();
} 

burger.addEventListener('click', burgerToggle);

//Background click event
substrate.forEach(function (item) {
  item.addEventListener('click', burgerToggle);
})

//Click on burger items
burgerItem.forEach (function (item) {
  item.addEventListener('click', burgerToggle);
})

//Click on profile icon
icon.addEventListener('click', () => {
  modalProfile.classList.toggle('noAuth');
  header.classList.remove('open');
  substrate.forEach(function (item) {
    item.classList.remove('active');
  })
})

