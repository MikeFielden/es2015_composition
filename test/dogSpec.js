var chai = require('chai')
  ,	expect = chai.expect
  , Dog = require('../src/dog')
  ;

describe('dogSpec', function () {
  beforeEach(function () {});

  describe('Nominal operation', function () {
    it('should behave', function () {
      let dogInstance = new Dog('Bubba');

      expect(Dog).to.be.defined;
      expect(dogInstance).to.be.defined;
      expect(dogInstance.hasOwnProperty('bark')).to.equal(true);
      expect(dogInstance.hasOwnProperty('poop')).to.equal(true);
      expect(dogInstance.hasOwnProperty('eat')).to.equal(true);
      expect(dogInstance.hasOwnProperty('toJSON')).to.equal(true);

      dogInstance.poop();

      expect(dogInstance.toJSON().poops.length).to.equal(1);
    });
  });
});