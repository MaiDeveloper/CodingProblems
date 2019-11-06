/**
 * Count Binary Substring
 *
 * Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
 *
 * Substrings that occur multiple times are counted the number of times they occur.
 *
 * Example 1:
 *
 * Input: "00110011"
 * Output: 6
 * Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
 *
 * Notice that some of these substrings repeat and are counted the number of times they occur.
 *
 * Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
 *
 * Example 2:
 *
 * Input: "10101"
 * Output: 4
 * Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
 *
 * Note:
 * s.length will be between 1 and 50,000.
 * s will only consist of "0" or "1" characters.
 */

/**
 * Count Binary Substring
 * @param {string} s
 * @return {number}
 * @time complexity: O(n^2) where n is the length of s, in each iteration it might do O(n) work
 * @space complexity: O(1)
 */
var countBinarySubstrings = function(s) {
  let res = 0;
  let expandFromCenter = (s, left, right) => {
    let i = 1;

    while (s.charAt(left - i) === s.charAt(left) && s.charAt(right + i) === s.charAt(right)) {
      i++;
    }

    return i - 1;
  };

  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i - 1) !== s.charAt(i)) {
      res++; // 01 or 10
      res += expandFromCenter(s, i - 1, i);
    }
  }

  return res;
};


const assert = require('chai').assert;

describe('Count Binary Substrings', () => {

  it('should return 6 when \'00110011\' is given', () => {
    assert.strictEqual(countBinarySubstrings('00110011'), 6);
  });

  it('should return 4 when \'10101\' is given', () => {
    assert.strictEqual(countBinarySubstrings('10101'), 4);
  });

  it('should return 1 when \'0001\' is given', () => {
    assert.strictEqual(countBinarySubstrings('0001'), 1);
  });

  it('should return 0 when \'1\' is given', () => {
    assert.strictEqual(countBinarySubstrings('1'), 0);
  });

});

