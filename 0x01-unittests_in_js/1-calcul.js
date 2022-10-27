// script that takes in the arguements (a, b) and returns the rounded sum of the two numbers
// also takes in the third argument (type) and performs the operation specified by the type

function calculateNumber(a, b, type) {
 if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    } else {
      return Math.round(a) / Math.round(b);
    }
  } else if (type === 'MULTIPLY') {
    return Math.round(a) * Math.round(b);
  }
}
  module.exports = calculateNumber;
