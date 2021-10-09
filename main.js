const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');

buttonStart.addEventListener("click", Start);
buttonStop.addEventListener("click", Stop);

let isActive = false;

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackgroundBody() {
  document.body.style.backgroundColor = colors[random(0, colors.length - 1)];
}
let interval = 0;

function Start() {
  if (!isActive) {
    interval = setInterval(changeBackgroundBody, 500);
    isActive = true;
  }
  return;
}

function Stop() {
  clearInterval(interval);
  isActive = false;
}
