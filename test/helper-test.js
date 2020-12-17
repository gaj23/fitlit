const chai = require("chai");
const expect = chai.expect;

const sleepData = require('./test-data/sleep-test-data');
const helper = require('../src/helper');

describe('helper', () => {

  it('should be able to get specific user data', () => {
    expect(helper.getUserData(sleepData, 2)).to.deep.equal([{
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
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 10.8,
        "sleepQuality": 3.2
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 9.6,
        "sleepQuality": 2.5
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "hoursSlept": 10.1,
        "sleepQuality": 2.4
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "hoursSlept": 4.3,
        "sleepQuality": 4.8
      },
    ]);
  });

  it('should be able to get specific user weekly data', () => {
    expect(helper.getSpecificWeek(sleepData, '2019/06/15')).to.deep.equal([{
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2,
        "userID": 1
      },
      {
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7,
        "userID": 2
      },
      {
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7,
        "userID": 3
      },
      {
        "date": "2019/06/15",
        "hoursSlept": 5.4,
        "sleepQuality": 3,
        "userID": 4
      },
      {
        "date": "2019/06/15",
        "hoursSlept": 4.1,
        "sleepQuality": 3.6,
        "userID": 5
      },
      {
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8,
        "userID": 1
      },
      {
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8,
        "userID": 2
     },
    ]);
  });
});