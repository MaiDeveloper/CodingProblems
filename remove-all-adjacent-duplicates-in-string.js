/**
 * Remove All Adjacent Duplicates In String
 *
 * Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
 *
 * We repeatedly make duplicate removals on S until we no longer can.
 *
 * Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
 *
 * Example 1:
 *
 * Input: "abbaca"
 * Output: "ca"
 * Explanation:
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 */

/**
 * @param {string} S
 * @return {string}
 * @time complexity: O(n) where n is the length of S
 * @space complexity: O(n)
 */
var removeDuplicates = function(S) {
    const stack = [];

    for (let c of S) {
        if (c !== stack[stack.length - 1]) {
            stack.push(c);
        } else {
            stack.pop();
        }
    }

    return stack.join('');
};


/**
 * @param {string} S
 * @return {string}
 * @time complexity: O(n) where n is the length of S
 * @space complexity: O(n)
 */
var removeDuplicatesAlternative = function(S) {
  const arr = S.split('');

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i-1]) {
      arr.splice(i-1, 2);
      i -= 2;
    }
  }

  return arr.join('');
};


const assert = require('chai').assert;

describe('Remove All Adjacent Duplicates In String', () => {

  it('should return \'ca\' when \'abbaca\' is given', () => {
    assert.strictEqual(removeDuplicates('abbaca'), 'ca');
  });

  it('should return \'\' when \'aabbacca\' is given', () => {
    assert.strictEqual(removeDuplicates('aabbacca'), '');
  });

  it('should return \'\' when \'\' is given', () => {
    assert.strictEqual(removeDuplicates(''), '');
  });

});
