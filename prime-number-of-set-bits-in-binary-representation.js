/**
 * Prime Number of Set Bits in Binary Representation
 *
 * Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.
 *
 * (Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)
 *
 * Example 1:
 *
 * Input: L = 6, R = 10
 * Output: 4
 * Explanation:
 * 6 -> 110 (2 set bits, 2 is prime)
 * 7 -> 111 (3 set bits, 3 is prime)
 * 9 -> 1001 (2 set bits , 2 is prime)
 * 10->1010 (2 set bits , 2 is prime)
 *
 * Example 2:
 *
 * Input: L = 10, R = 15
 * Output: 5
 * Explanation:
 * 10 -> 1010 (2 set bits, 2 is prime)
 * 11 -> 1011 (3 set bits, 3 is prime)
 * 12 -> 1100 (2 set bits, 2 is prime)
 * 13 -> 1101 (3 set bits, 3 is prime)
 * 14 -> 1110 (3 set bits, 3 is prime)
 * 15 -> 1111 (4 set bits, 4 is not prime)
 */

/**
 * Determine whether or not a given number is a prime number
 * @param {number} n
 * @return {boolean}
 * @time complexity: O(√n)
 * @space complexity: O(1)
 */
var isPrime = function(n) {
  if (n < 2) {
    return false;
  }

  const sqrt = Math.sqrt(n);

  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Get number of 1's in binary representation
 * @param {number} n
 * @return {number}
 * @time complexity: O(log n)
 * @space complexity: O(1)
 */
var getBit = function(n) {
  let count = 0;

  while (n > 0) {
    count += n % 2;
    n = Math.floor(n / 2);
  }

  return count;

  /*
  // Alternative
  let count = 0;

  while (n > 0) {
    n = n & (n - 1);
    count++;
  }

  return count;
  */
}
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 * @time complexity: O(d log d), where d = R - L
 * @space complexity: O(1)
 */
var countPrimeSetBits = function(L, R) {
  let res = 0;

  for (let i = L; i <= R; i++) {
    if (isPrime(getBit(i))) {
      res++;
    }
  }

  return res;
};


const assert = require('chai').assert;

describe('Prime Number of Set Bits in Binary Representation', () => {

  it('should return 4 when given L = 6 and R = 10', () => {
    assert.strictEqual(countPrimeSetBits(6, 10), 4);
  });

  it('should return 5 when given L = 10 and R = 15', () => {
    assert.strictEqual(countPrimeSetBits(10, 15), 5);
  });

});
