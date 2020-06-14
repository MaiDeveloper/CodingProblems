/**
 * Generate Parentheses
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * For example, given n = 3, a solution set is:
 * 
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 */

const generateParentheses = n => {
  return generate(n, n);
};

const generate = (left, right, parentheses = [], current = '') => {
  if (left === 0 && right === 0) {
    return parentheses.push(current);
  }

  if (left > 0) {
    generate(left - 1, right, parentheses, current + '(');
  }

  if (left < right) {
    generate(left, right - 1, parentheses, current + ')');
  }

  return parentheses;
};

export default generateParentheses;