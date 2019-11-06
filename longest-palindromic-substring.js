/**
 * Longest Palindromic Substring
 *
 * Given a string str, find the longest palindromic substring in str.
 *
 * Example 1:
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example 2:
 *
 * Input: "cbbd"
 * Output: "bb"
 */


/**
 * Return the length of longest substring
 *
 * @param {string} str
 * @return {string}
 * @time complexity: O(n2)
 * @space complexity: O(1)
 * @example
 * longestPalindromeSubstring('babad') => 'bab'
 * longestPalindromeSubstring('cbbd') => 'bb'
 */
function longestPalindromeSubstring(str) {
  if (str === undefined || str === null || str.length < 1) {
    return '';
  }

  let start = 0;
  let maxLen = 0;

  for (let i = 0, l = str.length; i < l; i++) {
    let len1 = expandAroundCenter(str, i, i);
    let len2 = expandAroundCenter(str, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return str.substr(start, maxLen);
}

/**
 * Return the length of longest substring
 *
 * @param {string} str
 * @param {number} left
 * @param {number} right
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(1)
 * @example
 * expandAroundCenter('abcdefg', 3, 3) => 1
 * expandAroundCenter('abedefg', 3, 3) => 3
 * expandAroundCenter('abeddefg', 3, 4) => 4
 */
function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str.charAt(left) === str.charAt(right)) {
    left--;
    right++;
  }
  return right - left - 1;
}



var longestPalindromeSubseq = function(str) {
  const n = str.length;
  const table = new Array(n).fill(null).map(() => new Array(n).fill(false));

  let maxLength = 1;
  let start = 0;

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    table[i][i] = true;
  }

  // check for sub-string of length 2.
  for (let i = 0; i < n - 1; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      table[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for lengths greater than 2. k is length of substring
  for (let k = 3; k <= n; k++) {
    for (let i = 0; i <= n - k; i++) {
      // Get the ending index of substring from
      // starting index i and length k
      let j = i + k - 1;

      // checking for sub-string from ith index to
      // jth index iff str.charAt(i+1) to
      // str.charAt(j-1) is a palindrome
      if (table[i + 1][j - 1] && str.charAt(i) === str.charAt(j)) {
        table[i][j] = true;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }

    }
  }
  return str.substr(start, maxLength); // return length of LPS
};


const assert = require('chai').assert;

describe('Longest Palindromic Substring', () => {

  it('should return \'aba\' when \'babad\' is given', () => {
    assert.strictEqual(longestPalindromeSubstring('babad'), 'bab');
  });

  it('should return \'bb\' when \'cbbd\' is given', () => {
    assert.strictEqual(longestPalindromeSubstring('cbbd'), 'bb');
  });

});

console.log(longestPalindromeSubseq('forgeeksskeegfor'));       //  geeksskeeg
console.log(longestPalindromeSubstring('forgeeksskeegfor'));    // geeksskeeg

// describe('expandAroundCenter', () => {

//   it('should return 1', () => {
//     assert.strictEqual(expandAroundCenter('abcbbca', 2, 2), 3);
//   });

//   it('should return 4', () => {
//     assert.strictEqual(expandAroundCenter('abcbbca', 3, 4), 4);
//   })

// });