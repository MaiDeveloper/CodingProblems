/**
 * Longest Increasing Path in a Matrix
 *
 * Given an integer matrix, find the length of the longest increasing path.
 *
 * From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).
 *
 * Example 1:
 *
 * Input: nums =
 * [
 *   [9,9,4],
 *   [6,6,8],
 *   [2,1,1]
 * ]
 * Output: 4
 * Explanation: The longest increasing path is [1, 2, 6, 9].
 *
 * Example 2:
 *
 * Input: nums =
 * [
 *   [3,4,5],
 *   [3,2,6],
 *   [2,2,1]
 * ]
 * Output: 4
 * Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
 */

/**
 * Find the longest increasing path in a matrix
 * @param {number[][]} matrix
 * @return {number}
 * @time complexity: O(mn), where m is the total number of rows, and n is the total number of columns
 * @space complexity: O(mn)
 */
const findLongestIncreasingPath = matrix => {

  if (!matrix || matrix.length === 0) {
    return 0;
  }

  const rows = matrix.length,
        cols = matrix[0].length,
        cache = new Array(rows).fill(null).map(() => new Array(cols).fill(0)); // Matrix for storing calculated paths

  let longestPath = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      longestPath = Math.max(longestPath, dfs(i, j, rows, cols, matrix, cache));
    }
  }

  return longestPath;
};


/**
 * Depth first search
 * For finding the longest path
 * @param {number} i            current vertical position in matrix
 * @param {number} j            current horizontal position in matrix
 * @param {number} rows         total number of rows in matrix
 * @param {number} cols         total number of columns in matrix
 * @param {number[][]} matrix
 * @param {number[][]} cache    for storing calculated results
 * @return {number}
 * @time complexity: O(mn), where m is the total number of rows, and n is the total number of columns
 * @space complexity: O(1)
 */
const dfs = (i, j, rows, cols, matrix, cache) => {
  if (cache[i][j] !== 0) {
    return cache[i][j];
  }

  const moves = [
    [-1,  0], // Up
    [ 1,  0], // Down
    [ 0, -1], // Left
    [ 0,  1]  // Right
  ];

  for (const [mx, my] of moves) {
    const x = i + mx,
          y = j + my;

    if (x >= 0 && x < rows && y >= 0 && y < cols && matrix[x][y] > matrix[i][j]) {
      cache[i][j] = Math.max(cache[i][j], dfs(x, y, rows, cols, matrix, cache));
    }
  }

  return ++cache[i][j];
};


const assert = require('chai').assert;

describe('Longest Increasing Path In a Matrix', () => {

  it('should find the longest path', () => {
    const matrix = [
      [9,9,4],
      [6,6,8],
      [2,1,1]
    ],
    result = 4;

    //The longest increasing path is [1, 2, 6, 9].
    assert.strictEqual(findLongestIncreasingPath(matrix), result);
  });

  it('should find the longest path in horizontally and vertically', () => {
    const matrix = [
      [3,4,5],
      [3,2,6],
      [2,2,1]
    ],
    result = 4;

    //The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
    assert.strictEqual(findLongestIncreasingPath(matrix), result);
  });

  it('should find the longest path in circular path', () => {
    const matrix = [
      [1,2,3],
      [8,9,4],
      [7,6,5]
    ],
    result = 9;

    //The longest increasing path is [1, 2, 3, 4, 5, 6, 7, 8, 9].
    assert.strictEqual(findLongestIncreasingPath(matrix), result);
  });


});
