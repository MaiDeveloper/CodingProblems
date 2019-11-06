/**
 * Rotting Oranges
 *
 * In a given grid, each cell can have one of three values:
 *
 *   the value 0 representing an empty cell;
 *   the value 1 representing a fresh orange;
 *   the value 2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.
 *
 *
 *
 * Example 1:
 *
 * Input: [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 *
 * Example 2:
 *
 * Input: [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 * Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
 *
 * Example 3:
 *
 * Input: [[0,2]]
 * Output: 0
 * Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 *
 *
 *
 * Note:
 *
 *     1 <= grid.length <= 10
 *     1 <= grid[0].length <= 10
 *     grid[i][j] is only 0, 1, or 2.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 * @time complexity: O(m x n)
 * @space complexity: O(m x n)
 */
var orangesRotting = function(grid) {
  const numRows = grid.length;
  const numCols = grid[0].length;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];
  const queue = [];
  let fresh = 0;
  let minute = 0;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  while (queue.length && fresh) {
    const len = queue.length;

    for (let q = 0; q < len; q++) {
      const rotten = queue.shift();

      for (let i = 0; i < directions.length; i++) {
        const d = directions[i];
        const r = rotten[0] + d[0];
        const c = rotten[1] + d[1];

        if (r >= 0 && r < numRows && c >= 0 && c < numCols && grid[r][c] === 1) {
          grid[r][c] = 2;
          fresh--;
          queue.push([r, c]);
        }
      }
    }

    minute++;
  }

  if (fresh > 0) {
    return -1;
  }

  return minute;
};


const assert = require('chai').assert;

describe('Rotting Oranges', () => {

  it('should return 4', () => {
    assert.strictEqual(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]), 4);
  });

  it('should return -1 when there is a fresh orange never rotten', () => {
    assert.strictEqual(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]), -1);
  });

  it('should return 0 when there is no fresh oranges', () => {
    assert.strictEqual(orangesRotting([[0,2]]), 0);
  });

});