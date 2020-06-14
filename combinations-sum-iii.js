/**
 * Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
 * 
 * Note:
 * 
 * All numbers will be positive integers.
 * The solution set must not contain duplicate combinations.
 * Example 1:
 * 
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 * Example 2:
 * 
 * Input: k = 3, n = 9
 * Output: [[1,2,6], [1,3,5], [2,3,4]]
 */

/**
 * @param {number} count 
 * @param {number} sum 
 * @return {number[][]}
 */
const combinationSum3 = (count, sum) => {
  return getCombinations(count, sum);
};

/**
 * 
 * @param {number} count 
 * @param {number} sum 
 * @param {number} num 
 * @param {number[]} temp 
 * @param {number[][]} combinations 
 */
const getCombinations = (count, sum, num = 1, temp = [], combinations = []) => {
  if (temp.length > count) {
    return;
  }

  if (temp.length === count && sum === 0) {
    return combinations.push(temp.slice());
  }

  for (let i = num; i <= 9; i++) {
    temp.push(i);
    getCombinations(count, sum - i, i + 1, temp, combinations);
    temp.pop();
  }

  return combinations;
};

export default combinationSum3;