// const helper = require('../src/helper');

class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData;
  }

  getAvgStairsClimbedForAllUsers(date) {
    return (helper.getSpecificDay(this.activityData, date).reduce((acc, data) => {
      return acc += data.flightsOfStairs;
    }, 0) / helper.getSpecificDay(this.activityData, date).length).toFixed(1);
  }

  getAvgStepsForAllUsers(date) {
    return Math.round(helper.getSpecificDay(this.activityData, date).reduce((acc, data) => {
      return acc += data.numSteps;
    }, 0) / helper.getSpecificDay(this.activityData, date).length);
  }

  getAvgMinActiveForAllUsers(date) {
    return Math.round(helper.getSpecificDay(this.activityData, date).reduce((acc, data) => {
      return acc += data.minutesActive;
    }, 0) / helper.getSpecificDay(this.activityData, date).length);
  }
}


if (typeof module !== "undefined") {
  module.exports = ActivityRepository;
}