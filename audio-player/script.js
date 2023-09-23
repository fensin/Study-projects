const btnPlay = document.querySelector('.btn.play');
const btnPrev = document.querySelector('btn.prev');
const btnNext = document.querySelector('btn.next');

let isPlaying = 0;
let currentSong = 0;

const songs = [
  {
    artist: 'The Cure';
    song: 'Lovesong';
    src: '/assets/music/The Cure - Lovesong.mp3';
    cover: '/audio-player/assets/images/CureCover.jpg';
    background: '';
    duration: '3:28';
  }
]