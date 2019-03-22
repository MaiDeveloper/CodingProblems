/**
 * Find element in array that divides all array elements
 *
 * Given an array of n non-negative integers. Find such element in the array, that all array elements are divisible by it.
 *
 * Examples :
 *
 * Input : arr[] = {2, 2, 4}
 * Output : 2
 *
 * Input : arr[] = {2, 1, 3, 1, 6}
 * Output : 1
 *
 * Input: arr[] = {2, 3, 5}
 * Output : -1
 */

function findNumber(arr) {
  const n = arr.length;
  let ans = arr[0];

  for (let i = 0; i < n; i++) {
    ans = greatestCommonDivider(ans, arr[i]);
  }

  const index = arr.indexOf(ans);

  return index === -1 ? -1 : ans;
}

function greatestCommonDivider(a, b) {
  if (a === 0) {
    return b;
  }
  return greatestCommonDivider(b % a, a);
}


console.log(findNumber([2,2,4]));     // 2
console.log(findNumber([2,1,3,1,6])); // 1
console.log(findNumber([2,3,5]));     // -1
