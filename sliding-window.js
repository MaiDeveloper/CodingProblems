const assert = require('assert');

function maxSum(arr, k) {
  if (arr.length < k) {
    return 0;
  }

  let max = 0;

  for (let i = 0; i < k; i++) {
    max += arr[i];
  }

  let cur = max;

  for (let i = k; i < arr.length; i++) {
    cur += arr[i] - arr[i - k];
    max = Math.max(max, cur);
  }

  return max;
}

console.time('Runtime');
assert.deepStrictEqual(maxSum([100, 200, 300, 400], 2), 700);
assert.deepStrictEqual(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), 39);
assert.deepStrictEqual(maxSum([2, 3], 3), 0);
console.timeEnd('Runtime');