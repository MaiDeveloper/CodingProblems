/**
 * Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * Two sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @time complexity: O(n)
 * @space complexity: O(n)
 */
function twoSumOptimized(nums, target) {
  const ans = {};

  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];

    if (ans[val] !== undefined) {
      return [ans[val], i];
    }

    ans[nums[i]] = i;
  }
};

/**
 * Two sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @time complexity: O(n^2)
 * @space complexity: O(1)
 */
function twoSumNestedLoop(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const assert = require('chai').assert;

describe('Two Sum', () => {
  describe('#twoSumOptimized', () => {
    it('should return the correct indices', () => {
      assert.deepEqual(twoSumOptimized([2, 7, 11, 15], 9), [0, 1]);
      assert.deepEqual(twoSumOptimized([2, 7, 11, 15], 13), [0, 2]);
    });
    it('should return undefined', () => {
      assert.deepEqual(twoSumOptimized([2, 7, 11, 15], 14), undefined);
    });
  });
  describe('#twoSumNestedLoop', () => {
    it('should return the correct indices', () => {
      assert.deepEqual(twoSumNestedLoop([2, 7, 11, 15], 9), [0, 1]);
      assert.deepEqual(twoSumNestedLoop([2, 7, 11, 15], 13), [0, 2]);
    });
    it('should return undefined', () => {
      assert.deepEqual(twoSumNestedLoop([2, 7, 11, 15], 14), undefined);
    });
  });
});