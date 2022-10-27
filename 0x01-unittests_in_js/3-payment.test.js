const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('checks that calcul is called from sendPayment correctly', () => {
    const spiedFunction = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spiedFunction.calledWith('SUM', 100, 20)).to.be.true;
    spiedFunction.restore();
  });
});
