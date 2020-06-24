/**
 * Move Zeroes
 * 
 * 
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Example:
 * 
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Note:
 * 
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
var moveZeroes = function(nums) {
  
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      continue;
    }
    
    if (right !== left) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;    
    }

    left++;
  }    
};
  
  