const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

let dx = 2;
let dy = -2;
let _isPlaying = false;

//paddle draw

let paddleWidth = 20;
let paddleHeight = 8;
let paddleX = canvas.width / 2;
const paddleY = canvas.height - paddleHeight - 3;

//draw paddle
function drawPaddle() {
  context.beginPath();
  context.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  context.fillStyle = '#fff';
  context.fill();
  context.closePath();
  requestAnimationFrame(drawPaddle);
}

//draw ball
let ballX = canvas.width / 2;
let ballY = canvas.height - paddleHeight - 8;
let ballWidth = 5;
let ballHeight = 5;

function drawBall() {
  context.beginPath();
  context.rect(ballX, ballY, ballWidth, ballHeight);
  context.fillStyle = '#ff0000';
  context.fill();
  context.closePath();
}

function shootBall() {
  _isPlaying = true;
  const req = requestAnimationFrame(shootBall);
  if (ballX >= canvas.width - ballWidth || ballX <= ballWidth) {
    dx = -dx;
  }
  if (ballY <= ballWidth) {
    dy = -dy;
  } else if (ballY > canvas.height - paddleHeight - 7) {
    if (ballX > paddleX && ballX < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      _isPlaying = false;
      paddleX = canvas.width / 2;
      ballX = canvas.width / 2;
      ballY = canvas.height - paddleHeight - 8;
      cancelAnimationFrame(req);
      dx = 2;
      dy = -2;
    }
  }
  ballX += dx;
  ballY += dy;
}

function lose() {
  ballX;
}

//draw all
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
}

//control mouse
function controlMouse(e) {
  let canvasX = e.clientX - canvas.offsetLeft;
  if (canvasX > 0 && canvasX < canvas.width) {
    paddleX = canvasX - paddleWidth / 2;
    if (!_isPlaying) {
      ballX = paddleX + 8;
      canvas.addEventListener('click', shootBall);
    } else if (_isPlaying) {
      canvas.removeEventListener('click', shootBall);
    }
  }
}

setInterval(draw, 30);
document.addEventListener('mousemove', controlMouse);

/*
let _isPlaying = false;

//lives and score
let lives = 2;

//base and shift coordinates
let x = canvas.width / 2;
let y = canvas.height - 15;
let cx = 2;
let cy = -2;

//ball variables
let ballRadius = 5;

//draw ball function
function drawBall() {
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI * 2);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

//paddle variables
let paddleHeight = 10;
let paddleWidth = 35;
let paddleX = (canvas.width - paddleWidth) / 2;

//draw paddle
function drawPaddle() {
  context.beginPath();
  context.rect(
    paddleX,
    canvas.height - paddleHeight,
    paddleWidth,
    paddleHeight
  );
  context.fillStyle = '#0000FF';
  context.fill();
  context.closePath();
}

//move paddle with mouse
function controlMouse(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall();
  let canvasX = e.clientX - canvas.offsetLeft;
  if (canvasX > 0 && canvasX < canvas.width) {
    paddleX = canvasX - paddleWidth / 2;
    x = paddleX + 18;
  }
}

//walls collision
function wallsCollision() {
  if (x >= canvas.width - ballRadius || x <= ballRadius) {
    cx = -cx;
  }
  if (y <= ballRadius) {
    cy = -cy;
  } else if (y >= canvas.height) {
    lose();
  }
  x += cx;
  y += cy;
}

//lose when ball hit bottom
function lose() {
  if (lives > 0) {
    alert('GAME OVER!');
    lives--;
  }
}

//
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  wallsCollision();
  requestAnimationFrame(draw);
}

drawBall();
drawPaddle();
canvas.addEventListener('mousemove', controlMouse);
canvas.addEventListener('click', draw);
*/
