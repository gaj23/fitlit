const chai = require("chai");
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRespository');
const activityData = require('./test-data/activity-test-data');
const helper = require('../src/helper');

describe('ActivityRepo', () => {
  let activityRepo;

  beforeEach(() => {
    activityRepo = new ActivityRepo(activityData);
  });

  it.only('should calculate avg stairs climbed for all users for a specific date', () => {
    expect(activityRepo.getAvgStairsClimbedForAllUsers('2019/06/15')).to.equal(37);
  })
})