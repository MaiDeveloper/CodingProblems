/**
 * Reverse Words in a String III
 * 
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 */

/**
 * @param {string} s
 * @return {string}
 * @time complexity: O(n)
 * @space complexity: O(n)
 */
var reverseWords = function(s) {
  let reverse = '';
  let current = '';
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
          reverse += current + ' ';
          current = '';
      } else {
          current = s[i] + current;
      }
  }
  
  return reverse + current;
};