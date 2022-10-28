const request = require('request');
const express = require('express');
const { get } = require('request');


const port = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  res.send({ code: 200, message: `Welcome ${req.body.userName}` });
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
