// script that uses mocha to test the sumRound function

const assert = require('assert');
const sumRound = require('./0-calcul.js');

describe('sumRound', function () {
  it('returns the rounded sum of the two positive numbers', function () {
    assert.strictEqual(sumRound(1.4, 4.5), 6);
    assert.strictEqual(sumRound(4.5, 1.4), 6);
    assert.strictEqual(sumRound(1.5, 3.5), 6);
    assert.strictEqual(sumRound(3.5, 1.5), 6);
    assert.strictEqual(sumRound(1.5, 4.5), 7);
    assert.strictEqual(sumRound(4.5, 1.5), 7);
    assert.strictEqual(sumRound(1.4, 4.4), 5);
    assert.strictEqual(sumRound(4.4, 1.4), 5);
    assert.strictEqual(sumRound(1.4, 4.6), 6);
    assert.strictEqual(sumRound(4.6, 1.4), 6);
    assert.strictEqual(sumRound(1.3, 4.3), 5);
    assert.strictEqual(sumRound(4.3, 1.3), 5);
    assert.strictEqual(sumRound(1.3, 4.7), 6);
    assert.strictEqual(sumRound(4.7, 1.3), 6);
  });
  it('returns a rounded sum of blended positive and negative numbers', function () {
    assert.strictEqual(sumRound(-1.6, 4.4), 2);
    assert.strictEqual(sumRound(4.4, -1.6), 2);
    assert.strictEqual(sumRound(2.3, -4.4), -2);
    assert.strictEqual(sumRound(-4.4, 2.3), -2);
  });
  it('returns NaN if a or b is not a number', function () {
    assert.strictEqual(sumRound('A', 1.6), NaN);
    assert.strictEqual(sumRound(1.6, 'B'), NaN);
    assert.strictEqual(sumRound('A', 'B'), NaN);
  });
  it('returns NaN if a or b is infinite', function () {
    assert.strictEqual(sumRound(Infinity, 1.6), Infinity);
    assert.strictEqual(sumRound(1.6, Infinity), Infinity);
    assert.strictEqual(sumRound(Infinity, Infinity), Infinity);
    assert.strictEqual(sumRound(-Infinity, 1.6), -Infinity);
    assert.strictEqual(sumRound(1.6, -Infinity), -Infinity);
    assert.strictEqual(sumRound(-Infinity, -Infinity), -Infinity);
  });
  it('returns rounded sum of negative integers', function () {
    assert.strictEqual(sumRound(-1, -4), -5);
    assert.strictEqual(sumRound(-4, -1), -5);
  });
});