/**
 * Permutations II
 * 
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 * 
 * Example:
 * 
 * Input: [1,1,2]
 * Output:
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 */

/**
 * 
 * @param {number[]} nums 
 */
const permutationsII = nums => {
  return backtracking(nums);
};

const backtracking = (nums, temp =[], result = [], visited = {}) => {
  if (temp.length === nums.length) {
    return result.push([...temp]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }

    if (i > 0 && !visited[i - 1] && nums[i] === nums[i - 1]) {
      continue;
    }

    visited[i] = true;
    temp.push(nums[i]);

    backtracking(nums, temp, result, visited);

    temp.pop();
    visited[i] = false;
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = nums => {
  return backtracking2(nums, nums.length);
};

const backtracking2 = (nums, len, index = 0, result = [], visited = {}) => {
  if (index === len) {
      const key = nums.join('-');
      
      if (!visited[key]) {
          result.push(nums.slice());
          visited[key] = true;
      }
      
      return;
  }
  
  for (let i = index; i < len; i++) {
      swap(nums, index, i);
      backtracking(nums, len, index + 1, result, visited);
      swap(nums, i, index);
  }
  
  return result;
};

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

export default permutationsII;