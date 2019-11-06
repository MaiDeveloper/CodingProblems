/**
 * Second Minimum Node In a Binary Tree
 *
 * Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes.
 *
 * Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
 *
 * If no such second minimum value exists, output -1 instead.
 *
 * Example 1:
 *
 * Input:
 *     2
 *    / \
 *   2   5
 *      / \
 *     5   7
 *
 * Output: 5
 * Explanation: The smallest value is 2, the second smallest value is 5.
 *
 * Example 2:
 *
 * Input:
 *     2
 *    / \
 *   2   2
 *
 * Output: -1
 * Explanation: The smallest value is 2, but there isn't any second smallest value.
 */

/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Second Minimum Node In a Binary Tree
 * @param {TreeNode} root
 * @return {number}
 * @time complexity: O(n) where n is the total number of nodes
 * @space complexity: O(n) the data stored in min and res are O(1),
 *  but the depth first search may take up O(h) in stack call,
 *  where h is the height of the tree
 */
var findSecondMinimumValue = function(root) {
  let min = root.val;
  let res = Infinity;

  const dfs = function(node) {
    if (!node) {
      return;
    }

    if (node.val === min) {
      dfs(node.left);
      dfs(node.right);
    } else if (node.val > min && node.val < res) {
      res = node.val;
    }
  }

  dfs(root);

  return res === Infinity ? -1 : res;
};

/**
 * Second Minimum Node In a Binary Tree
 * @param {TreeNode} root
 * @return {number}
 * @time complexity: O(n) where n is the total number of nodes
 * @space complexity: O(n)
 */
var findSecondMinimumValueBfs = function(root) {
  const stack = [root];
  let min = root.val;
  let res = Infinity;

  while (stack.length) {
    const node = stack.shift();

    if (node.val === min && node.left) {
      stack.push(node.left);
      stack.push(node.right);
    } else if (node.val > min && node.val < res) {
      res = node.val;
    }
  }

  return res === Infinity ? -1 : res;
};



/**
 * Second Minimum Node In a Binary Tree
 * @param {TreeNode} root
 * @return {number}
 * @time complexity: O(n) where n is the total number of nodes
 * @space complexity: O(n) the data stored in min and res are O(1),
 *  but the depth first search may take up O(h) in stack call,
 *  where h is the height of the tree
 */
var findSecondMinimumValueAlternative = function(root) {
  let first = Infinity;
  let second = Infinity;

  const bfs = function(root) {
    if (!root) {
      return;
    }

    if (root.val < first && root.val !== second) {
      second = first;
      first = root.val;
    } else if (root.val < second && root.val !== first) {
      second = root.val;
    }

    bfs(root.left);
    bfs(root.right);
  }

  bfs(root);

  return second === Infinity ? -1 : second;
};


const assert = require('chai').assert;

const arrayToTree = function(arr, root = null, index = 0) {
  if (index < arr.length) {
    root = new TreeNode(arr[index]);

    root.left = arrayToTree(arr, root.left, 2 * index + 1);
    root.right = arrayToTree(arr, root.right, 2 * index + 2);
  }
  return root;
}

describe('Second Minimum Node In a Binary Tree', () => {

  it('should return the second minimum node', () => {
    const tree = arrayToTree([2,2,5,null,null,5,7]);
    assert.strictEqual(findSecondMinimumValue(tree), 5);
  });

  it('should return -1 when there is no such second minimum node', () => {
    const tree = arrayToTree([2,2,2]);
    assert.strictEqual(findSecondMinimumValue(tree), -1);
  });

});
