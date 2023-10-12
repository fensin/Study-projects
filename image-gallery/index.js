'use strict';

const client_id = 'cDQviJlolRiyhIQgknk55Bi6vD_frBdFn-zfKNjol1Y';
const container = document.querySelector('#gallery');
const searchInput = document.querySelector('#search');
const inputContainer = document.querySelector('.head__search');
const form = document.querySelector('form');

let inputData = 'gundam';

//Fetch from API
async function getImgs(inputData) {
  const url = `https://api.unsplash.com/search/photos?query=${inputData}&orientation=landscape&page=1&per_page=30&client_id=${client_id}`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (results.length > 0) {
    showImgs(results);
  } else {
    noImages();
  }
}

//Add images to page
function showImgs(results) {
  container.classList.remove('noImg');

  container.innerHTML = '';
  results.forEach((element) => {
    const img = document.createElement('img');
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('imgWrapper');
    img.src = element.urls.regular;
    container.appendChild(imgWrapper);
    imgWrapper.appendChild(img);
  });
}

getImgs(inputData);

//Search images in API
function searchImgs() {
  inputData = searchInput.value;
  getImgs(inputData);
}

const searchBtn = document.querySelector('#btnSearch');
const eraseBtn = document.querySelector('#btnErase');

//Show error page
function noImages() {
  container.classList.add('noImg');
  container.innerHTML = `<h4>There is no images on <span>${inputData}</span> request. Try search something else.</h4>`;
  const noSvgContainer = document.createElement('div');
  noSvgContainer.classList.add('noSvgContainer');
  container.appendChild(noSvgContainer);
}

//Click on search icon
searchBtn.addEventListener('click', () => {
  if (searchBtn.classList.contains('active')) {
    searchImgs();
  }
});

//Click on cross icon
eraseBtn.addEventListener('click', () => {
  searchInput.value = '';
  eraseBtn.classList.add('inactive');
});

//Cross and search icon toggle
searchInput.addEventListener('input', () => {
  //Check for only spaces in input
  const checkSpaces = searchInput.value.trim() == '';
  console.log(checkSpaces);
  if (checkSpaces) {
    searchInput.value = '';
  }

  if (searchInput.value.length >= 1) {
    eraseBtn.classList.remove('inactive');
    searchBtn.classList.replace('inactive', 'active');
  } else {
    eraseBtn.classList.add('inactive');
    searchBtn.classList.replace('active', 'inactive');
  }
});

//Search enter press
form.addEventListener('submit', (e) => {
  e.preventDefault();
  searchImgs();
});
