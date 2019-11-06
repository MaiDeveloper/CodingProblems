/**
 * Search a 2D Matrix
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 *
 *     Integers in each row are sorted from left to right.
 *     The first integer of each row is greater than the last integer of the previous row.
 *
 * Example 1:
 *
 * Input:
 * matrix = [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 *
 * Example 2:
 *
 * Input:
 * matrix = [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * target = 13
 * Output: false
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @time complexity: O(log(nm))
 * @space complexity: O(1)
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const midValue = matrix[Math.floor(midIndex / n)][midIndex % n];

    if (midValue === target) {
      return true;
    }

    if (midValue < target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }

  return false;
};


const assert = require('chai').assert;

describe('Search a 2D Matrix', () => {

  it('should return true', () => {
    const matrix = [
      [1,   3,  5,  7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ];
    assert.strictEqual(searchMatrix(matrix, 3), true);
  });

  it('should return false', () => {
    const matrix = [
      [1,   3,  5,  7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ];
    assert.strictEqual(searchMatrix(matrix, 13), false);
  });

});
