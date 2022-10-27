// script that uses mocha to test the calculateNumber function

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('returns the rounded sum of the two positive numbers', function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(4.5, 1.4), 6);
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
    assert.strictEqual(calculateNumber(3.5, 1.5), 6);
    assert.strictEqual(calculateNumber(1.5, 4.5), 7);
    assert.strictEqual(calculateNumber(4.5, 1.5), 7);
    assert.strictEqual(calculateNumber(1.4, 4.4), 5);
    assert.strictEqual(calculateNumber(4.4, 1.4), 5);
    assert.strictEqual(calculateNumber(1.4, 4.6), 6);
    assert.strictEqual(calculateNumber(4.6, 1.4), 6);
    assert.strictEqual(calculateNumber(1.3, 4.3), 5);
    assert.strictEqual(calculateNumber(4.3, 1.3), 5);
    assert.strictEqual(calculateNumber(1.3, 4.7), 6);
    assert.strictEqual(calculateNumber(4.7, 1.3), 6);
  });
  it('returns a rounded sum of blended positive and negative numbers', function () {
    assert.strictEqual(calculateNumber(-1.6, 4.4), 2);
    assert.strictEqual(calculateNumber(4.4, -1.6), 2);
    assert.strictEqual(calculateNumber(2.3, -4.4), -2);
    assert.strictEqual(calculateNumber(-4.4, 2.3), -2);
  });
  it('returns NaN if a or b is not a number', function () {
    assert.strictEqual(calculateNumber('A', 1.6), NaN);
    assert.strictEqual(calculateNumber(1.6, 'B'), NaN);
    assert.strictEqual(calculateNumber('A', 'B'), NaN);
  });
  it('returns NaN if a or b is infinite', function () {
    assert.strictEqual(calculateNumber(Infinity, 1.6), Infinity);
    assert.strictEqual(calculateNumber(1.6, Infinity), Infinity);
    assert.strictEqual(calculateNumber(Infinity, Infinity), Infinity);
    assert.strictEqual(calculateNumber(-Infinity, 1.6), -Infinity);
    assert.strictEqual(calculateNumber(1.6, -Infinity), -Infinity);
    assert.strictEqual(calculateNumber(-Infinity, -Infinity), -Infinity);
  });
  it('returns rounded sum of negative integers', function () {
    assert.strictEqual(calculateNumber(-1, -4), -5);
    assert.strictEqual(calculateNumber(-4, -1), -5);
  });
});