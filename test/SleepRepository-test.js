const chai = require("chai");
const expect = chai.expect;

const SleepRepo = require('../src/SleepRepository');
const sleepData = require('./test-data/sleep-test-data');

describe('SleepRepo', () => {
  let sleepRepo;
  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData);
    //contains all user sleep stats.
  });

  it('should calculate average sleep quaility for all users', () => {
    expect(sleepRepo.getTotalSleepQualityAvg()).to.equal('3.1');
  })

  it('should find users with a sleep quality over 3 for a given week', () => {

  })

  it.skip('should find user who slept the most hours on a given day', () => {

  })

  it.skip('should return the users who slept the most hours on a given day if there is a tie', () => {

  })

})