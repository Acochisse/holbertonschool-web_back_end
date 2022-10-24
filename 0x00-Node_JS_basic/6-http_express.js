// script creates a small http server using the express module
// it should be assigned to a variable named app, which needs to be exported
// it should listen on port 1245
// it should respond to GET requests with a body of Holberton School

const express = require('express');

const port = 1245;

const app = express();

app.get('/', (_req, res) => res.send('Hello Holberton School!'))
  .listen(port);

module.exports = app;
