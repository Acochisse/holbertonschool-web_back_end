const calculateNumber = require('./2-calcul_chai');
var chai = require('chai');

describe('calculateNumber', function () {
    describe('SUM no Round', function () {
      it('should return 4', function () {
        chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      });
    });
  
    describe('SUM a round', function () {
      it('should return 4', function () {
        chai.expect(calculateNumber('SUM', 2.4, 2)).to.equal(4);
      });
    });
  
    describe('SUM b round ', function () {
      it('should return 4', function () {
        chai.expect(calculateNumber('SUM', 2, 2.4)).to.equal(4);
      });
    });
  
    describe('SUM both round', function () {
      it('should return 6', function () {
        chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
    });
  
    describe('SUBTRACT no round', function () {
      it('should return 4', function () {
        chai.expect(calculateNumber('SUBTRACT', 5, 1)).to.equal(4);
      });
    });
  
    describe('SUBTRACT a round', function () {
      it('should return -3', function () {
        chai.expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
      });
    });
  
    describe('SUBTRACT b round', function () {
      it('should return 1', function () {
        chai.expect(calculateNumber('SUBTRACT', 2.5, 2)).to.equal(1);
      });
    });
  
    describe('SUBTRACT both round', function () {
      it('should return -4', function () {
        chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });
    });
  
    describe('DIVIDE no round', function () {
      it('should return 2', function () {
        chai.expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
      });
    });
  
    describe('DIVIDE a round', function () {
      it('should return 5', function () {
        chai.expect(calculateNumber('DIVIDE', 9.5, 2)).to.equal(5);
      });
    });
  
    describe('DIVIDE b round', function () {
      it('should return 0.2', function () {
        chai.expect(calculateNumber('DIVIDE', 2, 9.5)).to.equal(0.2);
      });
    });
  
    describe('DIVIDE both round', function () {
      it('should return 0.2', function () {
        chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });
    });
  
    describe('DIVIDE Error', function () {
      it('should return Error', function () {
        chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      });
    });
  });