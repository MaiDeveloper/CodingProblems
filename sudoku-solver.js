class SudokuSolver {
  constructor() {
    this.UNASSIGNED = 0;
  }
  solve(matrix) {
    if (this.trySolve(matrix)) {
      return matrix;
    }
    return false;
  }
  trySolve(matrix) {
    let row = 0;
    let col = 0;
    let blank = false;

    for (row = 0; row < matrix.length; row++) {
      for (col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === this.UNASSIGNED) {
          blank = true;
          break;
        }
      }
      if (blank) {
        break;
      }
    }

    if (!blank) {
      return true;
    }

    for (let num = 1; num <= 9; num++) {
      if (this.isSafe(matrix, row, col, num)) {
        matrix[row][col] = num;
        if (this.trySolve(matrix)) {
          return true;
        }
        matrix[row][col] = this.UNASSIGNED;
      }
    }
  }
  isSolved(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === this.UNASSIGNED) {
          return false;
        }
      }
    }
    return true;
  }
  isInRow(matrix, row, num) {
    for (let i = 0; i < matrix[row].length; i++) {
      if (matrix[row][i] === num) {
        return true;
      }
    }
    return false;
  }
  isInCol(matrix, col, num) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] === num) {
        return true;
      }
    }
    return false;
  }
  isInBox(matrix, row, col, num) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0 ; j < 3; j++) {
        if (matrix[row + i][col + j] === num) {
          return true;
        }
      }
    }
    return false;
  }
  isSafe(matrix, row, col, num) {
    return (
      !this.isInRow(matrix, row, num) &&
      !this.isInCol(matrix, col, num) &&
      !this.isInBox(matrix, row - (row % 3), col - (col % 3), num)
    );
  }
}

const assert = require('chai').assert;

describe('SudokuSolver', () => {
  let sudokuGrid;
  let sudokuGridSolved;
  let sudoku;

  beforeEach(() => {
    sudokuGrid = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    sudokuGridSolved = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    sudoku = new SudokuSolver();
  });

  it('UNASSIGNED should be 0', () => {
    assert.strictEqual(sudoku.UNASSIGNED, 0);
  });

  describe('#isSolved', () => {
    it('should return false', () => {
      assert.strictEqual(sudoku.isSolved(sudokuGrid), false);
    });
    it('should return false', () => {
      assert.strictEqual(sudoku.isSolved(sudokuGridSolved), true);
    });
  });

  describe('#isInRow', () => {
    it('should return false', () => {
      assert.strictEqual(sudoku.isInRow(sudokuGrid, 0, 9), false);
    });
    it('should return true', () => {
      assert.strictEqual(sudoku.isInRow(sudokuGrid, 1, 9), true);
    });
  });

  describe('#isInCol', () => {
    it('should return false', () => {
      assert.strictEqual(sudoku.isInCol(sudokuGrid, 1, 1), false);
    });
    it('should return true', () => {
      assert.strictEqual(sudoku.isInCol(sudokuGrid, 1, 9), true);
    });
  });

  describe('#isInBox', () => {
    it('should return false', () => {
      assert.strictEqual(sudoku.isInBox(sudokuGrid, 0, 3, 2), false);
    });
    it('should return true', () => {
      assert.strictEqual(sudoku.isInBox(sudokuGrid, 0, 3, 1), true);
    });
  });

  describe('#isSafe', () => {
    it('should return false', () => {
      assert.strictEqual(sudoku.isSafe(sudokuGrid, 2, 0, 3), false);
    });
    it('should return true', () => {
      assert.strictEqual(sudoku.isSafe(sudokuGrid, 2, 0, 1), true);
    });
  });

  describe('#trySolve', () => {
    it('should solve the sudoku', () => {
      const solved = sudoku.solve(sudokuGrid);
      assert.deepEqual(solved, sudokuGridSolved);
    });
    it('should return false if sudoku is impossible to solve', () => {
      const sudokuGrid2 = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [2, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ];
      assert.strictEqual(sudoku.solve(sudokuGrid2), false);
    });
  });

});
