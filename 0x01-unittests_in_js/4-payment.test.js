const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('checks that calcul is called from sendPayment correctly', () => {
    const spiedFunction = sinon.stub(Utils, 'calculateNumber');
    sendPaymentRequestToApi(1, 2);
    expect(spiedFunction.calledWith('SUM', 1, 2)).to.be.true;
    spiedFunction.restore();
  });
});
