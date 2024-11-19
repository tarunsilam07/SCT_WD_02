let timer;
let elapsedTime = 0;
let running = false;
const timeDisplay = document.getElementById('time');
const lapsContainer = document.getElementById('laps');

function formatTime(ms) {
  const seconds = Math.floor((ms / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor((ms / (1000 * 60)) % 60).toString().padStart(2, '0');
  const hours = Math.floor(ms / (1000 * 60 * 60)).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      elapsedTime += 1000;
      timeDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
  }
}

function pauseTimer() {
  if (running) {
    running = false;
    clearInterval(timer);
  }
}

function resetTimer() {
  running = false;
  clearInterval(timer);
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00';
  lapsContainer.innerHTML = '';
}

function recordLap() {
  if (running) {
    const lapTime = formatTime(elapsedTime);
    const lapElement = document.createElement('div');
    lapElement.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
    lapsContainer.appendChild(lapElement);
  }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
