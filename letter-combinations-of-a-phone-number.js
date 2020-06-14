/**
 * Letter Combinations of a Phone Number
 * 
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * 
 * {
 *   2: 'abc',
 *   3: 'def',
 *   4: 'ghi',
 *   5: 'jkl',
 *   6: 'mno',
 *   7: 'pqrs',
 *   8: 'tuv',
 *   9: 'wxyz'
 * }
 * 
 * Example:
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits 
 * @return {string[]}
 * @time complexity: O(4^N)
 * @space complexity: O(4^N)
 */
const letterCombinationsOfAPhoneNumber = digits => {
  if (!digits) {
    return [];
  }

  const phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  const generate = (str = '', index = 0, output = []) => {
    if (index === digits.length) {
      return output.push(str);
    }

    for (const letter of phone[digits[index]]) {
      generate(str + letter, index + 1, output);
    }

    return output;
  };

  return generate();
};

export default letterCombinationsOfAPhoneNumber;