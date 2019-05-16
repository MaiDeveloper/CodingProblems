/**
 * Reverse Integer
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Example 1:
 *
 * Input: 123
 * Output: 321
 *
 * Example 2:
 *
 * Input: -123
 * Output: -321
 *
 * Example 3:
 *
 * Input: 120
 * Output: 21
 *
 */

/**
 * @param {number} x
 * @return {number}
 * @time complexity: O(n) n is the number of digits in x
 * @space complexity: O(1)
 */
function reverseInteger(x) {
  let num = 0;

  while (x !== 0) {
    num = num * 10 + x % 10; // Push digits one position forward (num * 10) and add last digit (x % 10) that pop from x
    x = Math.trunc(x / 10); // Only keep integer, so discards decimal points
  }

  return num;
};

const assert = require('chai').assert;

describe('Reverse Integer', () => {

  it('should reverse a positive integer', () => {
    assert.strictEqual(reverseInteger(123), 321);
  });

  it('should reverse an nagative integer', () => {
    assert.strictEqual(reverseInteger(-123), -321);
  });

  it('should reverse integer with trailing zero', () => {
    assert.strictEqual(reverseInteger(120), 21);
  });

});