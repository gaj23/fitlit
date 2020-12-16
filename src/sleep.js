// const helper = require('./helper');

class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getUsersSleepData(id) {
    return helper.getUserData(this.sleepData, id);
  }

  calculateDailyAvgHoursSlept(id) {
    return (this.getUsersSleepData(id).reduce((acc, user) => {
      return acc += user.hoursSlept;
    }, 0) / this.getUsersSleepData(id).length).toFixed(1);
  }

  calculateDailyAvgSleepQuality(id) {
    return (this.getUsersSleepData(id).reduce((acc, user) => {
      return acc += user.sleepQuality;
    }, 0) / this.getUsersSleepData(id).length).toFixed(1);
  }

  findDailyHrsSlept(date, id) {
    return this.getUsersSleepData(id).find(day => day.date === date).hoursSlept;
  }

  findDailySleepQuality(date, id) {
    return this.getUsersSleepData(id).find(day => day.date === date).sleepQuality;
  }

  calculateWeeklyHrsSlept(date, id) {
    return helper.getSpecificWeek(this.getUsersSleepData(id), date).map(date => date.hoursSlept);
  }

  calculateWeeklySleepQuality(date, id) {
    return helper.getSpecificWeek(this.getUsersSleepData(id), date).map(date => date.sleepQuality);
  }
}


if (typeof module !== "undefined") {
  module.exports = Sleep;
}