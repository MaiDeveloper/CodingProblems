const assert = require('assert');
/**
 * Algorithms: Pairwise
 * Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
 *
 * You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.
 *
 * For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
 * Index	0	1	2	3	4
 * Value	7	9	11	13	15
 *
 * Below we'll take their corresponding indices and add them.
 *
 * 7 + 13 = 20 → Indices 0 + 3 = 3
 * 9 + 11 = 20 → Indices 1 + 2 = 3
 * 3 + 3 = 6 → Return 6
 */

function pairwise(arr, target) {
  let ans = 0;
  const nums = {};

  for (let i = 0, l = arr.length; i < l; i++) {
    const val = target - arr[i];

    if (nums[val] !== undefined && nums[val].length > 0) {
      ans += nums[val].shift() + i;
    } else {
      nums[arr[i]] = nums[arr[i]] || [];
      nums[arr[i]].push(i);
    }
  }
  return ans;
}


assert.deepStrictEqual(pairwise([1,4,2,3,0,5], 7), 11);
assert.deepStrictEqual(pairwise([1, 3, 2, 4], 4), 1);
assert.deepStrictEqual(pairwise([1, 1, 1], 2), 1);
assert.deepStrictEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
assert.deepStrictEqual(pairwise([], 100), 0);


