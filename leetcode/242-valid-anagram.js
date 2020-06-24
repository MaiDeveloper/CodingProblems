/**
 * Valid Anagram
 * 
 * 
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * 
 * Example 1:
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @time complexity: O(n) where n is size of the shortest string
 * @space complexity: O(n) where n is the total number of unique characters in the shortest string
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  
  const map = {};
  let source;
  let target;
  
  if (s.length < t.length) {
      source = s;
      target = t;
  } else {
      source = t;
      target = s;
  }
  
  for (let i = 0; i < source.length; i++) {
      if (map[source[i]] === undefined) {
          map[source[i]] = 1;
      } else {
          map[source[i]]++;
      }
  }
  
  for (let i = 0; i < target.length; i++) {
      if (map[target[i]] === undefined || map[target[i]] === 0) {
          return false;
      } else {
          map[target[i]]--;
      }
  }
  
  return true;
};