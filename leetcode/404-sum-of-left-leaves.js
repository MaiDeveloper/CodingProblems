/**
 * Find the sum of all left leaves in a given binary tree.
 * 
 * Example:
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) {
      return 0;
  }
  
  let left = 0;
  
  if (root.left && !root.left.left && !root.left.right) {
      left = root.left.val;
  }
  
  return left + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};