const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

//global game variables
let lives = 2;

let dx = 2;
let dy = -2;
let _isPlaying = false;

//paddle draw

let paddleWidth = 50;
let paddleHeight = 5;
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
let ballX = canvas.width / 2 + paddleWidth / 2;
let ballY = canvas.height - paddleHeight - 8;
let ballWidth = 5;
let ballHeight = 5;

function drawBall() {
  context.beginPath();
  context.rect(ballX, ballY, ballWidth, ballHeight);
  context.fillStyle = '#F87171';
  context.fill();
  context.closePath();
}

function shootBall() {
  _isPlaying = true;
  const req = requestAnimationFrame(shootBall);
  if (ballX >= canvas.width - ballWidth || ballX <= ballWidth) {
    dx = -dx;
  }
  if (ballY <= ballHeight) {
    dy = -dy;
  } else if (ballY > canvas.height - paddleHeight - 7) {
    if (ballX > paddleX && ballX < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lose();
      cancelAnimationFrame(req);
    }
  }
  ballX += dx;
  ballY += dy;
}

function lose() {
  _isPlaying = false;
  paddleX = canvas.width / 2;
  ballX = canvas.width / 2 + paddleWidth / 2;
  ballY = canvas.height - paddleHeight - 8;
  dx = 2;
  dy = -2;
  lives--;
  if (lives < 0) {
    gameOver();
  }
}

//draw all
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  createBricks();
  drawBricks();
  requestAnimationFrame(draw);
}

//control mouse
function controlMouse(e) {
  let canvasX = e.clientX - canvas.offsetLeft;
  if (canvasX > paddleWidth && canvasX < canvas.width) {
    paddleX = canvasX - paddleWidth;
    if (!_isPlaying) {
      ballX = paddleX + paddleWidth / 2;
      canvas.addEventListener('click', shootBall);
    } else if (_isPlaying) {
      canvas.removeEventListener('click', shootBall);
    }
  }
}

//bricks

let bricks = [];

const brickRow = 6;
const brickColumn = 12;
const brickWidth = 70;
const brickHeight = 10;
const brickX = 20;
const brickY = 50;

function createBricks() {
  for (let c = 0; c < brickColumn; c++) {
    for (let r = 0; r < brickRow; r++) {
      let brick = {
        x: brickX + c * brickWidth + c * 10,
        y: brickY + r * brickHeight + r * 10,
        width: brickWidth,
        height: brickHeight,
        display: true,
      };
      bricks.push(brick);
      if (brick.display) {
        if (
          ballX > brick.x &&
          ballX < brick.x + brickWidth &&
          ballY > brick.y &&
          ballY < brick.y + brickHeight
        ) {
          dy = -dy;
          brick.display = false;
        }
      }
    }
  }
}

function drawBricks() {
  for (let i = 0; i < bricks.length; i++) {
    let brick = bricks[i];
    if (brick.display) {
      context.beginPath();
      context.fillStyle = '#4ADE80';
      context.fillRect(brick.x, brick.y, brick.width, brick.height);
      context.fill();
      context.closePath();
    }
  }
}

requestAnimationFrame(draw);
document.addEventListener('mousemove', controlMouse);
