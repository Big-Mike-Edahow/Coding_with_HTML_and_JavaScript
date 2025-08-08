// script.js

let ctx = gameCanvas.getContext("2d");

let x = 280;
let y = 400;
let speedX = 0;
let speedY = -8;
let batX = 280;
let score = 0;

drawBricks();
function drawBricks() {
  for (let a = 0; a < 5; a++) {
    for (let b = 0; b < 8; b++) {
      ctx.fillStyle = "#ff00" + (40 + a * 40).toString(16);
      ctx.fillRect(b * 80, 100 + a * 20, 79, 19);
    }
  }
}

let gameTimer = setInterval(mainLoop, 25);

function mainLoop() {
  ctx.clearRect(x, y, 15, 15);
  x += speedX;
  y += speedY;
  checkForHits();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x, y, 15, 15);

  if (x > 620 || x < 0) speedX = -speedX;
  if (y < 28) speedY = 8;
  if (y > 480) {
    gameOver();
  }

  ctx.clearRect(0, 460, 640, 20);
  ctx.fillStyle = "#cccccc";
  ctx.fillRect(batX - 60, 460, 120, 20);
}

function checkForHits() {
  let col = ctx.getImageData(x, y, 1, 1).data;
  if (y > 460 && Math.abs(batX - x) < 60) {
    speedY = -8;
    speedX = Math.round(0.15 * (x - batX));
  } else if (col[3] != 0) {
    pingMp3.currentTime = 0;
    pingMp3.play();
    let x0 = 80 * Math.floor(x / 80);
    let y0 = 20 * Math.floor(y / 20);
    ctx.clearRect(x0, y0, 79, 19);
    speedY = -speedY;
    score++;
    ctx.fillRect(0, 0, 640, 20);
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 2, 16);
  }
}

document.onmousemove = function() {
  batX = event.clientX;
};

function gameOver() {
  clearInterval(gameTimer);
  ctx.font = "80px Arial";
  ctx.fillText("Game Over!", 100, 250);
}
