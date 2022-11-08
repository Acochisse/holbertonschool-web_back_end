//using ES6 and Babel
//using redis
//create a new redis client
// on connect and error as before
// it should subscribe to the channel "holberton school channel"
// when it recieves a message on the channel, it should log it to the console
// on message, "KILL_SERVER" it should unsubscribe from the channel and quit the redis client

const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client is connected to the server');
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

client.subscribe('holberton school channel');

client.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    client.unsubscribe(channel);
    client.quit();
  }
});
