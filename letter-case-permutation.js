/**
 * Letter Case Permutation
 * Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.
 * 
 * Examples:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * Input: S = "3z4"
 * Output: ["3z4", "3Z4"]
 * 
 * Input: S = "12345"
 * Output: ["12345"]
 * Note:
 * 
 * S will be a string with length between 1 and 12.
 * S will consist only of letters or digits.
 * 
 */

 const letterCasePermutation = (str, index = 0, newStr = '', ans = []) => {
    if (index === str.length) {
      return ans.push(newStr);
    }

    const char = str.charAt(index);
    index++;

    if (/[a-z]/i.test(char)) {
      letterCasePermutation(str, index, newStr + char.toLowerCase(), ans);
      letterCasePermutation(str, index, newStr + char.toUpperCase(), ans);
    } else {
      letterCasePermutation(str, index, newStr + char, ans);
    }

    return ans;
 };

 export default letterCasePermutation;