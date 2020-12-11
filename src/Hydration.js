class Hydration {
  constructor(data) {
    this.data = data;
    this.userHydrationData = [];
  }

  getUserHydrationData(id) {
    return this.data.filter(data =>
      data.userID === id)
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
    return this.getUserHydrationData(id).slice(date, 7).map(user => {
      return user.numOunces;
    })
  }

}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}