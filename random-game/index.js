const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;
let cx = 2;
let cy = -2;
let ballRds = 5;

function drawBall() {
  context.beginPath();
  context.arc(x, y, ballRds, 0, Math.PI * 2);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x >= canvas.width - ballRds || x <= ballRds) {
    cx = -cx;
  }

  if (y <= 0 + ballRds) {
    cy = -cy;
  }

  x += cx;
  y += cy;
}

setInterval(draw, 50);
