const chai = require("chai");
const expect = chai.expect;

const Activity = require('../src/Activity');
const activityData = require('./test-data/activity-test-data');
const helper = require('../src/helper');

describe('Activity', () => {

  let activity;

  beforeEach(() => {
    activity = new Activity(activityData);
    helper.getUserData(sleepData, 2);
  })

  it.skip('should calculate miles a user walked on a chosen day', () => {

  })

  it.skip('should return how many minutes a user was active on a chosen day', () => {

  })

  it.skip('should return the average minutes of activity during a week', () => {

  })

  it.skip('should notify a user if they reached their step goal', () => {

  })

  it.skip('should filter through to find all days a user exceeded their step goal', () => {

  })

  it.skip('should find their all-time stair climbing record', () => {

  })

})