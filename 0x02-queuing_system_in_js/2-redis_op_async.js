//add two new functions to this code
// 1. setNewSchool: accepts two arguements, schoolName and value
// it should set in Redis the value for the key schoolName
// 2. displaySchoolValue: accepts one argument, schoolName
// it should retrieve the value in Redis for the key schoolName and log it to the console

const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client is connected to the server');
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (error, value) => {
    console.log(value);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
