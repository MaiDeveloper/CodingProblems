/**
 * Valid Parentheses
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *     Open brackets must be closed by the same type of brackets.
 *     Open brackets must be closed in the correct order.
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 * Input: "()"
 * Output: true
 *
 * Example 2:
 *
 * Input: "()[]{}"
 * Output: true
 *
 * Example 3:
 *
 * Input: "(]"
 * Output: false
 *
 * Example 4:
 *
 * Input: "([)]"
 * Output: false
 *
 * Example 5:
 *
 * Input: "{[]}"
 * Output: true
 */


/**
 * Validate Parentheses
 * @param {string} s
 * @return {boolean}
 * @time complexity: O(n)
 * @space complexity: O(n)
 */
function isValid(s) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const stack = [];

  for (let c of s) {
    const opening = pairs[c];

    if (opening) {
      stack.push(opening);
    } else if (c !== stack.pop()){
      return false;
    }
  }

  return stack.length === 0;
}


const assert = require('chai').assert;

describe('Valid Parentheses', () => {

  it('should return true when \'()\' is given', () => {
    assert.strictEqual(isValid('()'), true);
  });

  it('should return true when \'()[]{}\' is given', () => {
    assert.strictEqual(isValid('()[]{}'), true);
  });

  it('should return false when \'(]\' is given', () => {
    assert.strictEqual(isValid('(]'), false);
  });

  it('should return false when \'([)]\' is given', () => {
    assert.strictEqual(isValid('([)]'), false);
  });

  it('should return true when \'{[]}\' is given', () => {
    assert.strictEqual(isValid('{[]}'), true);
  });

});
