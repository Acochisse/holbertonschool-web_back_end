// script that takes in two arguments (a, b) and returns the rounded sum of the two numbers
function calculateNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  const aR = Math.round(a);
  const bR = Math.round(b);
  return Math.round(aR + bR);
}

module.exports = calculateNumber;
