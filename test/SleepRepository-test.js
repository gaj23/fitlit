const chai = require("chai");
const expect = chai.expect;

const SleepRepo = require('../src/SleepRepository');
const sleepData = require('./test-data/sleep-test-data');

describe('SleepRepo', () => {
  let sleepRepo;
  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData);
  });

  it('should calculate average sleep quaility for all users', () => {
    expect(sleepRepo.getTotalSleepQualityAvg()).to.equal('3.1');
  });

  it('should find users with a sleep quality over 3 for a given week', () => {
    expect(sleepRepo.getGoodQualitySleepUsers('2019/06/15')).to.deep.equal([2, 3, 5]);
  });

  it('should find user who slept the most hours on a given day', () => {
    expect(sleepRepo.findMostHoursSlept('2019/06/15')).to.deep.equal([3]);
  });

  it('should return the users who slept the most hours on a given day if there is a tie', () => {
    expect(sleepRepo.findMostHoursSlept('2019/06/20')).to.deep.equal([2, 5]);
  });
});