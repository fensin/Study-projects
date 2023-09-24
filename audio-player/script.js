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
      src: 'assets/music/Tears For Fears - Everybody Wants To Rule The World.mp3',
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
  const timeFull = document.querySelector('.full');
  const timeCurrent = document.querySelector('.current');
  const track = document.querySelector('.track');

  let isPlay = false;
  let playNum = 0;
  let currTime = 0;

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


  //Update song
  function updateSong() {
    coverBack.style.backgroundImage = `url('${songs[playNum].background}')`;
    coverAlbum.style.backgroundImage = `url('${songs[playNum].cover}')`;

    nameSong.textContent = songs[playNum].song;
    nameBand.textContent = songs[playNum].band;

    timeFull.textContent = songs[playNum].duration;
  }

  //Next song
  function next() {
    playNum++;
    if (playNum >= songs.length) {
      playNum = 0;
    }
    updateSong();

    if (isPlay) {
      playAudio();
    }
  }

  btnNext.addEventListener('click', next);

  //Previous song
  function prev() {
    playNum--;
    if (playNum < 0) {
      playNum = 2;
    }
    updateSong();

    if (isPlay) {
      playAudio();
    }
  }

  btnPrev.addEventListener('click', prev);

  //Next song when ends
  audio.addEventListener('ended', () => {
    next();
  })

  //Time bar
  function updateTime (e) {
    const {duration, currentTime} = e.srcElement;
    const timePercent = (currentTime / duration) * 100;
    track.value = timePercent;
    timeCurrent.textContent = parseInt(audio.currentTime);
  }

  audio.addEventListener('timeupdate', updateTime);

  //Change time with bar
  function changeTime (e) {
    const width = this.clientWidth;
    const click = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (click / width) * duration;
  }

  track.addEventListener('click', changeTime)
})