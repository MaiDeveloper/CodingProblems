/**
 * Verifying an Alien Dictionary
 *
 * In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
 *
 * Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.
 *
 *
 *
 * Example 1:
 *
 * Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 * Output: true
 * Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
 *
 * Example 2:
 *
 * Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
 * Output: false
 * Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
 *
 * Example 3:
 *
 * Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
 * Output: false
 * Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character .
 */

/**
 * @param {string} first
 * @param {string} second
 * @param {object} letters
 * @return {boolean}
 * @time complexity: O(N)
 * @space complexity: O(1)
 */
var isInOrder = function(first, second, letters) {
  const minLen = Math.min(first.length, second.length);

  for (let i = 0; i < minLen; i++) {
    const f = letters[first[i]];
    const s = letters[second[i]];

    if (f < s) {
      return true;
    } else if (f > s) {
      return false;
    }
  }

  return first.length <= second.length;
}

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * @time complexity: O(N)
 * @space complexity: O(1)
 */
var isAlienSorted = function(words, order) {
  const letters = {};

  for (let i = 0; i < order.length; i++) {
    letters[order[i]] = i;
  }

  for (let i = 1; i < words.length; i++) {
    if (!isInOrder(words[i-1], words[i], letters)) {
      return false;
    }
  }

  return true;
};

const assert = require('chai').assert;

describe('Palindromic Substrings', () => {

  it('should return true', () => {
    assert.strictEqual(isAlienSorted(["hello","leetcode"], 'hlabcdefgijkmnopqrstuvwxyz'), true);
  });

  it('should return false', () => {
    assert.strictEqual(isAlienSorted(["word","world","row"], 'worldabcefghijkmnpqstuvxyz'), false);
  });

  it('should return false according to lexicographical rules', () => {
    assert.strictEqual(isAlienSorted(["apple","app"], 'abcdefghijklmnopqrstuvwxyz'), false);
  });


});