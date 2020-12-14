const chai = require("chai");
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const sleepData = require('./test-data/sleep-test-data');
const helper = require('../src/helper');

describe('Sleep', () => {
  let sleep;
  beforeEach(() => {
    sleep = new Sleep(sleepData);
    helper.getUserData(sleepData, 2);
  });

  it.only('should be an instance of sleep', () => {
    expect(expect(sleep).to.be.an.instanceof(Sleep));
  });

  it.only('should return a specific users sleep data', () => {
    expect(sleep.getUsersSleepData(2)).to.deep.equal([
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 5.7,
        "sleepQuality": 3
      },
    ]);
  });

  it.only('should calculate all time average number of hours slept', () => {
    expect(sleep.calculateDailyAvgHoursSlept(2)).to.equal('6.7');
  });

  it.only('should calculate all time average quality of hours slept', () => {
    expect(sleep.calculateDailyAvgSleepQuality(2)).to.equal('3.8');
  });

  it.only('should return daily hours slept', () => {
    expect(sleep.findDailyHrsSlept("2019/06/15", 2)).to.equal(7)
  });

  it.only('should return daily sleep quality', () => {
    expect(sleep.findDailySleepQuality("2019/06/15", 2)).to.equal(4.7)
  });

  it.only('it should calculate how many hours slept each day over a given week', () => {
    expect(sleep.calculateWeeklyHrsSlep("2019/06/15", 2)).to.equal()
  })
});