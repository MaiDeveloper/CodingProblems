/**
 * Palindrome Number
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * Example 1:
 *
 * Input: 121
 * Output: true
 *
 * Example 2:
 *
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 *
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Follow up:
 *
 * Coud you solve it without converting the integer to a string?
 */

/**
 * Palindrome Number
 * @param {number} x
 * @return {boolean}
 * @time complexity: O(log x) because we are dividing x by 10 in each iteration
 * @space complexity: O(1)
 */
function isPalindromeNumber(x) {
  // Negative number and positive number with trailing zero (except zero itself)
  // are not palindrome number
  if(x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let reverted = 0;

  while (x > reverted) {
    reverted = reverted * 10 + x % 10; // Push digits one position forward and add last digit that pop from x
    x = Math.floor(x / 10); // Only keep integer, so discards decimal points
  }

  // When the length of x is an odd number, remove the last digit (reverted / 10)
  // The middle digit doesn't matter in palindrome
  return x === reverted || x === Math.floor(reverted / 10);
};

const assert = require('chai').assert;

describe('Palindrome Number', () => {

  it('should return true', () => {
    assert.strictEqual(isPalindromeNumber(121), true);
  });

  it('should return false if it is an nagative number', () => {
    assert.strictEqual(isPalindromeNumber(-123), false);
  });

  it('should return false if the number ends with zero', () => {
    assert.strictEqual(isPalindromeNumber(10), false);
  });

});