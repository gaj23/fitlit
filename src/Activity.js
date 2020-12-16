const helper = require('../src/helper');
// const UserRepository = require('../src/UserRepository');
// const User = require('../src/User');
//need user data, too because then have user stride length and step goal
class Activity {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  getUserActivityData(id) {
    return helper.getUserData(this.activityData, id);
  }

  calculateMiles(date, id) {
    const user = this.userData.find(user => user.id === id);
    const specificDateActivity = helper.getSpecificDay(this.getUserActivityData(id), date);
    return parseFloat((user.strideLength * specificDateActivity[0].numSteps / 5280).toFixed(1));
  }

  getActiveMins(date, id) {
    return helper.getSpecificDay(this.getUserActivityData(id), date)[0].minutesActive;
  }

  calculateWeeklyActiveMins(date, id) {
    return Math.round(helper.getSpecificWeek(this.getUserActivityData(id), date).reduce((acc, day) => {
      return acc += day.minutesActive;
    }, 0) / (helper.getSpecificWeek(this.getUserActivityData(id), date)).length)
  }

}

if (typeof module !== "undefined") {
  module.exports = Activity;
}