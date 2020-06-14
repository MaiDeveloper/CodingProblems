/**
 * Palindrome Partitioning
 * 
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * 
 * Return all possible palindrome partitioning of s.
 * 
 * Example:
 * 
 * Input: "aab"
 * Output:
 * [
 *   ["aa","b"],
 *   ["a","a","b"]
 * ]
 */

const palindromePartitioning = str => {
  return backtracking(str);
};

/**
 * 
 * @param {string} str 
 * @param {number} index 
 * @param {string[]} list 
 * @param {string[][]} result 
 */
const backtracking = (str, index = 0, list = [], result = []) => {
  if (index === str.length) {
    return result.push(list.slice());
  }

  for (let i = index; i < str.length; i++) {
    const temp = str.substring(index, i + 1);

    if (isPalindrome(temp)) {
      list.push(temp);
      backtracking(str, i + 1, list, result);
      list.pop();
    }
  }

  return result;
};

/**
 * Check if the string is palindrome
 * @param {string} str 
 * @return {boolean}
 * @time complexity: O(N)
 * @space complexity: O(1)
 */
const isPalindrome = str => {
  let left = 0,
      right = str.length - 1;
  
  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

export default palindromePartitioning;