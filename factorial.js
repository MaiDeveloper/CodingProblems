/**
 * Factorial
 *
 * Write a function to return the factorial of a number.
 * Factorial of a number is given by :
 *
 * n! = n * (n-1) * (n-2) * ..... * 1
 *
 * For example :
 * 3! = 3*2*1 = 6
 * 4! = 4*3*2*1 = 24
 *
 * Note :
 * 0! = 1
 */
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Get n numbers of factorials
 * @param {Number} n
 * @return {Number[]}
 * @example
 * factorial_nums(4) // [1, 1, 2, 6]
 * debug:
 * [1]
 * [1, 1],
 * [1, 1, 2]
 * [1, 1, 2, 6]
 */
function factorial_nums(n) {
  if (n <= 1) {
    return [1];
  }
  const nums = factorial_nums(n - 1);
  nums.push(nums[nums.length - 1] * (n - 1));
  return nums;
}

console.log(factorial(3));
console.log(factorial(4));

console.log(factorial_nums(3));
console.log(factorial_nums(4));