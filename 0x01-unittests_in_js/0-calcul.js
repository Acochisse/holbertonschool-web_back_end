// script that takes in two arguments (a, b) and returns the rounded sum of the two numbers
function calculateNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
