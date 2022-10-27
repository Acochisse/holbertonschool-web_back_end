const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spy.restore();
  });

  it('checks that calcul is called from sendPayment correctly', () => {
    sendPaymentRequestToApi(100, 20);
    spy.calledWith('The total is: 120');
    spy.calledOnce;
  });

  it('checks that calcul is called from sendPayment correctly', () => {
    sendPaymentRequestToApi(10, 10);
    spy.calledWith('The total is: 20');
    spy.calledOnce;
});
});