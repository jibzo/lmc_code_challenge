const assert = require('assert');
const {
	fibonacci,
	flatten,
	countLetters,
} = require('./index.js');


describe('fibonacci method', () => {
	it('should return Fibonacci Sequence', () => {
		assert.equal(fibonacci(0), 0);
		assert.equal(fibonacci(1), 1);
		assert.equal(fibonacci(2), 1);
		assert.equal(fibonacci(3), 2);
		assert.equal(fibonacci(4), 3);
		assert.equal(fibonacci(5), 5);
		assert.equal(fibonacci(6), 8);
		assert.equal(fibonacci(7), 13);
	});
});

describe('flatten method', () => {
	it('should flatten array', () => {
		assert.deepEqual(flatten([1, 2]), [1, 2]);
		assert.deepEqual(flatten([1, [2]]), [1, 2]);
		assert.deepEqual(flatten([1, [2, [3]]]), [1, 2, 3]);
	});
});

describe('countLetters method', () => {
	it('should count the number of letters in a string', () => {
		assert.deepEqual(countLetters('AAA'), { A: 3 });
		assert.deepEqual(countLetters('AAC'), { A: 2, C: 1 });
		assert.deepEqual(countLetters('AAACCTG'), { A: 3, C: 2, G: 1, T: 1 });
	});
});

