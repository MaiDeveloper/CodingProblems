const maze = [
  [ 1, 0, 0, 0 ],
  [ 1, 1, 0, 1 ],
  [ 1, 0, 0, 0 ],
  [ 1, 1, 1, 1 ],
];

class MazeBacktrack {
  constructor(maze) {
    if (!Array.isArray(maze) || maze.length === 0) {
      throw new Error('Maze should be an array with more than one row');
    }

    this.maze = maze;
    this.numberOfRows = maze.length;
    this.numberOfColumns = maze[0].length;
    this.exitRow = this.numberOfRows - 1;
    this.exitColumn = this.numberOfColumns - 1;
    this.directions = [
      [ 0, 1 ], // FORWARD
      [ 1, 0 ], // DOWN
    ];
    this.clearSolution();
  }

  clearSolution() {
    this.solution = new Array(this.numberOfRows)
      .fill(null)
      .map(() => new Array(this.numberOfColumns).fill(0));
  }

  isValid(i, j) {
    return (
      i >= 0 && 
      i < this.numberOfRows &&
      j >= 0 &&
      j < this.numberOfColumns &&
      this.maze[i][j] === 1
    );
  }

  /**
   * 
   * @param {number} i 
   * @param {number} j 
   * @time complexity: O(2^(N^2))
   * @space complexity: O(N^2)
   */
  dfs(i = 0, j = 0) {
    if (!this.isValid(i, j)) {
      return false;
    }

    // MARK CURRENT BLOCK AS PART OF THE SOLUTION
    this.solution[i][j] = 1;

    // READ THE DESINTATION
    if (i === this.exitRow && j === this.exitColumn) {
      return this.solution;
    }

    for (const [x, y] of this.directions) {
      if (this.dfs(i + x, j + y)) {
        return this.solution;
      }
    }

    // UNMARK CURRENT BLOCK
    this.solution[i][j] = 0;

    return false;
  }
}

const solve = new MazeBacktrack(maze);

console.log(solve.dfs());