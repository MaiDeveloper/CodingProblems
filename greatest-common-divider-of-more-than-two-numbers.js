/**
 * GCD of more than two (or array) numbers
 *
 * Given an array of numbers, find GCD of the array elements. In a previous post we find GCD of two number.
 *
 * Examples:
 *
 * Input  : arr[] = {1, 2, 3}
 * Output : 1
 *
 * Input  : arr[] = {2, 4, 6, 8}
 * Output : 2
 */

function gcd(arr) {
  let ans = arr[0];

  for (let num of arr) {
    ans = getGCD(ans, num);
  }

  return ans;
}

function getGCD(a, b) {
  if (a === 0) {
    return b;
  }
  return getGCD(b % a, a);
}

console.log(gcd([1,2,3]));    // 1
console.log(gcd([2,4,6,8]));  // 2
