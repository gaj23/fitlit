const helper = require('../src/helper');

class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }
}

if (typeof module !== "undefined") {
  module.exports = Activity;
}