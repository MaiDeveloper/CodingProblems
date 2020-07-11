/**
 * Shuffle an Array
 * 
 * Shuffle a set of numbers without duplicates.
 * 
 * Example:
 * 
 * // Init an array with set 1, 2, and 3.
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 * 
 * // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
 * solution.shuffle();
 * 
 * // Resets the array back to its original configuration [1,2,3].
 * solution.reset();
 * 
 * // Returns the random shuffling of array [1,2,3].
 * solution.shuffle();
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.nums;
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  const nums = this.nums.slice();
  
  const swap = (i, j) => {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  };
  
  for (let i = nums.length - 1; i >= 0; i--) {
      const r = Math.floor(Math.random() * i);
      swap(i, r);
  }
  
  return nums;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/