// script.js

let ctx = gameCanvas.getContext("2d");

let x = 300,
  y = 50,
  pacmanX = 300,
  changeX = 0,
  score = 0;

let gameTimer = setInterval(mainLoop, 20);

function mainLoop() {
  ctx.clearRect(0, 0, 640, 480);
  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, 10, 30);
  ctx.drawImage(cupcake, x, y, 80, 80);
  y += 3;
  if (y > 480) {
    y = -80;
    x = Math.random() * 600;
  }
  ctx.drawImage(pacman, pacmanX, 400, 80, 80);
  pacmanX += changeX;
  checkForHits();
}

document.onkeydown = keyPressed;

function keyPressed(e) {
  let k = e.keyCode;

  if (k == 37) {
    changeX = -4;
  }
  if (k == 39) {
    changeX = 4;
  }
}

function checkForHits() {
  if (Math.abs(400 - y) < 60 && Math.abs(pacmanX - x) < 60) {
    score += 1;
    y = -80;
    x = Math.random() * 600;
  }
}

setTimeout(gameOver, 30000);

function gameOver() {
  clearInterval(gameTimer);
  ctx.font = "80px Arial";
  ctx.fillText("Game Over!", 100, 250);
}
