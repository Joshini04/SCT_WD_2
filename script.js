let timer;
let seconds = 0, minutes = 0, hours = 0;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function formatTime(h, m, s) {
  return (
    (h < 10 ? "0" : "") + h + ":" +
    (m < 10 ? "0" : "") + m + ":" +
    (s < 10 ? "0" : "") + s
  );
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  display.textContent = formatTime(hours, minutes, seconds);
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  seconds = minutes = hours = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = ""; 
});

lapBtn.addEventListener("click", () => {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
});
