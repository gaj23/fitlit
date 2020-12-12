const chai = require("chai");
const expect = chai.expect;

const Sleep = require('../src/sleep');
const sleepData = require('./test-data/sleep-test-data');
const helper = require('../src/helper');

describe('Sleep', () => {
  let sleep;
  beforeEach(() => {
    sleep = new Sleep(sleepData);
  });

  it.only('should be an instance of sleep', () => {
    expect(expect(sleep).to.be.an.instanceof(Sleep));
  });

  it.only('should return a specific users sleep data', () => {
    except(sleep.getUsersSleepData()).to.deep.equal([{}])
  });
})