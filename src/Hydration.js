const helper = require('./helper');

class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserHydrationData(id) {
    return helper.getUserData(this.hydrationData, id);
  }

  calculateDailyAvgIntake(id) {
    return this.getUserHydrationData(id).reduce((acc, user) => {
      acc += user.numOunces;
      return acc
    }, 0) / this.getUserHydrationData(id).length
  }

  findDailyIntake(date, id) {
    return this.getUserHydrationData(id).find(day => day.date === date).numOunces;
  }


  getWeeklyIntake(date, id) {
    return helper.getSpecificWeek(this.getUserHydrationData(id), date).map(date => date.numOunces)
  }

}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}