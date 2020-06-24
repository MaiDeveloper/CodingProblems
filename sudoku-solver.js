export const UNASSIGNED = 0;

export default class SudokuSolver {

  /**
   * Solve a sodoku
   * @param {number[][]}  matrix 
   * @return {boolean}    Return true if the sudoku is solved, otherwise false
   * @time complexity: O(9 ^ (m * n)) where m is the number of rows, n is the number of columns
   * @space complexity: O(m * n) where m is the number of rows, n is the number of columns, this is because of recursive calls
   */
  solve(matrix, row = 0, col = 0) {
    // RETURN FALSE IF THE MATRIX IS NOT VALID
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return false;
    }


    const rows = matrix.length,       // TOTAL NUMBER OF ROWS
          cols = matrix[0].length;    // TOTAL NUMBER OF COLUMNS
    
    let isUnassigned = false;

    // CHECK IF THE MATRIX CONTAINS UNASSIGNED VALUE
    for (row = 0; row < rows; row++) {
      for (col = 0; col < cols; col++) {
        if (matrix[row][col] === UNASSIGNED) {
          // GET OUT OF THE LOOP IF THE UNASSIGNED VALUE IS FOUND
          isUnassigned = true;
          break;
        }
      }

      // GET OUT OF THE LOOP
      if (isUnassigned) {
        break;
      }
    }

    // RETURN THE SOLVED MATRIX
    if (!isUnassigned) {
      return matrix;
    }

    // LOOP FROM NUMBER 1 TO 9
    for (let num = 1; num <= 9; num++) {
      
      // CHECK IF THE NUMBER IS AVAILABLE TO FILL IN THIS CELL
      if (this.isSafe(matrix, row, col, num)) {

        // FILL IN THE CELL WITH THE CURRENT NUMBER
        matrix[row][col] = num;
        
        // TRY SOLVE THE NEXT UNASSIGNED CELL
        if (this.solve(matrix, row, col)) {
          // RETURN MATRIX IF IT IS SOLVED
          return matrix;
        }

        // UNDO THE FILL
        matrix[row][col] = UNASSIGNED;
      }
    }
    
    // RETURN FALSE IF IT IS IMPOSSIBLE TO SOLVE
    return false;
  }

  /**
   * Check if a row contains a specific number
   * @param {number[][]} matrix
   * @param {number} row          Row index
   * @param {number} num          Number to search for
   * @return {boolean}            Return true if the number is found, otherwise false
   * @time complexity: O(N) where N is the total number of columns in a specific row
   * @space complexity: O(1)
   */
  isInRow(matrix, row, num) {
    for (let i = 0; i < matrix[row].length; i++) {
      // RETURN TRUE IF THE COLUMN CONTAINS THE NUMBER
      if (matrix[row][i] === num) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check if a column contains a specific number
   * @param {number[][]} matrix
   * @param {number} col          Column index
   * @param {number} num          Number to search for
   * @return {boolean}            Return true if the number is found, otherwise false
   * @time complexity: O(N) where N is the total number of rows in a specific column
   * @space complexity: O(1)
   */
  isInCol(matrix, col, num) {
    for (let i = 0; i < matrix.length; i++) {
      // RETURN TRUE IF THE ROW CONTAINS THE NUMBER
      if (matrix[i][col] === num) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check if the 3x3 grid contains a specific number
   * @param {number[][]} matrix 
   * @param {number} row          Starting row index
   * @param {number} col          Starting column index
   * @param {number} num          Number to search for
   * @return {boolean}            Return true if the number is found, otherwise false
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  isInBox(matrix, row, col, num) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0 ; j < 3; j++) {
        // RETURN TRUE IF THE NUMBER IS FOUND
        if (matrix[row + i][col + j] === num) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Check if a specific number exists in a specific row, column, and 3x3 grid
   * @param {number[][]} matrix 
   * @param {number} row        Row index 
   * @param {number} col        Column index
   * @param {number} num        Number to search for
   * @return {boolean}          Return true if the number if found, otherwise false
   * @time complexity: O(N + M) where N is the size of row, M is the size of column
   * @space complexity: O(1)
   */
  isSafe(matrix, row, col, num) {
    return (
      !this.isInRow(matrix, row, num) &&
      !this.isInCol(matrix, col, num) &&
      !this.isInBox(matrix, row - (row % 3), col - (col % 3), num)
    );
  }
}
