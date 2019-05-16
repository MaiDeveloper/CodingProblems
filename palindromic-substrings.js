/**
 * Palindromic Substrings
 *
 * Given a string, your task is to count how many palindromic substrings in this string.
 *
 * The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
 *
 * Example 1:
 *
 * Input: "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 *
 * Example 2:
 *
 * Input: "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 */

/**
 * Palindromic String
 * @param {string} s
 * @return {number}
 * @time complexity: O(n^2) where n is the length of s, in each iteration it might do O(n) work
 * @space complexity: O(1)
 */
function palindromicString(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count += expandFromCenter(s, i, i);     // Handle odd palindrome like aba
    count += expandFromCenter(s, i, i + 1); // Handle even palindrome like abba
  }

  return count;
};

/**
 * Expand from Center
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @return {number} the maximum number of characters that can be form a palindrome
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
function expandFromCenter(s, left, right) {
  let count = 0;

  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    count++;
    left--;
    right++;
  }

  return count;
}

const assert = require('chai').assert;

describe('Palindromic Substrings', () => {

  it('should return 3 when \'abc\' is given', () => {
    assert.strictEqual(palindromicString('abc'), 3);
  });

  it('should return 6 when \'aaa\' is given', () => {
    assert.strictEqual(palindromicString('aaa'), 6);
  });

  it('should return 0 when \'\' is given', () => {
    assert.strictEqual(palindromicString(''), 0);
  });

  it('should return 1 when \'a\' is given', () => {
    assert.strictEqual(palindromicString('a'), 1);
  });

});