/**
 * 
 * Populating Next Right Pointers in Each Node
 * 
 * You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
 * 
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 * 
 * Initially, all next pointers are set to NULL.
 * 
 *  
 * 
 * Follow up:
 * 
 * You may only use constant extra space.
 * Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 *  
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: root = [1,2,3,4,5,6,7]
 * Output: [1,#,2,3,#,4,5,6,7,#]
 * Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 *  
 * 
 * Constraints:
 * 
 * The number of nodes in the given tree is less than 4096.
 * -1000 <= node.val <= 1000
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = root => {
  if (!root) {
    return null;
  }

  const queue = [root];

  while (queue.length) {
    let prev = null;

    for (let i = 0, len = queue.length; i < len; i++) {
      const curr = queue.shift();

      if (prev) {
        prev.next = curr;
      }

      prev = curr;

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  return root;
};

const connect = root => {
    
  if (!root) {
    return null;
  }
  
  let leftMost = root;
  
  while (leftMost.left) {
    
    let curr = leftMost;
    
    while (curr) {
      curr.left.next = curr.right;
      
      if (curr.next) {
        curr.right.next = curr.next.left;
      }
      
      curr = curr.next;
    }
    
    leftMost = leftMost.left;
  }
  
  return root;
}