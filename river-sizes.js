/**
 * River Sizes
 * You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size. Write a function that returns an array of the sizes of all rivers represented in the input matrix. Note that these sizes do not need to be in any particular order.
 *
 * Sample input:
 * [
 *  [1,0,0,1,0],
 *  [1,0,1,0,0],
 *  [0,0,1,0,1],
 *  [1,0,1,0,1],
 *  [1,0,1,1,0]
 * ]
 *
 * Sample output:
 * [2,1,5,2,2]
 */


function riverSizes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const sizes = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        visitRiver(i, j, matrix, sizes, rows, cols);
      }
    }
  }

  return sizes;
}

function visitRiver(i, j, matrix, sizes, rows, cols) {
  let count = 0;
  const stack = [[i, j]];

  while (stack.length) {
    const node = stack.shift();
    const i = node[0];
    const j = node[1];

    if (matrix[i][j] === 1) {
      matrix[i][j] = 3;

      count++;

      stack.push(...getNearbyRiver(i, j, rows, cols, matrix));
    }
  }

  if (count > 0) {
    sizes.push(count);
  }
}

function getNearbyRiver(i, j, rows, cols, matrix) {
  const available = [];

  // Top
  if (i > 0 && i < rows && matrix[i - 1][j] === 1) {
    available.push([i - 1, j]);
  }

  // Bottom
  if (i >= 0 && i < rows - 1 && matrix[i + 1][j] === 1) {
    available.push([i + 1, j]);
  }

  // Left
  if (j > 0 && j < cols && matrix[i][j - 1] === 1) {
    available.push([i, j - 1]);
  }

  // Right
  if (j >= 0 && j < cols - 1 && matrix[i][j + 1] === 1) {
    available.push([i, j + 1]);
  }

  return available;
}


const input = [
 [1,0,0,1,0],
 [1,0,1,0,0],
 [0,0,1,0,1],
 [1,0,1,0,1],
 [1,0,1,1,0]
];

console.log(riverSizes(input));
