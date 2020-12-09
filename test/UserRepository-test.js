const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const userData  = require('../data/test-data');
const users = userData;

describe('UserRepository', () => {
  let userRepo = new UserRepository;

  beforeEach(() => {
    userRepo = new UserRepository(users);
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should store all users', () => {
    expect(userRepo.users.length).to.deep.equal(5);
  });

  it('should find a specific user', () => {
    expect(userRepo.getUser(4)).to.equal(users[3])
  });
});