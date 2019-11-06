/**
 * Minimum Size Subarray Sum
 *
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
 *
 * Example:
 *
 * Input: s = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: the subarray [4,3] has the minimal length under the problem constraint.
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
var minSubArrayLen = function(s, nums) {
  let res = Infinity;
  let sum = 0;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];

    while (sum >= s) {
      res = Math.min(res, j - i + 1);
      sum -= nums[i];
      i++;
    }
  }

  return res === Infinity ? 0 : res;
};


const assert = require('chai').assert;

describe('Minimum Size Subarray Sum', () => {

  it('should return the minimal length', () => {
    assert.strictEqual(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
  });

  it('should return 0 when there isn\' one', () => {
    assert.strictEqual(minSubArrayLen(30, [2, 3, 1, 2, 4, 3]), 0);
  });

});

