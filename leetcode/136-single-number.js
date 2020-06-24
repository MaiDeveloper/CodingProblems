/**
 * Single Number
 * 
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * Example 1:
 * 
 * Input: [2,2,1]
 * Output: 1
 * Example 2:
 * 
 * Input: [4,1,2,1,2]
 * Output: 4
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
var singleNumber = function(nums) {
  let unique = nums[0];
  let i = 1;
  
  while (i < nums.length) {
      unique ^= nums[i];
      i++;
  }
  
  return unique;
};
