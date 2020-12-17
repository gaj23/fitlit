const chai = require("chai");
const expect = chai.expect;

const userData = require('./test-data/user-test-data')
const Activity = require('../src/Activity');
const activityData = require('./test-data/activity-test-data');
const helper = require('../src/helper');

describe('Activity', () => {
  let activity;

  beforeEach(() => {
    helper.getUserData(userData, 2);
    activity = new Activity(activityData, userData);
    helper.getUserData(activityData, 2);

  })

  it.only('should be to find a specific users daily steps', () => {
    expect(activity.findDailySteps('2019/06/15', 3)).to.equal(7402)
  })

  it('should calculate miles a user walked on a chosen day', () => {
    expect(activity.calculateMiles('2019/06/15', 3)).to.equal(6.2);
  })

  it('should return how many minutes a user was active on a chosen day', () => {
    expect(activity.getActiveMins('2019/06/15', 3)).to.equal(116);
  })

  it('should return the average minutes of activity during a week', () => {
    expect(activity.calculateWeeklyActiveMins('2019/06/15', 3)).to.equal(165);
    expect(activity.calculateWeeklyActiveMins('2019/06/15', 1)).to.equal(171);
  })

  it('should tell if a user if they reached their step goal', () => {
    expect(activity.giveFeedback('2019/06/15', 2)).to.equal('No');
    expect(activity.giveFeedback('2019/06/17', 2)).to.equal('Yes');

  })

  it('should filter through to find all days a user exceeded their step goal', () => {
    expect(activity.findGoalReachedDays(2)).to.deep.equal(['2019/06/17', '2019/06/21']);

  })

  it('should find their all-time stair climbing record', () => {
    expect(activity.findStairRecord(3)).to.equal('2019/06/20')
  })

})