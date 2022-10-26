// this script creates a small server using the http module
// it should be assigned to a variable named app
// it should listen on port 1245
// it should respond to GET requests with a body of Holberton School

const http = require('http');

const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}).listen(port);

module.exports = app;
