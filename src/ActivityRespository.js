const helper = require('../src/helper');

class ActivityRepo {
  constructor(activityData) {
    this.activityData = activityData;
  }

  getAvgStairsClimbedForAllUsers(date) {
    return (helper.getSpecificDay(this.activityData, date).reduce((acc, data) => {
      return acc += data.flightsOfStairs;
     } , 0) / helper.getSpecificDay(this.activityData, date).length).toFixed(1);
  }
}

if (typeof module !== "undefined") {
  module.exports = ActivityRepo;
}