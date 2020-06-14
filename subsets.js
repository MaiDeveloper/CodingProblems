/**
 * Subsets
 * 
 * Given a set of distinct integers, nums, return all possible subsets (the power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * Input: nums = [1,2,3]
 * Output:
 * [
 *   [3],
 *   [1],
 *   [2],
 *   [1,2,3],
 *   [1,3],
 *   [2,3],
 *   [1,2],
 *   []
 * ]
 */

/**
 * @param {number[]} nums 
 * @return {number[][]}
 */
const subsets = nums => {
  return backtracking(nums);
};

const backtracking = (nums, index = 0, temp = [], result = []) => {
  // ADD TO THE RESULT SETS
  result.push(temp.slice());

  for (let i = index; i < nums.length; i++) {
    // ADD THE NUMBER TO THE CURRENT ARRAY
    temp.push(nums[i]);
    // CALL NEXT NUMBER
    backtracking(nums, i + 1, temp, result);
    // BACKTRACKING
    temp.pop();
  }

  return result;
};

const concat = (nums, index = 0, temp = [], result = []) => {
  result.push(temp);

  for (let i = index; i < nums.length; i++) {
    concat(nums, i + 1, temp.concat(nums[i]), result);
  }

  return result;
};

export default subsets;