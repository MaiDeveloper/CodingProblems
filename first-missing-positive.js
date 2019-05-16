/**
 * First Missing Positive
 *
 * Given an unsorted integer array, find the smallest missing positive integer.
 *
 * Example 1:
 *
 * Input: [1,2,0]
 * Output: 3
 *
 * Example 2:
 *
 * Input: [3,4,-1,1]
 * Output: 2
 *
 * Example 3:
 *
 * Input: [7,8,9,11,12]
 * Output: 1
 *
 * Note:
 *
 * Your algorithm should run in O(n) time and uses constant extra space.
 */


/**
 * First Missing Positive
 * @param {number[]} nums
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
function firstMissingPositive(nums) {
  const contains = new Set();
  let num = 1;

  for (let n of nums) {
    contains.add(n);
  }

  while (true) {
    if (!contains.has(num)) {
      return num;
    }
    num++;
  }
}

/**
 * First Missing Positive
 * @param {number[]} nums
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
function firstMissingPositiveUsingSort(nums) {
  let num = 1;

  nums.sort((a, b) => a - b);

  for (let n of nums) {
    if (n === num) {
      num++;
    } else if (n > num) {
      return num;
    }
  }

  return num;
}

const assert = require('chai').assert;

describe('First Missing Positive', () => {

  it('should return 3 when [1,2,0] is given', () => {
    assert.strictEqual(firstMissingPositive([1,2,0]), 3);
  });

  it('should return 2 when [3,4,-1,1] is given', () => {
    assert.strictEqual(firstMissingPositive([3,4,-1,1]), 2);
  });

  it('should return 1 when [7,8,9,11,12] is given', () => {
    assert.strictEqual(firstMissingPositive([7,8,9,11,12]), 1);
  });

});
