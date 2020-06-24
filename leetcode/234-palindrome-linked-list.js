/**
 * Palindrome Linked List
 * 
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * Input: 1->2
 * Output: false
 * Example 2:
 * 
 * Input: 1->2->2->1
 * Output: true
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} head
 * @return {boolean}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
var isPalindromeRecursive = function(head) {
  let frontNode = head;
  
  const check = node => {
    if (node) {
      if (!check(node.next)) return false;
      if (node.val !== frontNode.val) return false;

      frontNode = frontNode.next;
    }
    
    return true;
  };
  
  return check(head);
};

/**
 * @param {ListNode} head
 * @return {boolean}
 * @time complexity: O(n)
 * @space complexity: O(n)
 */
var isPalindrome = function(head) {
  const nums = [];
  
  let node = head;
  
  while (node) {
      nums.push(node.val);
      node = node.next;
  }
  
  let i = 0;
  let j = nums.length - 1;
  
  while (i < j) {
      if (nums[i] !== nums[j]) {
          return false;
      }
      i++;
      j--;
  }
  
  return true;
};