/**
 * From any string, we can form a subsequence of that string by deleting some number of characters (possibly no deletions).
 * 
 * Given two strings source and target, return the minimum number of subsequences of source such that their concatenation equals target. If the task is impossible, return -1.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: source = "abc", target = "abcbc"
 * Output: 2
 * Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".
 * Example 2:
 * 
 * Input: source = "abc", target = "acdbc"
 * Output: -1
 * Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.
 * Example 3:
 * 
 * Input: source = "xyz", target = "xzyxz"
 * Output: 3
 * Explanation: The target string can be constructed as follows "xz" + "y" + "xz".
 *  
 * 
 * Constraints:
 * 
 * Both the source and target strings consist of only lowercase English letters from "a"-"z".
 * The lengths of source and target string are between 1 and 1000.
 */

/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 * @time complexity: O(m ^ n) where m is the size of source, n is the size of target
 * @space complexity: O(1)
 */
const shortestWayBruteForce = (source, target) => {
  let i = 0;
  let count = 0;

  while (i < target.length) {
    count++;
    
    let found = false;
  
    for (let char of source) {
      if (target[i] === char) {
        found = true;
        i++;
      }
    }
  
    if (!found) {
      return -1;
    }
  }

  return count;
};

/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 * @time complexity: O(m + n) where m is the size source, n is the size of target
 * @space complexity: O(m)  where m is the size of source
 */
const shortestWayOptimized = (source, target) => {
  if (!source || !target) {
      return -1;
  }
  
  const map = {};
  
  for (let i = 0; i < source.length; i++) {
    map[source[i]] = map[source[i]] || [];
    map[source[i]].push(i);
  }
  
  let j = -1;
  let count = 1;
  
  for (let i = 0; i < target.length; i++) {
    const char = target[i];
    if (map[char] === undefined) {
      return -1;
    }
    
    let k = getIndex(map[char], j);
    
    if (k >= map[char].length) {
      count++;
      j = map[char][0];
    } else {
      j = map[char][k];
    }
  }
  
  return count;
};

const getIndex = (arr, target) => {
  let left = 0;
  let right = arr.length;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
      
    if (arr[mid] <= target ) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return left;
}

