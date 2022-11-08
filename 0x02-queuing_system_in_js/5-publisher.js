// using ES6 and Babel
// using redis
// handle connect and error as before
// create a function named publishMessage that takes a message and a time argument
// after time millisecond: the function should log to the console 
// "About to send ${message}"
// the function should publish the message to the channel "holberton school channel"

const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client is connected to the server');
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    client.publish('holberton school channel', message);
  }, time);
};

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);