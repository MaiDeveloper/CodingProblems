/**
 * 
 * Maximum Number of Occurrences of a Substring
 * 
 * Given a string s, return the maximum number of ocurrences of any substring under the following rules:
 * 
 * The number of unique characters in the substring must be less than or equal to maxLetters.
 * The substring size must be between minSize and maxSize inclusive.
 *  
 * 
 * Example 1:
 * 
 * Input: s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
 * Output: 2
 * Explanation: Substring "aab" has 2 ocurrences in the original string.
 * It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).
 * Example 2:
 * 
 * Input: s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
 * Output: 2
 * Explanation: Substring "aaa" occur 2 times in the string. It can overlap.
 * Example 3:
 * 
 * Input: s = "aabcabcab", maxLetters = 2, minSize = 2, maxSize = 3
 * Output: 3
 * Example 4:
 * 
 * Input: s = "abcde", maxLetters = 2, minSize = 3, maxSize = 3
 * Output: 0
 *  
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 10^5
 * 1 <= maxLetters <= 26
 * 1 <= minSize <= maxSize <= min(26, s.length)
 * s only contains lowercase English letters.
 */

/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */

var maxFreq = function(s, maxLetters, minSize, maxSize) {
  
  const letters = {};
  const count = {};
  let start = 0;
  let maxCount = 0;
  
  for (let i = 0; i < s.length; i++) {
    
    const char = s.charAt(i);
    
    letters[char] = (letters[char] || 0) + 1;
    
    if (i - start + 1 > minSize) {
      const startChar = s.charAt(start);
      
      letters[startChar]--;
      
      if (letters[startChar] === 0) {
        delete letters[startChar];
      }
      
      start++;
    }
    
    if (i - start + 1 === minSize && Object.keys(letters).length <= maxLetters) {
      const seq = s.substring(start, i + 1);
      
      count[seq] = (count[seq] || 0) + 1;
      
      maxCount = Math.max(maxCount, count[seq]);
    }
    
  }
  
  return maxCount;
}


const maxFreq = (s, maxLetters, minSize, maxSize) => {
  
  const count = {};
  let maxCount = 0;
  
  for (let i = 0; i <= s.length - minSize; i++) {
    const seq = s.substr(i, minSize);
    
    if (getLetterCount(seq) <= maxLetters) {
      if (count[seq] === undefined) {
        count[seq] = 1;
      } else {
        count[seq]++;
      }
  
      maxCount = Math.max(maxCount, count[seq]);
    }
  }
  
  return maxCount;
};

const getLetterCount = str => {
  const letter = {};
  let count = 0;
  
  for (const c of str) {
    if (letter[c] === undefined) {
      count++;
      letter[c] = true;
    }
  }
  
  return count;
};