//using Babel ES6 and redis
//using hset
// the key of the hash should be "HolbertonSchools"
//should have a value for "Portland" with the value 50
//should have a value for "Seattle" with the value 80
//should have a value for "New York" with the value 20
//should have a value for "Bogota" with the value 20
//should have a value for "Cali" with the value 40
//should have a value for "Paris" with the value 2
// use redis.print for each call to hset

const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client is connected to the server');
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

client.hset('HolbertonSchools', 'Portland', 50, redis.print);
client.hset('HolbertonSchools', 'Seattle', 80, redis.print);
client.hset('HolbertonSchools', 'New York', 20, redis.print);
client.hset('HolbertonSchools', 'Bogota', 20, redis.print);
client.hset('HolbertonSchools', 'Cali', 40, redis.print);
client.hset('HolbertonSchools', 'Paris', 2, redis.print);
client.hgetall('HolbertonSchools', (error, value) => {
  console.log(value);
});
