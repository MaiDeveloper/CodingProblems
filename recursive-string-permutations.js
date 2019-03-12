/**
 * Permutation
 *
 * Write a recursive function for generating all permutations of an input string
 */
function permutation(str) {
  const result = [];

  backtracking(str.split(''), 0, str.length - 1, result);

  return result;

  function backtracking(str, start, end, result) {
    if (start === end) {
      result.push(str.join(''));
      return;
    }

    for (let i = start; i <= end; i++) {
      swap(str, i, start);
      backtracking(str, start + 1, end, result);
      swap(str, start, i);
    }
  }

  function swap(arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
}



console.log(permutation('cat'));