/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */
function threeSum(nums, target) {
    const n = nums.length;
    const sets = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1, k = n - 1; j < k;) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                sets.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }

                while (j < k && nums[k] === nums[k + 1]) {
                    k++;
                }
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    return sets;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time complexity: O(n^3)
 * Space complexity: O(n)
 */
function bruteForce(nums, target) {
    const n = nums.length;
    const sets = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
      // Skip duplicate number
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      for (let j = i + 1; j < n - 1; j++) {
        // Skip duplicate number
        if (j > i + 1 && nums[j] === nums[j - 1]) continue;

        for (let k = j + 1; k < n; k++) {
          // Skip duplicate number
          if (k > j + 1 && nums[k] === nums[k - 1]) continue;

          if (nums[i] + nums[j] + nums[k] === target)
            sets.push([nums[i], nums[j], nums[k]]);
        }

      }
    }

    return sets;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */
function binarySearch(nums, target) {
  nums.sort((a, b) => a - b);

  const sets = [];
  const n = nums.length;
  let l = 0;
  let r = 0;
  let sum = 0;

  for (let i = 0; i < n - 2; i++) {
    // Skip duplicate number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    l = i + 1;
    r = n - 1;

    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if (sum === target) {
        sets.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;

        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }

        while (l < r && nums[r] === nums[r + 1]) {
          r--;
        }

      } else if (sum > target) {
        r--;
      } else {
        l++;
      }

    }
  }
  return sets;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */
function hashing(nums, target) {
  const sets = [];
  const n = nums.length;
  const mem = {};

  for (let i = 0; i < n - 2; i++) {
    const s = {};
    let curr_sum = target - nums[i];

    for (let j = i + 1; j < n; j++) {
      let val = curr_sum - nums[j];
      if (s[val] !== undefined) {
        let str = [nums[i], nums[j], val].sort((a, b) => a - b).join(',');
        if (mem[str] === undefined) {
          mem[str] = true;
          sets.push([nums[i], val, nums[j]]);
        }
      }
      s[nums[j]] = j;
    }
  }

  return sets;
}


console.log(hashing([-1, 0, 1, 2, -1, -4], 0));

// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]