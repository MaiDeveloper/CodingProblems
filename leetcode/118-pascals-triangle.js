/**
 * Pascal's Triangle
 * 
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 
 * Example:
 * 
 * Input: 5
 * Output:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 * @time complexity: O(n ^ 2)
 * @space complexity: O(n ^ 2)
 */
var generate = function(numRows) {
  if (numRows === 0) {
      return [];
  }
  
  const triangle = [[1]];
  let i = 1;
  
  while (i < numRows) {
      const row = [1];
      
      for (let j = 1; j < i; j++) {
          row.push(triangle[i - 1][j] + triangle[i - 1][j - 1]);
      }
      
      row.push(1);
      
      triangle.push(row);
      i++;
  }
  
  return triangle;
};