const sum = require('../index');
const expect = require('chai').expect;


describe('sum', () => {
  describe('функция sum', () => {
    [
      ['0', '0', '0'],
      ['0', '1', '1'],
	  ['11', '99', '110'],
	  ['99', '99', '198'],
      ['123', '456', '579'],
      ['1234', '1', '1235'],
      ['1', '1234', '1235'],
      [1, 1, '2'],
      [1111111111, 1111111111, '2222222222'],
      ['1111111111111111111111111111111111111111', '1111111111111111111111111111111111111111', '2222222222222222222222222222222222222222'],
      ['1111111111111111111111111111111111111111', '1111111', '1111111111111111111111111111111112222222'],
      ['1111111', '1111111111111111111111111111111111111111', '1111111111111111111111111111111112222222'],
      ['999999999999999999999999', '111111111', '1000000000000000111111110'],
     
    ].forEach(([a, b, c]) => {
      it(`${a} + ${b} -> ${c}`, () => {
      expect(sum(a, b)).to.equal(c);
    });
    })
  });
});