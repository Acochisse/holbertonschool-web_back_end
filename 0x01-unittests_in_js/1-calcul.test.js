// test suite for the 1-calcul.js file

const calcul = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
it('returns the rounded sum of the two positive numbers', function () {
    assert.strictEqual(calcul(1.4, 4.5, 'SUM'), 6);
    assert.strictEqual(calcul(4.5, 1.4, 'SUM'), 6);
    assert.strictEqual(calcul(1.5, 3.5, 'SUM'), 6);
    assert.strictEqual(calcul(3.5, 1.5, 'SUM'), 6);
    assert.strictEqual(calcul(1.5, 4.5, 'SUM'), 7);
    assert.strictEqual(calcul(4.5, 1.5, 'SUM'), 7);
    assert.strictEqual(calcul(1.4, 4.4, 'SUM'), 5);
    assert.strictEqual(calcul(4.4, 1.4, 'SUM'), 5);
    assert.strictEqual(calcul(1.4, 4.6, 'SUM'), 6);
    assert.strictEqual(calcul(4.6, 1.4, 'SUM'), 6);
    assert.strictEqual(calcul(1.3, 4.3, 'SUM'), 5);
    assert.strictEqual(calcul(4.3, 1.3, 'SUM'), 5);
    assert.strictEqual(calcul(1.3, 4.7, 'SUM'), 6);
    assert.strictEqual(calcul(4.7, 1.3, 'SUM'), 6);
})
it('returns the rounded subtracted value of a and b', function () {
    assert.strictEqual(calcul(1.4, 4.5, 'SUBTRACT'), -4);
    assert.strictEqual(calcul(4.5, 1.4, 'SUBTRACT'), 4);
    assert.strictEqual(calcul(1.5, 3.5, 'SUBTRACT'), -2);
    assert.strictEqual(calcul(3.5, 1.5, 'SUBTRACT'), 2);
    assert.strictEqual(calcul(1.5, 4.5, 'SUBTRACT'), -3);
    assert.strictEqual(calcul(4.5, 1.5, 'SUBTRACT'), 3);
    assert.strictEqual(calcul(1.4, 4.4, 'SUBTRACT'), -3);
})
it('returns the rounded divided value of a and b', function () {
    assert.strictEqual(calcul(1.4, 4.5, 'DIVIDE'), 0.2);
    assert.strictEqual(calcul(4.5, 1.4, 'DIVIDE'), 5);
    assert.strictEqual(calcul(1.5, 3.5, 'DIVIDE'), 0.5);
    assert.strictEqual(calcul(3.5, 1.5, 'DIVIDE'), 2);
    assert.strictEqual(calcul(1.5, 4.5, 'DIVIDE'), 0.4);
    assert.strictEqual(calcul(4.5, 1.5, 'DIVIDE'), 2.5);
    assert.strictEqual(calcul(1.4, 4.4, 'DIVIDE'), 0.25);
})
it('returns the rounded multiplied value of a and b', function () {
    assert.strictEqual(calcul(1.4, 4.5, 'MULTIPLY'), 5);
    assert.strictEqual(calcul(4.5, 1.4, 'MULTIPLY'), 5);
    assert.strictEqual(calcul(1.5, 3.5, 'MULTIPLY'), 8);
    assert.strictEqual(calcul(3.5, 1.5, 'MULTIPLY'), 8);
    assert.strictEqual(calcul(1.5, 4.5, 'MULTIPLY'), 10);
    assert.strictEqual(calcul(4.5, 1.5, 'MULTIPLY'), 10);
    assert.strictEqual(calcul(1.4, 4.4, 'MULTIPLY'), 4);
})
})

