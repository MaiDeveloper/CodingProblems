/**
 * Maximum Subarray
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 * 
 */

/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * @param {number[]} nums 
 * @return {number}
 * @time complexity: O(N)
 * @space complexity: O(1)
 */
export const maxSubArrayGreedy = nums => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let maxSum = nums[0];
  let curSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}


const maximumSubarray = nums => {
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }

    sum = Math.max(sum, nums[i]);
  }

  return sum;
};

function helper(nums, left, right) {
  if (left === right) return nums[left];
  
  const mid = Math.floor((left + right) / 2);
  
  const leftSum = helper(nums, left, mid);
  const rightSum = helper(nums, mid + 1, right);
  const sum = combine(nums, left, right, mid);
  
  return Math.max(leftSum, rightSum, sum);
}

function combine(nums, left, right, mid) {
  if (left === right) return nums[left];

  let leftSum = Number.MIN_SAFE_INTEGER;
  let currSum = 0;
  
  for (let i = mid; i >= left; i--) {
      currSum += nums[i];
      leftSum = Math.max(leftSum, currSum);
  }
  
  let rightSum = Number.MIN_SAFE_INTEGER;
  currSum = 0;
  
  for (let i = mid + 1; i <= right; i++) {
      currSum += nums[i];
      rightSum = Math.max(rightSum, currSum);
  }
  
  return leftSum + rightSum;
}

/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function(nums) { 
  
  return helper(nums, 0, nums.length - 1);
  
  
  
//     let maxSum = nums[0];
  
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] > 0) {
//             nums[i] += nums[i - 1];
//         }
//         console.log(nums[i]);
//         maxSum = Math.max(maxSum, nums[i]);
//     }
  
//     return maxSum;
  
//     let largest = nums[0];
  
//     for (let i = 0, l = nums.length; i < l; i++) {
//         let tmp = nums[i];
//         let tmpLargest = nums[i];
//         for (let j = i + 1; j < l; j++) {
//             tmp += nums[j];
//             if (tmp <= 0) break;
//             if (tmp > tmpLargest) {
//                 tmpLargest = tmp;
//             }
//         }
//         if (tmpLargest > largest) {
//             largest = tmpLargest;
//         }
//     }
  
//     return largest;
};