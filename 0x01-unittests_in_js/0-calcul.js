// script that takes in two arguments (a, b) and returns the rounded sum of the two numbers
function calculateNumber(a, b) {
  const aR = Math.round(a);
  const bR = Math.round(b);
  return aR + bR;
}

module.exports = calculateNumber;
