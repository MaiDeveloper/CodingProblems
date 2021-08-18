/**
 * 
 * Add Two Number II
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
 * 
 * Example:
 * 
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
  const num1 = [];
  const num2 = [];
  
  while (l1) {
      num1.push(l1.val);
      l1 = l1.next;
  }
  
  while (l2 ) {
      num2.push(l2.val);
      l2 = l2.next;
  }
  
  const dummy = new ListNode(0);
  let carry = 0;
  
  while (num1.length || num2.length || carry) {
      const sum = carry + (num1.pop() || 0) + (num2.pop() || 0);
      const node = new ListNode(sum % 10);
      node.next = dummy.next;
      dummy.next = node;
      carry = Math.floor(sum / 10);
  }
  
  return dummy.next;
};