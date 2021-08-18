/**
 * 
 * Candy Crush
 * 
 * This question is about implementing a basic elimination algorithm for Candy Crush.
 * 
 * Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:
 * 
 * If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
 * After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
 * After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
 * If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
 * You need to perform the above rules until the board becomes stable, then return the current board.
 * 
 *  
 * 
 * Example:
 * 
 * Input:
 * board =
 * [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]
 * 
 * Output:
 * [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]
 * 
 * Explanation:
 * 
 *  
 * 
 * Note:
 * 
 * The length of board will be in the range [3, 50].
 * The length of board[i] will be in the range [3, 50].
 * Each board[i][j] will initially start as an integer in the range [1, 2000].
 */

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
  const rows = board.length;
  const cols = board[0].length;
  let todo = false;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols - 2; j++) {
      if (crush(board, rows, cols, i, j, 0, 1)) {
        todo = true;
      }
    }
  }
  
  for (let i = 0; i < rows - 2; i++) {
    for (let j = 0; j < cols; j++) {
      if (crush(board, rows, cols, i, j, 1, 0)) {
        todo = true;
      }
    }
  }
  
  collapse(board, rows, cols);
  
  return todo ? candyCrush(board) : board;
};

const collapse = (board, rows, cols) => {
  for (let j = 0; j < cols; j++) {
    let bottomRow = rows - 1;
    
    for (let i = bottomRow; i >= 0; i--) {
      if (board[i][j] > 0) {
        board[bottomRow][j] = board[i][j];
        bottomRow--;
      }
    }
    
    while (bottomRow >= 0) {
      board[bottomRow][j] = 0;
      bottomRow--;
    }
  }
};

const crush = (board, rows, cols, i, j, x, y) => {
  if (board[i][j] === 0) {
    return false;
  }
  
  const val = Math.abs(board[i][j]);
  
  if (Math.abs(board[i + x][j + y]) === val && Math.abs(board[i + x + x][j + y + y]) === val) {

    // This or the below
    // board[i][j] = board[i + x][j + y] = board[i + x + x][j + y + y] = -val;
    let nextRow = i;
    let nextCol = j;
    
    while (nextRow < rows && nextCol < cols) {
      if (Math.abs(board[nextRow][nextCol]) !== val) {
        break;
      }
      
      board[nextRow][nextCol] = -val;
      nextRow += x;
      nextCol += y;
    }
    
    return true;
  }
  
  return false;
};