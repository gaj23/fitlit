const helper = require('./helper');

class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getUsersSleepData(id) {
    return helper.getUserData(this.sleepData, id);
  }
}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}