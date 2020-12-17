class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getTotalSleepQualityAvg() {
    return (this.sleepData.reduce((acc, data) => {
      return acc += data.sleepQuality;
    }, 0) / this.sleepData.length).toFixed(1);
  }

  getGoodQualitySleepUsers(date) {
    return this.sleepData.filter(user => date === user.date && user.sleepQuality > 3).map(user => {
      return user.userID;
    });
  }

  findMostHoursSlept(date) {
    const sorted = this.sleepData.filter(user => date === user.date).sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    });

    return sorted.filter(user => user.hoursSlept === sorted[0].hoursSlept).map(user => {
      return user.userID;
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = SleepRepo;
}