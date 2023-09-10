const seasonPick = document.querySelectorAll('[data-tab]');
const bookCards = document.querySelectorAll('[data-tab-season]');
const favWrap = document.querySelector('.favorites__wrapper')

seasonPick.forEach(function (item) {
  item.addEventListener('click', function (){
    bookCards.forEach(function (item) {
      item.classList.add('hidden');
    })
    const bookCard = document.querySelector('#season' + this.dataset.tab);
    bookCard.classList.remove('hidden');
  });
})