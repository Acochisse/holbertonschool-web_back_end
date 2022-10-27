const {expect} = require('chai');
const request = require('request');

describe('GET /', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return Welcome to the payment system', (done) => {
    request('http://localhost:7865', (err, res) => {
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
describe('GET /cart/:id', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865/cart/12', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return Payment methods for cart 12', (done) => {
    request('http://localhost:7865/cart/12', (err, res) => {
      expect(res.body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});

