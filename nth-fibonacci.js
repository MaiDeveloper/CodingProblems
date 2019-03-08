const assert = require('assert');

/**
 * Nth Fibonacci
 * The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.
 */

function getNthFibBasic(n) {
  if (n === 1) {
		return 0;
	} else if (n === 2) {
		return 1;
	}
	return getNthFib(n - 1) + getNthFib(n - 2);
}

function getNthFibMemorize(n, memorize = {1: 0, 2: 1}) {
	if (memorize[n] !== undefined) {
		return memorize[n];
	}
	memorize[n] = getNthFib(n - 1, memorize) + getNthFib(n - 2, memorize);
	return memorize[n];
}

function getNthFib(n) {
  if (n <= 1) {
    return 0;
  }

  const nums = [0, 1];
  let counter = 2;
  let nextNum;

  while (counter < n) {
    nextNum = nums[0] + nums[1];
    nums[0] = nums[1];
    nums[1] = nextNum;
    counter++;
  }

  return nums[1];
}

assert.strictEqual(getNthFib(1), 0);
assert.strictEqual(getNthFib(2), 1);
assert.strictEqual(getNthFib(3), 1);
assert.strictEqual(getNthFib(4), 2);
assert.strictEqual(getNthFib(14), 233);
assert.strictEqual(getNthFib(15), 377);
assert.strictEqual(getNthFib(16), 610);
assert.strictEqual(getNthFib(17), 987);
assert.strictEqual(getNthFib(18), 1597);

