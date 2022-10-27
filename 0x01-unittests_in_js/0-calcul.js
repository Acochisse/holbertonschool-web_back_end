// script that takes in two arguments (a, b) and returns the rounded sum of the two numbers
function sumRound(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  const aR = Math.round(a);
  const bR = Math.round(b);
  return aR + bR;
}

module.exports = sumRound;
