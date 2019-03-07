/**
 * Algorithms: No Repeats Please
 *
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
 *
 * For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */

/**
 * No Repeats Please
 * @author Mike Mai
 * @param {String} str
 * @return {Number}
 *
 * @example
 * permAlone('aab') // 2  [aba, aba]
 */
function permAlone(str) {
    const result = [];

    backtracking(str.split(''), 0, str.length - 1, result);

    return result.length;
}

function backtracking(arr, start, len, result) {
    if (start === len) {
        if (!isConsecutive(arr)) {
          result.push(arr.join(''));
        }
        return;
    }

    for (let i = start; i <= len; i++) {
        swap(arr, i, start);
        backtracking(arr, start + 1, len, result);
        swap(arr, start, i);
    }
}

/**
 * Swap array element
 * @param {Array} arr
 * @param {number} i first element index
 * @param {number} j second element index
 * @return {void}
 *
 * @example
 * swap(['a', 'b', 'c'], 0, 2) // ['c', 'b', 'a']
 */
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/**
 * Check whether or not a string contains consecutive letters
 * @param {Array} arr
 * @param {Boolean}
 */
function isConsecutive(arr) {
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === arr[i - 1]) {
      return true;
    }
  }
  return false;
}

permAlone('aab');