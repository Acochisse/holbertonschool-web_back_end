//using kue create a queue
// create a function named sendNotification that takes phoneNumber and message as arguments
// it should log to the console "Sending notification to ${phoneNumber}, with message: ${message}"
// create a queue process that will listen to new jobs
// every new job should call the function sendNotification

const kue = require('kue');
const queue = kue.createQueue();

function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
};

queue.process('push_notification_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
