const blackListed = [
  4153518780,
  4153518781,
]
// create a function named sendNotification that takes phoneNumber, message, job and done as arguments
// when the function is called track progress 0-100%
// if the phoneNumber is in the blackListed array, log to the console "Phone number ${phoneNumber} is blacklisted"
// if the phoneNumber is not in the blackListed array, log to the console "Sending notification to ${phoneNumber}, with message: ${message}"
// call done() when the job is done

function sendNotification(phoneNumber, message, job, done) {
  if (blackListed.includes(phoneNumber)) {
    console.log(`Phone number ${phoneNumber} is blacklisted`);
    done();
  } else {
    job.progress(0, 100);
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
    job.progress(50, 100);
    done();
  }
}

const kue = require('kue');
const queue = kue.createQueue();

queue.process('push_notification_code_2', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
}
);
