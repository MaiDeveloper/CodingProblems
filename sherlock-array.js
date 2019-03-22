/**
 * Find an element in array such that sum of left array is equal to sum of right array
 * Given, an array of size n. Find an element which divides the array in two sub-arrays with equal sum.
 *
 * Examples:
 *
 * Input : 1 4 2 5
 * Output : 2
 * Explanation : If 2 is the partition,
 *       subarrays are : {1, 4} and {5}
 *
 * Input : 2 3 4 1 4 5
 * Output : 1
 * Explanation : If 1 is the partition,
 *  Subarrays are : {2, 3, 4} and {4, 5}
 */


/**
 * We calculate the sum of the whole array except the first element in right_sum, considering it to be the partitioning element. Now, we traverse the array from left to right, subtracting an element from right_sum and adding an element to left_sum. The point where right_sum equals left_sum, we get the partition.
 */
function advanced(arr) {
  const n = arr.length;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 1; i < n; i++) {
    rightSum += arr[i];
  }

  for (let i = 0, j = 1; i < n; i++, j++) {
    leftSum += arr[i];
    rightSum -= arr[j];

    if (leftSum === rightSum) {
      return arr[j];
    }
  }

  return arr[0];
}

/**
 * We form a prefix and suffix sum arrays
 *
 * Given array : 1 4 2 5
 * Prefix Sum :  1 5 7 12
 * Suffix Sum :  12 11 7 5
 *
 * Now, we will traverse both prefix arrays.
 * The index at which they yield equal result,
 * is the index where the array is partitioned
 * with equal sum.
 */
function prefixAndSuffixArray(arr) {
  const n = arr.length;
  const prefix = new Array(n);
  const suffix = new Array(n);

  prefix[0] = arr[0];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  suffix[n-1] = arr[n-1];

  for (let i = n-2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + arr[i];
  }

  for (let i = 1; i < n - 1; i++) {
    if (prefix[i] === suffix[i]) {
      return arr[i];
    }
  }
  return arr[0];
}

function basic(arr) {
  let left = 0;
  let right = 0;

  for (let i = 1, l = arr.length - 1; i <= l; i++) {
    left = sum(0, i-1);
    right = sum(i+1, l);

    if (left === right) {
      return arr[i];
    }
  }

  function sum(i, j) {
    let s = 0;
    while (i <= j) {
      s += arr[i];
      i++;
    }
    return s;
  }
  return arr[0];
}



console.log(advanced([1,4,2,5]));     // 2
console.log(advanced([2,3,4,1,4,5])); // 1
console.log(advanced([2, 0, 0, 0])); // 2

console.log(prefixAndSuffixArray([1,4,2,5]));     // 2
console.log(prefixAndSuffixArray([2,3,4,1,4,5])); // 1
console.log(prefixAndSuffixArray([2, 0, 0, 0])); // 2

console.log(basic([1,4,2,5]));     // 2
console.log(basic([2,3,4,1,4,5])); // 1
console.log(basic([2, 0, 0, 0])); // 2
