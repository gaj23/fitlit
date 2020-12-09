const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const userData  = require('../data/test-data');
const users = userData;

describe('UserRepository', () => {
  let userRepo = new UserRepository;

  beforeEach(() => {
    userRepo = new UserRepository(user);
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });
});