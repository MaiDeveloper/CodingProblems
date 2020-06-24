/**
 * Remove Linked List Elements
 * 
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * 
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
var removeElements = function(head, val) {
  let dummy = new ListNode(null, head);
  let current = dummy;
  
  while (current && current.next) {
      if (current.next.val === val) {
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }
  
  return dummy.next;
};