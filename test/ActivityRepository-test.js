const chai = require("chai");
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRespository');
const activityData = require('./test-data/activity-test-data');

describe('ActivityRepo', () => {
  let activityRepo;

  beforeEach(() => {
    activityRepo = new ActivityRepo(activityData);
  });

  it.only('should calculate average stairs climbed for all users for a specific date', () => {
    expect(activityRepo.getAvgStairsClimbedForAllUsers('2019/06/15')).to.equal('19.7');
  });

  it.only('should calculate average steps taken for all user for a specific date', () => {
    expect(activityRepo.getAvgStepsForAllUsers('2019/06/15')).to.equal(5091);
  });

  it.only('should calculate average minutes active for all user on a specific date', () => {
    expect(activityRepo.getAvgMinActiveForAllUsers('2019/06/15')).to.equal('131.33');
  });
});