/**
 * Is Subsequence
 * 
 * Given a string s and a string t, check if s is subsequence of t.
 * 
 * A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).
 * 
 * Follow up:
 * If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?
 * 
 * Credits:
 * Special thanks to @pbrother for adding this problem and creating all test cases.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 * Example 2:
 * 
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 *  
 * 
 * Constraints:
 * 
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10^4
 * Both strings consists only of lowercase characters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @time complexity: (n)
 * @space complexity: O(1)
 */
const isSubsequence = (s, t) => {
  let i = 0;
  
  for (const char of t) {
    if (char === s[i]) {
      i++;
      if (i === s.length) {
        return true;
      }
    }
  }
  
  return i === s.length;
};


const isSubsequence2 = (s, t) => {
  return helper(s, t, 0, 0);
};

const helper = (s, t, left, right) => {
  if (left === s.length) {
    return true;
  }

  if (right === t.length) {
    return false;
  }

  if (s[left] === t[right]) {
    left++;
  }

  right++;

  return helper(s, t, left, right);
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence3 = (s, t, sIndex = 0, tIndex = 0) => {
  const sourceLen = s.length;
  const targetLen = t.length;
  
  if (sourceLen === 0) {
      return true;
  }
  
  const dp = new Array(targetLen + 1).fill(null).map(() => new Array(sourceLen + 1).fill(0));
  
  for (let row = 0; row <= targetLen.length; row++) {
      for (let col = 0; col <= sourceLen.length; col++) {
          if (t[row - 1] === s[col - 1]) {
              dp[row][col] = dp[row - 1][col - 1] + 1;
          } else {
              dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
          }
      }
      
      if (dp[row][col] === sourceLen) {
          return true;
      }
  }
  
  return false;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence4 = (s, t) => {
  const indexes = {};
  
  for (let i = 0; i < t.length; i++) {
      if (indexes[t[i]] === undefined) {
          indexes[t[i]] = [];
      }
      indexes[t[i]].push(i);
  }
  
  let currIndex = -1;
  
  for (let char of s) {
      if (indexes[char] === undefined) {
          return false;
      }
      
      let found = false;
      
      for (let i = 0; i < indexes[char].length; i++) {
          if (indexes[char][i] > currIndex) {
              found = true;
              break;
          }
      }
      
      if (!found) {
          return false;
      }
  }
  
  return true;
  
}