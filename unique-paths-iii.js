/**
 * Unique Paths III
 *
 * On a 2-dimensional grid, there are 4 types of squares:
 *
 *     1 represents the starting square.  There is exactly one starting square.
 *     2 represents the ending square.  There is exactly one ending square.
 *     0 represents empty squares we can walk over.
 *     -1 represents obstacles that we cannot walk over.
 *
 * Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.
 *
 *
 * Example 1:
 *
 * Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
 * Output: 2
 *
 * Explanation: We have the following two paths:
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
 * 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
 *
 * Example 2:
 *
 * Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
 * Output: 4
 *
 * Explanation: We have the following four paths:
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
 * 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
 * 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
 * 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
 *
 * Example 3:
 *
 * Input: [[0,1],[2,0]]
 * Output: 0
 *
 * Explanation:
 * There is no path that walks over every empty square exactly once.
 * Note that the starting and ending square can be anywhere in the grid.
 *
 */

class UniquePath {
  constructor() {
    this.GRID_START = 1;      // Represents the starting square
    this.GRID_END = 2;        // Represents the ending square
    this.GRID_EMPTY = 0;      // Represents the empty square
    this.GRID_OBSTACLE = -1;  // Represents the obstacle square

    this.grid = null;
    this.rows = 0;
    this.cols = 0;
    this.startRow = null;     // Starting square row
    this.startCol = null;     // Starting square column
    this.validSquare = 0;     // Total number of non-obstacle squares
    this.moves = [
      [-1,  0], // Up
      [ 1,  0], // Down
      [ 0, -1], // Left
      [ 0,  1]  // Right
    ];
  }

  /**
   * Set the grid
   * @param {Array[][]} grid
   * @time complexity: O(mn), where m is the number of rows and n is the number of cols
   * @space complexity: O(mn)
   */
  setGrid(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
    this.startRow = null;     // Starting square row
    this.startCol = null;     // Starting square column
    this.validSquare = 0;     // Total number of non-obstacle squares

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        switch (this.grid[i][j]) {
          case this.GRID_EMPTY:
            // Empty square is consider a valid square
            this.validSquare++;
            break;
          case this.GRID_START:
            // Set the starting square
            this.startRow = i;
            this.startCol = j;
            // Starting square is also consider a valid square
            this.validSquare++;
        }
      }
    }
  }

  /**
   * Depth-first Search
   * @param {Number} row
   * @param {Number} col
   * @param {Number} validSquare
   * @return {Number} Number of unique paths
   * @time complexity: O(4^m*n), where m is the number of rows and n is the number of cols,
   *                             it walks in 4 directions (up, down, left, right). So its 4 power m * n
   * @space complexity: O(mn), because of its recursion stacks
   */
  dfs(row, col, validSquare) {
    // Make sure the square is in boundary and is non-obstacle
    if (row < 0 || row >= this.rows ||
        col < 0 || col >= this.cols ||
        this.grid[row][col] === this.GRID_OBSTACLE) {
      return 0;
    }

    // Check if the square is the ending square
    if (this.grid[row][col] === this.GRID_END) {
      // Return 1 if it walks over every empty square
      // Return 0 if it does not
      return (validSquare === 0);
    }

    // Walked over to this square, so decrease the number of valid squares by 1
    validSquare--;

    // Temporary mark this square as obstacle
    // So it won't keep walking to this square over and over
    this.grid[row][col] = this.GRID_OBSTACLE;

    // Count the number of paths
    let pathCount = 0;

    for (const [r, c] of this.moves) {
      // Move up, down, left, and right
      pathCount += this.dfs(row + r, col + c, validSquare);
    }

    // Set this square back to its normal state
    this.grid[row][col] = this.GRID_EMPTY;

    return pathCount;
  }

  getUniquePaths() {
    return this.dfs(this.startRow, this.startCol, this.validSquare);
  }
}


/********
 * TEST *
 ********
 */

import { assert } from 'chai';

describe('Unique Paths III', () => {

  let uniquePath;

  before(() => {
    uniquePath = new UniquePath();
  });

  describe('#setGrid', () => {

    before(() => {
      uniquePath.setGrid([[0,0,0,0],[1,0,0,0],[0,0,2,-1]]);
    });

    it('should set validSquare', () => {
      assert.strictEqual(uniquePath.validSquare, 10);
    });

    it('should set startRow', () => {
      assert.strictEqual(uniquePath.startRow, 1);
    });

    it('should set startCol', () => {
      assert.strictEqual(uniquePath.startCol, 0);
    });

    it('should set grid', () => {
      assert.deepEqual(uniquePath.grid, [[0,0,0,0],[1,0,0,0],[0,0,2,-1]]);
    });

    it('should set rows', () => {
      assert.strictEqual(uniquePath.rows, 3);
    });

    it('should set cols', () => {
      assert.strictEqual(uniquePath.cols, 4);
    });

  });

  describe('#getUniquePaths', () => {

    it('should return number of unique paths', () => {
      uniquePath.setGrid([[1,0,0,0],[0,0,0,0],[0,0,2,-1]]);
      assert.strictEqual(uniquePath.getUniquePaths(), 2);

      uniquePath.setGrid([[1,0,0,0],[0,0,0,0],[0,0,0,2]]);
      assert.strictEqual(uniquePath.getUniquePaths(), 4);
    });

    it('should return zero if no path', () => {
      uniquePath.setGrid([[0,1],[2,0]]);
      assert.strictEqual(uniquePath.getUniquePaths(), 0);
    });

  });

});