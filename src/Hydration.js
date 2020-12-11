class Hydration {
  constructor(data) {
    this.data = data;
    this.userHydrationData = [];
  }

  getUserHydrationData(id) {
    this.userHydrationData = this.data.filter(data => {
      return data.userID === id
    })
  }

  calculateDailyAvgIntake() {
    return this.userHydrationData.reduce((acc, user) => {
      acc += user.numOunces;
      return acc
    }, 0) / this.userHydrationData.length
  }

  findDailyIntake(date) {
    return this.userHydrationData.find(day => day.date === date).numOunces;
  }

  getWeeklyIntake(date) {
    return this.userHydrationData.slice(date, 7).map(user => {
      return user.numOunces;
    })
  }

}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}