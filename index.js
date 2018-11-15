const fibonacci = (n) => {
	/**

	By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

	For example, the first ten Fibonacci numbers are:

	0, 1, 1, 2, 3, 5, 8, 13, 21, 34
	Write a function that accepts a number and returns the number at that position in the fibonnaci sequence.

	Once it works the tests will pass

	*/
	return n
}


const flatten = (list) => {
	/**

	Write a function that accepts a multi dimensional array and returns a flattened version.
	Example:
	[1, 2] becomes [1, 2]
	[1, [2]] becomes [1, 2]
	[1, [2, [3]]] beomes [1, 2, 3]
	[1, 2, [3, [4], 5, 6], 7] becomes [1, 2, 3, 4, 5, 6, 7]

	Once it works the tests will pass

	*/

	return list
}


const countLetters = (sequence) => {
	let counts = {};
	/**

	Write a function that counts the number of unique letters in a string
	and returns:

	Example:
	'AAA' becomes { A: 3 }
	'AAACT' becomes { A: 3, C: 2, T: 1 }
	'AAACTGGT' becomes { A: 3, C: 2, G: 2, T: 2 }

	Once it works the tests will pass
	*/

	return counts
}


exports.countLetters = countLetters;
exports.fibonacci = fibonacci;
exports.flatten = flatten;
