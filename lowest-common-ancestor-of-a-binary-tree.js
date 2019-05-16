/**
 * Lowest Common Ancestor of a Binary Tree
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]
 *
 *            3
 *          /   \
 *         5     1
 *        / \   / \
 *       6   2 0   8
 *          / \
 *         7   4
 *
 * Example 1:
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 *
 * Example 2:
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 *
 * Note:
 *
 *     All of the nodes' values will be unique.
 *     p and q are different and both values will exist in the binary tree.
 */

/**
 * Definition for a binary tree node.
 */
 function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
 }

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @time complexity: O(n) where n is the number of nodes
 * @space complexity: O(n) utilized by recursion stack
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root.val === p.val || root.val === q.val) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (!left) {
    return right;
  }

  if (!right) {
    return left;
  }

  return root;
};


const assert = require('chai').assert;

describe('Lowest Common Ancestor of a Binary Tree', () => {
  let tree;

  before(() => {
    tree = arrayToTree([3,5,1,6,2,0,8,null,null,7,4]);

    function arrayToTree(arr, root = null, index = 0) {
      if (index < arr.length) {
        root = new TreeNode(arr[index]);

        root.left = arrayToTree(arr, root.left, 2 * index + 1);
        root.right = arrayToTree(arr, root.right, 2 * index + 2);
      }
      return root;
    }
  });

  it('should return node with value of 3', () => {
    const result = lowestCommonAncestor(tree, new TreeNode(5), new TreeNode(1));
    assert.strictEqual(result.val, 3);
  });

  it('should return node with value of 5', () => {
    const result = lowestCommonAncestor(tree, new TreeNode(5), new TreeNode(4));
    assert.strictEqual(result.val, 5);
  });

});


