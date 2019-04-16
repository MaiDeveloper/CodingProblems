/**
 * Factors of an integer
 *
 * Write a function that returns the factors of a positive integer.
 *
 * These factors are the positive integers by which the number being factored can be divided to yield a positive integer result.
 */

function factors (num) {
  const nums = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      nums.push(i);
    }
  }

  return nums;
}


console.log(factors(45)); // should return [1,3,5,9,15,45]
console.log(factors(53)); //should return [1,53]
console.log(factors(64)); //should return [1,2,4,8,16,32,64]