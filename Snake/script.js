// script.js

let ctx = gameCanvas.getContext("2d");

let x = 240;
let y = 180;

drawBackground();
function drawBackground() {
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 40;
  ctx.strokeRect(0, 0, 640, 480);
}

let gameTimer = setInterval(mainLoop, 50);

function mainLoop() {
  ctx.fillStyle = "orange";
  ctx.fillRect(x, y, 9, 9);

  if (dir == 90) {
    x += 10;
  }
  if (dir == 180) {
    y += 10;
  }
  if (dir == -90) {
    x -= 10;
  }
  if (dir == 0) {
    y -= 10;
  }

  checkPixelColor();
  score++;

  ctx.fillRect(0, 0, 100, 20);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 2, 16);
}

function checkPixelColor() {
  let col = ctx.getImageData(x, y, 1, 1).data;
  if (col[3] != 0) {
    endMp3.play();
    clearInterval(gameTimer);
    ctx.fillStyle = "red";
    ctx.font = "80px Arial";
    ctx.fillText("Game Over!", 100, 250);
  }
}

document.onkeydown = handleKey;
function handleKey(e) {
  let k = e.keyCode;

  if (k == 38) {
    dir = 0;
  }
  if (k == 39) {
    dir = 90;
  }
  if (k == 40) {
    dir = 180;
  }
  if (k == 37) {
    dir = -90;
  }
  turnMp3.currentTime = 0;
  turnMp3.play();
}
