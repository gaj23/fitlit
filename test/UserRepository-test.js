const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const userData  = require('../data/test-data');
const usersData = userData;

describe('UserRepository', () => {
  let userRepo = new UserRepository;

  beforeEach(() => {
    userRepo = new UserRepository(usersData);
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should have usersData', () => {
    expect(userRepo.usersData).to.equal(usersData);
  });

  it('should find a specific user', () => {
    expect(userRepo.getUser(4)).to.equal(usersData[3])
  });

  it('should not be able to find a specific user', () => {
    expect(userRepo.getUser(6)).to.equal(undefined)
  });

  it('should return average step goal of all users', () => {
    expect(userRepo.calculateAvgStepGoal()).to.equal(11600)
  });
});