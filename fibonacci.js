/**
 * Rosetta Code: Fibonacci sequence
 * Write a function to generate the nth Fibonacci number.
 *
 * The nth Fibonacci number is given by :
 *
 * Fn = Fn-1 + Fn-2
 *
 * The first two terms of the series are 0, 1.
 *
 * Hence, the series is : 0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci_recursive(n) {
  if (n === 1) {
    return 0;
  } if (n === 2) {
    return 1;
  }
  return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}

function fibonacci(n) {
  const nums = [0, 1];

  if (n <= 2) {
    return nums[n - 1];
  }

  for (let i = 2; i < n; i++) {
    const next = nums[0] + nums[1];
    nums[0] = nums[1];
    nums[1] = next;
  }
  return nums[1];
}

console.log(fibonacci_recursive(3));  // 1
console.log(fibonacci_recursive(5));  // 3
console.log(fibonacci_recursive(10)); // 34

console.log("===");

console.log(fibonacci(3));  // 1
console.log(fibonacci(5));  // 3
console.log(fibonacci(10)); // 34