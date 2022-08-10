const getMoney = require('../index');
const expect = require('chai').expect;


describe('getMoney', () => {
  describe('функция getMoney', () => {
    [
      [
		-1, 
		'Недостаточно золота'
	  ],
      [
		99, 
		'Недостаточно золота'
	  ],
      [
		100, 
		'Недостаточно золота'
	  ],
      [
		100.0000000000001, 
		'Мало золота'
	  ],
      [
		199, 
		'Мало золота'
	  ],
      [
		200, 
		'Мало золота'
	  ],
      [
		200.0000000000001, 
		'Достаточно золота'
	  ],
      [
		299, 
		'Достаточно золота'
	  ],
      [
		300, 
		'Достаточно золота'
	  ],
      [
		301, 
		'Да я куплю целую булочку'
	  ],
      [
		400, 
		'Да я куплю целую булочку'
	  ],
	       
    ].forEach(([sum, result]) => {
      it(`${sum} - ${result}`, () => {
		const resultGetMoney = getMoney(sum);
		expect(resultGetMoney).to.equal(result);
    });
    })
  });
});