/**
 * Reshape the Matrix
 *
 * In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.
 *
 * You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
 *
 * The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
 *
 * If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
 *
 * Example 1:
 *
 * Input:
 * nums =
 * [[1,2],
 *  [3,4]]
 * r = 1, c = 4
 * Output:
 * [[1,2,3,4]]
 * Explanation:
 * The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
 *
 * Example 2:
 *
 * Input:
 * nums =
 * [[1,2],
 *  [3,4]]
 * r = 2, c = 4
 * Output:
 * [[1,2],
 *  [3,4]]
 * Explanation:
 * There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * @time complexity: O(m*n) where m and n refers to the number of rows and columns in the given matrix
 * @space complexity: O(m*n)
 */
var matrixReshape = function(nums, r, c) {
  if (nums.length === 0 || nums.length * nums[0].length !== r * c) {
    return nums;
  }

  const res = new Array(r).fill(null).map(() => new Array(c));
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      res[Math.floor(count / c)][count % c] = nums[i][j];
      count++;
    }
  }

  return res;
};

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * @time complexity: O(m*n) where m and n refers to the number of rows and columns in the given matrix
 * @space complexity: O(m*n)
 */
var matrixReshapeWithModule = function(nums, r, c) {
  if (nums.length === 0 || nums.length * nums[0].length !== r * c) {
    return nums;
  }

  const res = new Array(r).fill(null).map(() => new Array(c));
  let rIdx = 0;
  let cIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      res[rIdx][cIdx] = nums[i][j];
      cIdx++;

      if (cIdx === c) {
        rIdx++;
        cIdx = 0;
      }
    }
  }

  return res;
};


const assert = require('chai').assert;

describe('Reshape the Matrix', () => {

  it('should return reshaped matrix', () => {
    const original = [[1,2],[3,4]];
    const result = matrixReshape(original, 1, 4);
    assert.deepEqual(result, [[1,2,3,4]]);
  });

  it('should return original matrix', () => {
    const original = [[1,2],[3,4]];
    const result = matrixReshape(original, 2, 4);
    assert.deepEqual(result, original);
  });

});

