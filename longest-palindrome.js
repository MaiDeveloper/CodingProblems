/**
 * Longest Palindrome
 *
 * Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
 *
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 *
 * Note: Assume the length of given string will not exceed 1,010.
 *
 * Example:
 *
 * Input: "abccccdd"
 * Output: 7
 *
 * Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const map = {};
  let count = 0;

  for (let i = 0, l = s.length; i < l; i++) {
    const c = s[i];
    if (map[c] === 1) {
      map[c] = 0;
      count += 2;
    } else {
      map[c] = 1;
    }
  }

  return count < s.length ? count + 1 : count;
}


console.log(longestPalindrome('abccccdd')); // 7
