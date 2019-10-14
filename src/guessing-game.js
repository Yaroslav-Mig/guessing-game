class GuessingGame {
  constructor() {
    this.minValue = 0;
    this.maxValue = 0;
    this.guessValue = 0;
  }

  setRange(min, max) {
    this.minValue = min;
    this.maxValue = max;
  }

  guess() {
    this.guessValue = Math.round((this.minValue + this.maxValue) / 2);
    return this.guessValue;
  }

  lower() {
    this.setRange(this.minValue, this.guessValue);
  }

  greater() {
    this.setRange(this.guessValue, this.maxValue);
  }
}

module.exports = GuessingGame;
