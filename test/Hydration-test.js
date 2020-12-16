const chai = require("chai");
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const hydrationData = require('./test-data/hydration-test-data');
const helper = require('../src/helper');

describe('Hydration', () => {
  let hydration;
  beforeEach(() => {
    hydration = new Hydration(hydrationData);
    helper.getUserData(hydrationData, 3);
  });

  it('should return a specific users hydration data', () => {
    expect(hydration.getUserHydrationData(3)).to.deep.equal([{
        userID: 3,
        date: '2019/06/15',
        numOunces: 47
      },
      {
        userID: 3,
        date: '2019/06/16',
        numOunces: 99
      },
      {
        userID: 3,
        date: '2019/06/17',
        numOunces: 28
      },
      {
        userID: 3,
        date: '2019/06/18',
        numOunces: 40
      },
      {
        userID: 3,
        date: '2019/06/19',
        numOunces: 85
      },
      {
        userID: 3,
        date: '2019/06/20',
        numOunces: 51
      },
      {
        userID: 3,
        date: '2019/06/21',
        numOunces: 41
      },
      {
        userID: 3,
        date: '2019/06/22',
        numOunces: 78
      },
      {
        userID: 3,
        date: '2019/06/23',
        numOunces: 35
      }
    ]);

  })

  it('should calculate all time intake average', () => {
    expect(hydration.calculateDailyAvgIntake(3)).to.equal(56);
  })

  it('should return a daily intake', () => {
    expect(hydration.findDailyIntake("2019/06/15", 3)).to.equal(47)
  })

  it('should return intake for each day over the course of a week', () => {
    expect(hydration.getWeeklyIntake("2019/06/15", 3)).to.deep.equal([47, 99, 28, 40, 85, 51, 41])
  })

})