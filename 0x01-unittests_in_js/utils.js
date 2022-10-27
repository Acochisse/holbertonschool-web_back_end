//module that contains the function to be tested

const Utils = {
  calculateNumber(type, a, b) {
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
      case 'SUBTRACT':
        return Math.round(a) - Math.round(b);
      case 'DIVIDE':
        if (Math.round(b) === 0) return 'Error';
        return Math.round(a) / Math.round(b);
      case 'MULTIPLY':
        return Math.round(a) * Math.round(b);
      default:
        throw new TypeError;
    };
  }
}

module.exports = Utils;
