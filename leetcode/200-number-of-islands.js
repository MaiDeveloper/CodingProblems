/**
 * Number of Islands
 * 
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * Output: 1
 * Example 2:
 * 
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * Output: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  const dfs = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') {
      return;
    }
    
    grid[i][j] = '0';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  
  let count = 0;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }
  
  return count;
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  const bfs = (i, j) => {
    const queue = [[i, j]];
    
    while (queue.length) {
      const [x, y] = queue.shift();
      
      if (x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] === '0') {
        continue;
      }
      
      grid[x][y] = '0';
      
      queue.push([x + 1, y]);
      queue.push([x - 1, y]);
      queue.push([x, y + 1]);
      queue.push([x, y - 1]);
    }
  };
  
  let count = 0;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        count++;
        bfs(i, j);
      }
    }
  }
  
  return count;
};