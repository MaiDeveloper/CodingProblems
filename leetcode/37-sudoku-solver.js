/**
 * Sudoku Solver
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * Empty cells are indicated by the character '.'.
 */

/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

  let row = 0;
  let col = 0;
  let isSolved  = true;

  for (row = 0; row < board.length; row++) {
    for (col = 0; col < board[row].length; col++) {
      if (board[row][col] === '.') {
        isSolved = false;
        break;
      }
    }

    if (!isSolved) {
      break;
    }
  }

  if (isSolved) {
    return board;
  }

  for (let i = 1; i <= 9; i++) {
    const num = i.toString();

    if (
      !isInRow(board, row, num) &&
      !isInCol(board, col, num) &&
      !isInBox(board, Math.floor(row / 3) * 3, Math.floor(col / 3) * 3, num)
    ) {
      board[row][col] = num;
  
      if (solveSudoku(board)) {
        return board;
      }
  
      board[row][col] = '.';
    }
  }

  return false;
};

const isInRow = (board, row, num) => {
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === num) {
      return true;
    }
  }

  return false;
};

const isInCol = (board, col, num) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === num) {
      return true;
    }
  }

  return false;
}

const isInBox = (board, row, col, num) => {
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      if (board[i][j] === num) {
        return true;
      }
    }
  }

  return false;
};

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(solveSudoku(board));