/**
 * Valid Perfect Square
 *
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 *
 * Note: Do not use any built-in library function such as sqrt.
 *
 * Example 1:
 *
 * Input: 16
 * Output: true
 *
 * Example 2:
 *
 * Input: 14
 * Output: false
 */

/**
 * @param {number} num
 * @return {boolean}
 * @time complexity: O(log n)
 * @space complexity: O(1)
 */
function isValidPerfectSquare(num) {
  // Binary Search
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const tmp = mid * mid;

    if (tmp === num) {
      return true;
    }

    if (tmp > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};


const assert = require('chai').assert;

describe('Valid Perfect Square', () => {

  it('should return true when 16 is given', () => {
    assert.deepEqual(isValidPerfectSquare(16), true);
  });

  it('should return false when 14 is given', () => {
    assert.deepEqual(isValidPerfectSquare(14), false);
  });

});