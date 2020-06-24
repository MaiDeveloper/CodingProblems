import SudokuSolver, { UNASSIGNED } from '../sudoku-solver';

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

  test('UNASSIGNED should be 0', () => {
    expect(UNASSIGNED).toEqual(0);
  });

  describe('#isInRow', () => {
    test('should return false', () => {
      expect(sudoku.isInRow(sudokuGrid, 0, 9)).toEqual(false);
    });
    test('should return true', () => {
      expect(sudoku.isInRow(sudokuGrid, 1, 9)).toEqual(true);
    });
  });

  describe('#isInCol', () => {
    test('should return false', () => {
      expect(sudoku.isInCol(sudokuGrid, 1, 1)).toEqual(false);
    });
    test('should return true', () => {
      expect(sudoku.isInCol(sudokuGrid, 1, 9)).toEqual(true);
    });
  });

  describe('#isInBox', () => {
    test('should return false', () => {
      expect(sudoku.isInBox(sudokuGrid, 0, 3, 2)).toEqual(false);
    });
    test('should return true', () => {
      expect(sudoku.isInBox(sudokuGrid, 0, 3, 1)).toEqual(true);
    });
  });

  describe('#isSafe', () => {
    test('should return false', () => {
      expect(sudoku.isSafe(sudokuGrid, 2, 0, 3)).toEqual(false);
    });
    test('should return true', () => {
      expect(sudoku.isSafe(sudokuGrid, 2, 0, 1)).toEqual(true);
    });
  });

  describe('#solve', () => {
    test('should return false when pass in an invalid parameter', () => {
      const solved = sudoku.solve();
      expect(solved).toEqual(false);
    });

    test('should solve the sudoku', () => {
      const solved = sudoku.solve(sudokuGrid);
      expect(solved).toEqual(sudokuGridSolved);
    });

    test('should return false if sudoku is impossible to solve', () => {
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
      const solved = sudoku.solve(sudokuGrid2);
      expect(solved).toEqual(false);
    });
  });

});