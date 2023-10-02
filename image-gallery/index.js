'use strict'

const client_id = 'cDQviJlolRiyhIQgknk55Bi6vD_frBdFn-zfKNjol1Y';
const container = document.querySelector('#gallery');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('.searchBtn');
const url = `https://api.unsplash.com/search/photos?query=summer&orientation=landscape&page=1&per_page=30&client_id=${client_id}`

async function getImgs() {
  const response = await fetch(url);
  const data = await response.json();
  
  const results = data.results;
  
  console.log(results);
  console.log(response);
  console.log(data);

  showImgs(results);
}



function showImgs(results) {
  results.forEach(element => {
    console.log(element.urls.regular)

    const img = document.createElement('img');
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('imgWrapper');
    img.src = element.urls.regular;
    container.appendChild(imgWrapper);
    imgWrapper.appendChild(img);
  });
}

getImgs();

