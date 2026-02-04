class Stopwatch {
  #elapsedTimeInSeconds = 0;
  #intervalId = null;

  start(callback = () => {}) {
    this.#intervalId = setInterval(() => {
      this.#elapsedTimeInSeconds += 1;
      console.log(this.elapsedTime);
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

const sw1 = new Stopwatch();
sw1.start();
