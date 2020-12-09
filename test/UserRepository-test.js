const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', () => {
  let userRepo = new UserRepository;

  beforeEach(() => {
    userRepo = new UserRepository();
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });
});