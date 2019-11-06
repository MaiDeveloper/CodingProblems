/**
 * Remove Outermost Parentheses
 *
 * A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
 *
 * A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.
 *
 * Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
 *
 * Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.
 *
 * Example 1:
 *
 * Input: "(()())(())"
 * Output: "()()()"
 * Explanation:
 * The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
 * After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 *
 * Example 2:
 *
 * Input: "(()())(())(()(()))"
 * Output: "()()()()(())"
 * Explanation:
 * The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
 * After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
 *
 * Example 3:
 *
 * Input: "()()"
 * Output: ""
 * Explanation:
 * The input string is "()()", with primitive decomposition "()" + "()".
 * After removing outer parentheses of each part, this is "" + "" = "".
 *
 * Note:
 *
 *     S.length <= 10000
 *     S[i] is "(" or ")"
 *     S is a valid parentheses string
 */

/**
 * @param {string} S
 * @return {string}
 * @time complexity: O(n) where n is the length of S
 * @space complexity: O(n)
 */
var removeOuterParentheses = function(S) {
  let bal = 0;
  let res = '';

  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === '(') {
      if (bal !== 0) {
        res += S.charAt(i);
      }
      bal++;
    } else {
      if (bal !== 1) {
        res += S.charAt(i);
      }
      bal--;
    }
  }

  return res;
};


const assert = require('chai').assert;

describe('Remove Outermost Parentheses', () => {

  it('should return \'()()()\' when \'(()())(())\' is given', () => {
    assert.strictEqual(removeOuterParentheses('(()())(())'), '()()()');
  });

  it('should return \'()()()\' when \'(()())(())(()(()))\' is given', () => {
    assert.strictEqual(removeOuterParentheses('(()())(())(()(()))'), '()()()()(())');
  });

  it('should return \'\' when \'()()\' is given', () => {
    assert.strictEqual(removeOuterParentheses('()()'), '');
  });

});
