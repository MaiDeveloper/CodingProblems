/**
 * Project Euler: Problem 2: Even Fibonacci Numbers
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed nth term, find the sum of the even-valued terms.
 */


function fiboEvenSum(n) {
  let first = 0,
      second = 1,
      sum = 0,
      num = 0;

  for (let i = 0; i <= n; i++) {
    num = first + second;
    first = second;
    second = num;

    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

fiboEvenSum(10);