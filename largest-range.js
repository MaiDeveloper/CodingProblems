const assert = require('assert');

/**
 * Largest Range
 * Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of numbers contained in that array. The first number in the output array should be the first number in the range while the second number should be the last number in the range. A range of numbers is defined as a set of numbers that come right after each other in the set of real integers. For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5. Note that numbers do not need to be ordered or adjacent in the array in order to form a range. Assume that there will only be one largest range.
 */

function largestRange(array) {
  const nums = {};
  let ans = [];
  let largest = 0;

  for (let n of array) {
    nums[n] = true;
  }

  for (let n of array) {
    let len = 1;
    let min = n - 1;
    let max = n + 1;

    nums[n] = false;

    while (nums[min] === true) {
      nums[min] = false;
      len++;
      min--;
    }

    while (nums[max] === true) {
      nums[max] = false;
      len++;
      max++;
    }

    if (len > largest) {
      largest = len;
      ans = [min + 1, max - 1];
    }
  }

  return ans;
}


function largestRange2(array) {
  const nums = {};
  let ans = [];
  let largest = 0;

  for (let n of array) {
    nums[n] = true;
  }

  for (let n of array) {
    if (nums[n] === false) {
      continue;
    }

    nums[n] = false;

    let currLen = 1;
    let left = n - 1;
    let right = n + 1;

    while (nums[left] === true) {
      nums[left] = false;
      currLen++;
      left--;
    }

    while (nums[right] === true) {
      nums[right] = false;
      currLen++;
      right++;
    }

    if (currLen > largest) {
      largest = currLen;
      ans = [left + 1, right - 1];
    }
  }

  return ans;
}

function largestRangeBasic(array) {
  if (array.length === 1) {
    return [array[0], array[0]];
  }

  array.sort((a, b) => a - b);

  let largest = 0;
  let ans = [];
  let i = 0;
  let j = 0;

  for (let l = array.length; j < l; j++) {
    if (j === l - 1 || array[j] !== array[j + 1] - 1) {
      let curr = j - i + 1;

      if (curr > largest) {
        largest = curr;
        ans = [array[i], array[j]];
        i = j + 1;
      }
    }
  }



  return ans;
}


console.time('Run Time');

assert.deepStrictEqual(largestRange([1]), [1, 1]);
assert.deepStrictEqual(largestRange([1, 2]), [1, 2]);
assert.deepStrictEqual(largestRange([4, 2, 1, 3]), [1, 4]);
assert.deepStrictEqual(largestRange([4, 2, 1, 3, 6]), [1, 4]);
assert.deepStrictEqual(largestRange([8, 4, 2, 10, 3, 6, 7, 9, 1]), [6, 10]);

console.timeEnd('Run Time');