const assert = require('assert');
const {
	fibonacci,
	flatten,
	countLetters,
} = require('./index.js');


describe('fibonacci method', () => {
	it('should return Fibonacci Sequence', () => {
		assert.equal(fibonacci(0), 1);
		assert.equal(fibonacci(1), 1);
		assert.equal(fibonacci(2), 2);
		assert.equal(fibonacci(3), 3);
		assert.equal(fibonacci(4), 5);
		assert.equal(fibonacci(5), 8);
		assert.equal(fibonacci(6), 13);
	});
});

describe('flatten method', () => {
	it('should flatten array', () => {
		assert.equal(flatten([1, 2]), [1, 2]);
		assert.equal(flatten([1, [2]]), [1, 2]);
		assert.equal(flatten([1, [2, [3]]]), [1, 2, 3]);
	});
});

describe('countLetters method', () => {
	it('should count the number of letters in a string', () => {
		assert.equal(countLetters('AAA'), { A: 3 });
		assert.equal(countLetters('AAC'), { A: 3, C: 1 });
		assert.equal(countLetters('AAACCTG'), { A: 3, C: 2, G: 1, T: 1 });
	});
});

