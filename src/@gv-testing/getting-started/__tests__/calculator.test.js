
const calculator = require("../calculator");

describe('Test Calculator', () => {

	test('add should a + b', () => {
		const calc = new calculator.Calculator();
		expect(calc.add(1, 20)).toBe(21);
	});
});

describe('Test Calculator', () => {
	test('sub should a - b', () => {
		const calc = new calculator.Calculator();
		expect(calc.sub(5, 5)).toBe(0);
	});

});
describe('Test Calculator', () => {
	test('mul should a * b', () => {
		const calc = new calculator.Calculator();
		expect(calc.mul(5, 5)).toBe(25);
	});

});
describe('Test Calculator', () => {
	test('div should a / b', () => {
		const calc = new calculator.Calculator();
		expect(calc.div(25, 5)).toBe(5);
	});

});