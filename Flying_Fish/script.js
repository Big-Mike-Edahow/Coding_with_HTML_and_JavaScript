// script.js

let ctx = gameCanvas.getContext("2d");

let x = 640,
  y = -160,
  fishY = 220,
  ySpeed = 0,
  score = 0;

function mainLoop() {
  ctx.clearRect(0, 0, 640, 480);
  ctx.drawImage(pipes, x, y, 80, 800);
  x += -2;
  checkHitPipe();
  if (x < -80) {
    x = 640;
    y = Math.random() * -320;
    score++;
  }
  ctx.drawImage(fish, 30, fishY, 80, 80);
  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, 10, 30);
  ySpeed += 0.02;
  fishY += ySpeed;
}

let gameTimer = setInterval(mainLoop, 10);

document.onkeydown = () => {
  ySpeed = -2;
};

function checkHitPipe() {
  if (x < 70) {
    if (fishY - y < 270 || fishY - y > 450) {
      clearInterval(gameTimer);
      ctx.font = "80px Arial";
      ctx.fillText("Game Over!", 100, 250);
    }
  }
}
