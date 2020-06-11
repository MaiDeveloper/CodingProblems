/**
 * Word Search
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * 
 * Example:
 * 
 * board =
 * [
 *   ['A','B','C','E'],
 *   ['S','F','C','S'],
 *   ['A','D','E','E']
 * ]
 * 
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 */

const wordSearch = (board, word) => {
  const rows = board.length,
        cols = board[0].length,
        directions = [
          [ -1,  0 ], // Up
          [  0,  1 ], // Right
          [  1,  0 ], // Down
          [  0, -1 ], // Left
        ];

  const bfs = (i, j, index) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || // OUT OF RANGE
       board[i][j] !== word.charAt(index)) { // NOT SAME CHARACTER
      return false;
    }

    index++;

    // END OF WORD
    // MATCH IS FOUND
    if (index === word.length) {
      return true;
    }

    const temp = board[i][j];
    board[i][j] = null;

    for (const [x, y] of directions) {
      if (bfs(i + x, j + y, index)) {
        return true;
      }
    }

    board[i][j] = temp;
    return false;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (bfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

export default wordSearch;