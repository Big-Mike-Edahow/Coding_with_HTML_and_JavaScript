// script.js

let ctx = gameCanvas.getContext("2d");

let x = [600, 600, 600, 600, 600];
let y = [0, 100, 200, 300, 400];
let speed = [-1, -2, -0.5, -1.2, -1.8];
let biplaneY = 200;
let changeY = 0;
let score = 0;

let gameTimer = setInterval(mainLoop, 20);

function mainLoop() {
  moveClouds();
  moveBiplane();
}

function moveClouds() {
  ctx.clearRect(0, 0, 640, 480);
  for (let n = 0; n < 5; n++) {
    ctx.drawImage(cloud, x[n], y[n], 80, 80);
    x[n] += speed[n];
    checkForHits(n);
    if (x[n] < -80) {
      x[n] = 640;
      y[n] = Math.random() * 400;
    }
  }
}

function moveBiplane() {
  ctx.drawImage(biplane, 20, biplaneY, 80, 80);
  biplaneY += changeY;
  score += 1;
  ctx.fillStyle = "red";
  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, 10, 30);
  if (biplaneY < 0 || biplaneY > 400) {
    changeY = 0;
  }
}

document.onkeydown = keyPressed;
function keyPressed(e) {
  let k = e.keyCode;

  if (k == 38) {
    changeY = -3;
  }
  if (k == 40) {
    changeY = 3;
  }
}

function checkForHits(n) {
  if (Math.abs(x[n] < 50) && Math.abs(biplaneY - y[n]) < 50) {
    clearInterval(gameTimer);
    ctx.font = "80px Arial";
    ctx.fillText("Game Over!", 100, 250);
  }
}
