// const helper = require('../src/helper');
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

  findDailySteps(date, id) {
    return this.getUserActivityData(id).find(day => day.date === date).numSteps
  }

  findDailyFlightOfStairs(date, id) {
    return this.getUserActivityData(id).find(day => day.date === date).flightsOfStairs
  }

  calculateMiles(date, id) {
    const user = this.userData.find(user => user.id === id);
    const specificDateActivity = helper.getSpecificDay(this.getUserActivityData(id), date);
    return parseFloat((user.strideLength * specificDateActivity[0].numSteps / 5280).toFixed(1));
  }

  getActiveMins(date, id) {
    return helper.getSpecificDay(this.getUserActivityData(id), date)[0].minutesActive;
  }

  calculateWeeklySteps(date, id) {
    return helper.getSpecificWeek(this.getUserActivityData(id), date).map(date => date.numSteps);
  }

  calculateWeeklyActiveMins(date, id) {
    return Math.round(helper.getSpecificWeek(this.getUserActivityData(id), date).reduce((acc, day) => {
      return acc += day.minutesActive;
    }, 0) / (helper.getSpecificWeek(this.getUserActivityData(id), date)).length)
  }

  giveFeedback(date, id) {
    const thumbsUp = String.fromCodePoint(0x1F44D)
    const thumbsDown = String.fromCodePoint(0x1F44E)
    const user = this.userData.find(user => user.id === id);
    const daySteps = helper.getSpecificDay(this.getUserActivityData(id), date)[0].numSteps;
    if (daySteps > user.dailyStepGoal) {
      return thumbsUp
    } else {
      return thumbsDown
    }
  }

  findGoalReachedDays(id) {
    const user = this.userData.find(user => user.id === id);
    return this.getUserActivityData(id).filter(day => day.numSteps > user.dailyStepGoal).map(day => day.date);
  }

  findStairRecord(id) {
    return this.getUserActivityData(id).sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    })[0].date;
  }
}

if (typeof module !== "undefined") {
  module.exports = Activity;
}