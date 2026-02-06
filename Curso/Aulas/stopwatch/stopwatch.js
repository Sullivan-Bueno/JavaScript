class Stopwatch {
  #elapsedTimeInSeconds = 0;
  #intervalId = null;

  start(callback = () => {}) {
    this.#intervalId = setInterval(() => {
      this.#elapsedTimeInSeconds++;
      callback();
    }, 1000);
  }

  stop(callback = () => {}) {
    clearInterval(this.#intervalId);
    callback();
  }

  reset(callback = () => {}) {
    this.#elapsedTimeInSeconds = 0;
    callback();
  }

  get elapsedTime() {
    return Stopwatch.formatTime(this.#elapsedTimeInSeconds);
  }

  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600)
      .toString()
      .padStart(2, 0);
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
      .toString()
      .padStart(2, 0);
    const seconds = (timeInSeconds - hours * 3600 - minutes * 60)
      .toString()
      .padStart(2, 0);

    return `${hours}:${minutes}:${seconds}`;
  }
}

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")
const stopwatchDisplay = document.getElementById("stopwatch-display")

const sw1 = new Stopwatch();

function updateDisplay () {
  stopwatchDisplay.innerText = sw1.elapsedTime;
}

startBtn.addEventListener("click", () => {
  sw1.start(updateDisplay);
})
stopBtn.addEventListener("click", () => {
  sw1.stop();
})
resetBtn.addEventListener("click", () => {
  sw1.reset(updateDisplay);
})
