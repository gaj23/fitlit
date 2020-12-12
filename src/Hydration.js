class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserHydrationData(id) {
    return helper.getUserData(this.hydrationData, id);
  }

  // calculateDailyAvgIntake() {
  //   return this.userHydrationData.reduce((acc, user) => {
  //     acc += user.numOunces;
  //     return acc
  //   }, 0) / this.userHydrationData.length
  // }

  findDailyIntake(date, id) {
    return this.getUserHydrationData(id).find(day => day.date === date).numOunces;
  }

  // getWeeklyIntake(date) {
  //   return this.userHydrationData.slice(date, 7).map(user => {
  //     return user.numOunces;
  //   })
  // }

}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}