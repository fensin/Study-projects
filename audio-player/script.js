document.addEventListener('DOMContentLoaded', function() {

  const songs = [
    {
      band: 'The Cure',
      song: 'Lovesong',
      src: 'assets/music/The Cure - Lovesong.mp3',
      cover: 'assets/images/CureCover.jpg',
      background: 'assets/images/Cure.jpg',
      duration: '3:28',
    },
    {
      band: 'Florence And The Machine',
      song: 'Dog Days Are Over',
      src: 'assets/music/Florence And The Machine - Dog Days Are Over.mp3',
      cover: 'assets/images/FlorenceCover.jpg',
      background: 'assets/images/Florence.jpg',
      duration: '4:12',
    },
    {
      band: 'Tears For Fears',
      song: 'Everybody Wants To Rule The World',
      src: 'assets/music/Tears For Fears- Everybody Wants To Rule The World.mp3',
      cover: 'assets/images/TearsCover.jpg',
      background: 'assets/images/Tears.jpg',
      duration: '4:11',
    },
  ]

  const audio = document.querySelector('#audio');
  const btnPlay = document.querySelector('#playPause');
  const coverBack = document.querySelector('body');
  const coverAlbum = document.querySelector('.player-container__cover');
  const btnPrev = document.querySelector('#prev');
  const btnNext = document.querySelector('#next');
  const nameSong = document.querySelector('.song');
  const nameBand = document.querySelector('.band');

  let isPlay = false;
  let playNum = 0;

  function playAudio()  {
    audio.src = songs[playNum].src;
    audio.play();
  }

  function playToggle() {
    btnPlay.classList.toggle('pause');
    btnPlay.classList.toggle('play');
  }

  //Playing and pausing
  btnPlay.addEventListener('click', () => {
    if (!isPlay) {
      playToggle();
      playAudio();
      isPlay = true;
    } else {
      playToggle();
      audio.pause();
      isPlay = false;
    } 
  })

  //Next song
  function next() {
    playNum++;
    if (playNum >= songs.length) {
      playNum = 0;
    }
    coverBack.style.backgroundImage = `url('${songs[playNum].background}')`;
    coverAlbum.style.backgroundImage = `url('${songs[playNum].cover}')`;

    //Song name and band
    nameSong.textContent = songs[playNum].song;
    nameBand.textContent = songs[playNum].band;
  }

  btnNext.addEventListener('click', next);

  //Previous song
  function prev() {
    playNum--;
    if (playNum < 0) {
      playNum = 2;
    }
    coverBack.style.backgroundImage = `url('${songs[playNum].background}')`;
    coverAlbum.style.backgroundImage = `url('${songs[playNum].cover}')`;

    //Song name and band
    nameSong.textContent = songs[playNum].song;
    nameBand.textContent = songs[playNum].band;
  }

  btnPrev.addEventListener('click', prev);

  
})