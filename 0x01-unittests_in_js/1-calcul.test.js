// test suite for the 1-calcul.js file

const calcul = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
it('returns the rounded sum of the two positive numbers', function () {
    assert.strictEqual(calcul('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calcul('SUM', 4.5, 1.4), 6);
    assert.strictEqual(calcul('SUM', 1.5, 3.5), 6);
    assert.strictEqual(calcul('SUM', 3.5, 1.5), 6);
    assert.strictEqual(calcul('SUM', 1.5, 4.5), 7);
    assert.strictEqual(calcul('SUM', 4.5, 1.5), 7);
    assert.strictEqual(calcul('SUM', 1.4, 4.4), 5);
    assert.strictEqual(calcul('SUM', 4.4, 1.4), 5);


})
it('returns the rounded subtracted value of a and b', function () {
    assert.strictEqual(calcul('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calcul('SUBTRACT', 4.5, 1.4), 4);
    assert.strictEqual(calcul('SUBTRACT', 1.5, 3.5), -2);
    assert.strictEqual(calcul('SUBTRACT', 3.5, 1.5), 2);
    assert.strictEqual(calcul('SUBTRACT', 1.5, 4.5), -3);
    assert.strictEqual(calcul('SUBTRACT', 4.5, 1.5), 3);
    assert.strictEqual(calcul('SUBTRACT', 1.4, 4.4), -3);
    assert.strictEqual(calcul('SUBTRACT', 4.4, 1.4), 3);
})
it('returns the rounded divided value of a and b', function () {
    assert.strictEqual(calcul('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calcul('DIVIDE', 4.5, 1.4), 5);
    assert.strictEqual(calcul('DIVIDE', 0, 3.5), 0);
    assert.strictEqual(calcul('DIVIDE', 3.5, 0), 'Error');
})
it('returns the rounded multiplied value of a and b', function () {
    assert.strictEqual(calcul('MULTIPLY', 1.4, 4.5), 5);
    assert.strictEqual(calcul('MULTIPLY', 4.5, 1.4), 5);
    assert.strictEqual(calcul('MULTIPLY', 1.5, 3.5), 8);
    assert.strictEqual(calcul('MULTIPLY', 3.5, 1.5), 8);
    assert.strictEqual(calcul('MULTIPLY', 1.5, 4.5), 10);
    assert.strictEqual(calcul('MULTIPLY', 4.5, 1.5), 10);
    assert.strictEqual(calcul('MULTIPLY', 1.4, 4.4), 4);
    assert.strictEqual(calcul('MULTIPLY', 4.4, 1.4), 4);
})
})

