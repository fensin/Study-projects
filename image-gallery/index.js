'use strict'

const client_id = 'cDQviJlolRiyhIQgknk55Bi6vD_frBdFn-zfKNjol1Y';
const container = document.querySelector('#gallery');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('.searchBtn');

let inputData = '';

async function getImgs(inputData) {
  const url = `https://api.unsplash.com/search/photos?query=${inputData}&orientation=landscape&page=1&per_page=30&client_id=${client_id}`

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  
  showImgs(results);
}

function showImgs(results) {
  container.innerHTML = '';
  results.forEach(element => {
    const img = document.createElement('img');
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('imgWrapper');
    img.src = element.urls.regular;
    container.appendChild(imgWrapper);
    imgWrapper.appendChild(img);
  });
}

searchImgs();

function searchImgs() {
  if (inputData === '') {
    inputData = 'gundam';
    getImgs(inputData);
  } else {
    inputData = searchInput.value;
    getImgs(inputData);
  }
  
  console.log(inputData);
}

searchBtn.addEventListener('click', searchImgs);