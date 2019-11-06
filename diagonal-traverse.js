/**
 * Diagonal Traverse
 *
 * Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.
 *
 * Example:
 *
 * Input:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 *
 * Output:  [1,2,4,7,5,3,6,8,9]
 */

/**
 * Diagonal Order
 * @param {number[][]} matrix
 * @return {number[]}
 * @time complexity: O(n)
 * @space complexity: O(n)
 */
const findDiagonalOrder = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }

  const result = [];
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const total = rowCount * colCount;

  let row = 0;
  let col = 0;
  let rowMove = -1;
  let colMove = 1;

  const reverse = () => {
    rowMove = -rowMove;
    colMove = -colMove;
  };

  while (result.length < total) {
    result.push(matrix[row][col]);

    row += rowMove;
    col += colMove;

    if (row > rowCount - 1) { // Bottom outbound
      reverse();
      row -= 1;
      col += 2;
    } else if (col > colCount - 1) { // Right outbound
      reverse();
      row += 2;
      col -= 1;
    } else if (row < 0) { // Top outbound
      reverse();
      row = 0;
    } else if (col < 0) { // Left outbound
      reverse();
      col = 0;
    }
  }

  return result;
}


/**
 * Diagonal Order
 * @param {number[][]} matrix
 * @return {number[]}
 * @time complexity: O(n)
 * @space complexity: O(n)
 */
const findDiagonalOrderAlternative = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }

  const result = [];
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const total = rowCount * colCount;
  let row = 0;
  let col = 0;

  while (result.length < total) {
    result.push(matrix[row][col]);

    if ((row + col) % 2 === 0) { // Move up diagonally
      if (col === colCount - 1) {
        row++;
      } else if (row === 0) {
        col++;
      } else {
        row--;
        col++;
      }
    } else { // Move down diagonally
      if (row === rowCount - 1) {
        col++;
      } else if (col === 0) {
        row++;
      } else {
        row++;
        col--;
      }
    }
  }

  return result;
};


const assert = require('chai').assert;

describe('Diagonal Traverse', () => {

  it('should return numbers in diagonal order', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const expected = [1,2,4,7,5,3,6,8,9];
    assert.deepEqual(findDiagonalOrder(matrix), expected);
  });

  it('should return empty array', () => {
    assert.deepEqual(findDiagonalOrder([]), []);
  });

});