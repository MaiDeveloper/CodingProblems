/**
 * Largest Continous Zero Sum Subarray
 * Given an array having both positive an negative integers . Your task is to complete the function maxLen which returns the length of maximum subarray with 0 sum . The function takes two arguments an array A and n where n is the size of the array A .
 *
 * Input:
 * The first line of input contains an element T denoting the No of test cases. Then T test cases follow. Each test case consist of 2 lines. The first line of each test case contains a number denoting the size of the array A. Then in the next line are space separated values of the array A .
 *
 * Output:
 * For each test case output will be the length of the largest subarray which has sum 0 .
 *
 * Constraints:
 * 1<=T<=100
 * 1<=N<=100
 * -1000<=A[]<=1000
 *
 * Example:
 * Input
 * 1
 * 8
 * 15  -2  2  -8  1  7  10 23
 *
 * Output
 * 5
 *
 * Explanation
 * In the above test case the  largest subarray with sum 0 will be -2  2  -8  1  7
 */

function longestContinousZeroSumSubArray(nums) {
  const n = nums.length;
  let max = 0;

  // Accumulate the nums
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }

  const map = {};

  for (let i = 0; i < n; i++) {
    let num = nums[i];

    if (num === 0) {
      max = Math.max(max, i + 1);
    } else if (map[num] !== undefined) {
      max = Math.max(max, i - map[num]);
    } else {
      map[num] = i;
    }
  }
  return max;
}

function longestContinousSumSubarray(nums, target) {
  const n = nums.length;
  const sums = [nums[0]];
  let max = 0;
  let ans = [];

  for (let i = 1; i < n; i++) {
    sums[i] = nums[i] + sums[i - 1];
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = sums[j] - (i > 0 ? sums[i - 1] : 0);

      if (sum === target && j - i + 1 > max) {
        max = j - i + 1;
        ans = nums.slice(i, j+1);
      }
    }
  }

  return ans;
}

console.log(longestContinousZeroSumSubArray([15, -2, 2, -8, 1, 7, 10, 23]));
console.log(longestContinousSumSubarray([15, -2, 2, -8, 1, 7, 10, 23], 10));