// script.js

const audioElement = document.getElementById("beep");
audioElement.volume = 0.1; // Sets the volume to 10%

let ctx = gameCanvas.getContext("2d");

let x = [640, 640, 640, 640, 640, 640, 640,];
let y = [0, 50, 100, 200, 300, 350, 400];
let speed = [-2, -1, -3, -1.5, -2.5, -3.5, -2];
let subY = 300,
  changeY = 0,
  score = 0;

let gameTimer = setInterval(mainLoop, 20);

function mainLoop() {
  ctx.clearRect(0, 0, 640, 480);
  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, 10, 30);
  for (let n = 0; n < 7; n++) {
    ctx.drawImage(fish, x[n], y[n], 40, 40);
    x[n] += speed[n];
    checkForHits(n);
    if (x[n] < -80) {
      x[n] = 640; 
      y[n] = Math.random() * 400;
    }
  }
  ctx.drawImage(sub, 20, subY, 80, 80);
  subY += changeY;
}

document.onkeydown = keyPressed;

function keyPressed(e) {
  let k = e.keyCode;
  if (k == 38) {
    changeY = -4;
  }
  if (k == 40) {
    changeY = 4;
  }
}

function checkForHits(n) {
  if ((Math.abs(x[n]) < 50) &&
        (Math.abs(subY - y[n]) < 50)) {
    score += 1;
    x[n] = 640;
    y[n] = Math.random() * 400;
    beep.play();
  }
}

setTimeout(gameOver, 60000);

function gameOver() {
  clearInterval(gameTimer);
  ctx.font = "80px Arial";
  ctx.fillText("Game Over!", 100, 250);
}
