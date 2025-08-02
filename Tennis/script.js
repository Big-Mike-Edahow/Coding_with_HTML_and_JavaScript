// script.js

let x = 400;
let y = 200;
let speedX = 2;
let speedY = 2;
let batX = 0;

function moveBat(event) {
  batX = event.clientX;
  bat.style.left = batX + "px";
}

function moveBall() {
  x += speedX;
  y += speedY;
  ball.style.left = x + "px";
  ball.style.top = y + "px";

  if (x > 880) speedX = -2;
  if (x < 380) speedX = 2;
  if (y < 120) speedY = 2;
  if (y > 450 && Math.abs(batX - x) < 60) {
    speedY = -2;
  }
  if (y > 470) {
    alert("Game Over!");
    clearInterval(timer);
  }
}

let timer = setInterval(moveBall, 10);
