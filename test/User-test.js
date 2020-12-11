const chai = require("chai");
const expect = chai.expect;

const User = require('../src/User');
const userData = require('./test-data/user-test-data');

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User(userData[2]);
  })

  it('should have an user id', () => {
    expect(user.id).to.equal(userData[2].id)
  })

  it('should have an user name', () => {
    expect(user.name).to.equal(userData[2].name);
  })

  it('should have an user address', () => {
    expect(user.address).to.equal(userData[2].address);
  })

  it('should have an user email', () => {
    expect(user.email).to.equal(userData[2].email);
  })

  it('should have an user\'s stride length', () => {
    expect(user.strideLength).to.equal(userData[2].strideLength);
  })

  it('should have an user\'s daily step goal', () => {
    expect(user.dailyStepGoal).to.equal(userData[2].dailyStepGoal);
  })

  it('should have an user\'s friends', () => {
    expect(user.friends).to.equal(userData[2].friends);
  })

  it('should return user\'s first name', () => {
    expect(user.returnFirstName).to.be.a('function');
    expect(user.returnFirstName()).to.deep.equal('Hermonie');
  })

})