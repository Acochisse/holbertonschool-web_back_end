// import createPushNotificationsJobs
// from './8-job.js';
// create a queue with kue
// create a test suite with mocha
// checking for the following:
// if jobs is not an array, throw error "Jobs is not an array"
// add multiple jobs to the queue
// check if the jobs are created
// check if jobs are in queue

import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';
const mocha = require('mocha');
const expect = require('chai').expect;


const queue = kue.createQueue();
const Jobs = [
  { phoneNumber: '9185550000', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '9185550001', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '9185550002', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '9185550003', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '9185550004', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '9185550005', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '9185550006', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '9185550007', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '9185550008', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '9185550009', message: 'This is the code 1234 to verify your account' },
];

before(() => {
  queue.testMode.enter();
});

afterEach(() => {
  queue.testMode.clear();
});

after(() => {
  queue.testMode.exit();
});

describe('createPushNotificationsJobs', () => {
  it('should throw an error if jobs is not an array', () => {
    expect(() => createPushNotificationsJobs('string', queue)).to.throw(Error, 'Jobs is not an array');
  });

it('should show the count of jobs in Jobs', () => {
  createPushNotificationsJobs(Jobs, queue);
  expect(queue.testMode.jobs.length).to.equal(10);
  });
});

