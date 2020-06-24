/**
 * Sqrt
 * 
 * Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
 */

 /**
 * @param {number} x
 * @return {number}
 * @time complexity: O(log n)
 * @space complexity: O(1)
 */
var mySqrt = function(x) {
  if (x < 2) {
      return x;
  }
  
  let left = 2;
  let right = Math.ceil(x / 2);
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      let num = mid * mid;
      
      if (num === x) {
          return mid;
      }
      
      if (num < x) {
          left = mid + 1;
      } else if (num > x) {
          right = mid - 1;
      }
  }
  
  return right;
};