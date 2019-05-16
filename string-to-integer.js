/**
 * String to Integer
 *
 * Implement atoi which converts a string to an integer.
 *
 * The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
 *
 * The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
 *
 * If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
 *
 * If no valid conversion could be performed, a zero value is returned.
 *
 * Note:
 *
 *     Only the space character ' ' is considered as whitespace character.
 *     Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 *
 * Example 1:
 *
 * Input: "42"
 * Output: 42
 *
 * Example 2:
 *
 * Input: "   -42"
 * Output: -42
 * Explanation: The first non-whitespace character is '-', which is the minus sign.
 *              Then take as many numerical digits as possible, which gets 42.
 *
 * Example 3:
 *
 * Input: "4193 with words"
 * Output: 4193
 * Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
 *
 * Example 4:
 *
 * Input: "words and 987"
 * Output: 0
 * Explanation: The first non-whitespace character is 'w', which is not a numerical
 *              digit or a +/- sign. Therefore no valid conversion could be performed.
 *
 * Example 5:
 *
 * Input: "-91283472332"
 * Output: -2147483648
 * Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
 *              Thefore INT_MIN (−231) is returned.
 */

/**
 * String to Integer
 * @param {string} str
 * @return {number}
 * @time complexity: O(n)
 * @sapce complexity: O(1)
 */
function stringToInteger(str) {
  const max = 2147483647; // Math.pow(2, 31) - 1;
  const min = -2147483648; //Math.pow(-2, 31);

  let i = 0;
  let ans = 0;
  let sign = 1;

  // Skip whitespace
  while (str.charAt(i) === ' ')   {
    i++;
  }

  // Skip - or +
  // Change sign if needed
  if (str.charAt(i) === '-') {
    sign = -1;
    i++;
  } else if (str.charAt(i) === '+') {
    i++;
  }


  while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
    // Move digits forward and add current digit
    ans = ans * 10 + (+str.charAt(i));
    i++;
  }

  ans *= sign;

  return (ans > max ? max : (ans < min ? min : ans));
};


const assert = require('chai').assert;

describe('String to Integer', () => {

  it('should return an integer when the whole string only contains numerical characters', () => {
    assert.strictEqual(stringToInteger('42'), 42);
  });

  it('should return an integer when string starts with whitespace', () => {
    assert.strictEqual(stringToInteger('   -42'), -42);
  });

  it('should return an integer when string starts with numerical character', () => {
    assert.strictEqual(stringToInteger('4193 with words'), 4193);
  });

  it('should return 0 when string starts with non-numerical character and non-whitespace', () => {
    assert.strictEqual(stringToInteger('words and 987'), 0);
  });

  it('should return negative signed integer', () => {
    assert.strictEqual(stringToInteger('-91283472332'), -2147483648);
  });

  it('should return positive signed integer', () => {
    assert.strictEqual(stringToInteger('91283472332'), 2147483647);
  });

});