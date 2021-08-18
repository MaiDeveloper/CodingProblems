/**
 * Given a binary tree, return the vertical order traversal of its nodes values.
 * 
 * For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).
 * 
 * Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).
 * 
 * If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.
 * 
 * Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.
 * 
 *  
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: [3,9,20,null,null,15,7]
 * Output: [[9],[3,15],[20],[7]]
 * Explanation: 
 * Without loss of generality, we can assume the root node is at position (0, 0):
 * Then, the node with value 9 occurs at position (-1, -1);
 * The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
 * The node with value 20 occurs at position (1, -1);
 * The node with value 7 occurs at position (2, -2).
 * Example 2:
 * 
 * 
 * 
 * Input: [1,2,3,4,5,6,7]
 * Output: [[4],[2],[1,5,6],[3],[7]]
 * Explanation: 
 * The node with value 5 and the node with value 6 have the same position according to the given scheme.
 * However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.
 *  
 * 
 * Note:
 * 
 * The tree will have between 1 and 1000 nodes.
 * Each node's value will be between 0 and 1000.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const verticalTraversal = root => {
  
  const result = [];
  const columns = {};
  let minCol = 0;
  let maxCol = 0;
  
  const bfs = (node, row, col) => {
    if (!node) {
      return;
    }
    
    if (!columns[col]) {
      columns[col] = [];
    }
    
    columns[col].push({
      row: row,
      val: node.val
    });
    
    minCol = Math.min(minCol, col);
    maxCol = Math.max(maxCol, col);
    
    bfs(node.left, row + 1, col - 1);
    bfs(node.right, row + 1, col + 1);
  }
  
  bfs(root, 0, 0);
  
  for (let i = minCol; i <= maxCol; i++) {
    columns[i].sort((a, b) => {
      if (a.row === b.row) {
        return a.val - b.val;
      } else {
        return a.row - b.row;
      }
    });
    
    const temp = [];
    
    for (let j = 0; j < columns[i].length; j++) {
      temp.push(columns[i][j].val);
    }
    
    result.push(temp);
  }
  
  return result;
}

var verticalTraversalBFS = function(root) {
  const result = [];
  const map = {};
  let minLeft = 0;
  
  const queue = [
    {
      node: root,
      col: 0,
      row: 0
    }
  ];
  
  while (queue.length) {
    const {
      node,
      col,
      row
    } = queue.shift();
      
    if (!node) {
      continue;
    }
      
      
    if (map[col] === undefined) {
      map[col] = [];
    }
    
    minLeft = Math.min(minLeft, col);
    
    map[col].push({
      row,
      val: node.val
    });
    
    queue.push({
      node: node.left,
      col: col + -1,
      row: row + 1,
    });
    
    queue.push({
      node: node.right,
      col: col + 1,
      row: row + 1,
    });
      
  }
  
  minLeft = Math.abs(minLeft);
  
  for (let key in map) {
    result[parseInt(key) + minLeft] = map[key].sort((a, b) => {
      if (a.row === b.row) {
        return a.val - b.val;
      }
      return a.row - b.row;
    }).map(a => a.val);
  }
  
  return result;
};