//script that connects to the local redis server using babel and ES6
// it should console log the message "Redis client is connected to the server"
// it should also console log an error if any error while connecting
// the error should state "Redis client not connected to the server: ERROR_MESSAGE"

const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client is connected to the server');
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});
