// create a function
// "createPushNotificationsJobs" 
//that takes jobs(array of objects) and queue(kue queue) as arguments
// if jobs is not an array, throw error "Jobs is not an array"
// for each job in jobs, create a job in the queue push_notification_code_3
// handle the job events

const kue = require('kue');
const queue = kue.createQueue();

const createPushNotificationsJobs = (jobs, queue) =>{
  if (!Array.isArray(jobs)) throw Error('Jobs is not an array');
  jobs.forEach(element => {
    const job = queue.create('push_notification_code_3', element).save((err) => {
      if (!err) console.log(`Notification job created: ${job.id}`);
    });

    job.on('complete', () => {
      console.log(`Notification job ${job.id} completed`);
    });
    job.on('failed', () => {
      console.log(`Notification job ${job.id} failed`);
    });
    job.on('progress', (progress) => {
      console.log(`Notification job ${job.id} ${progress}% complete`);
    });
  });
}

export default createPushNotificationsJobs;
