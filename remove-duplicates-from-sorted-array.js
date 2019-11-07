/**
 * Remove Duplicates from Sorted Array
 *
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Example 1:
 *
 * Given nums = [1,1,2],
 *
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 *
 * It doesn't matter what you leave beyond the returned length.
 *
 * Example 2:
 *
 * Given nums = [0,0,1,1,1,2,2,3,3,4],
 *
 * Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
 *
 * It doesn't matter what values are set beyond the returned length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */

function removeDuplicates(nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  nums.splice(i+1, nums.length - i);

  return i + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
function removeDuplicates2(nums) {
  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] === nums[i+1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}


const assert = require('chai').assert;

describe('Remove Duplicates from Sorted Array', () => {

  it('should return [1, 2]', () => {
    const nums = [1, 1, 2];
    const result = removeDuplicates(nums);

    assert.deepEqual(nums, [1, 2]);
    assert.strictEqual(result, 2);
  });

  it('should return [0, 1, 2, 3, 4]', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4];
    const result = removeDuplicates(nums);

    assert.deepEqual(nums, [0, 1, 2, 3, 4]);
    assert.strictEqual(result, 5);
  });

});
