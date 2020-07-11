/**
 * Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * Accepted
 * 996,536
 * Submissions
 * 1,882,252
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const head = new ListNode();
  let currNode = head;
  let list1 = l1;
  let list2 = l2;
  
  while (list1 || list2) {
    if (!list2 || (list1 && list1.val < list2.val)) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }
    
    currNode = currNode.next;
  }
  
  return head.next;
};

var mergeTwoLists2 = function(l1, l2) {
  const head = new ListNode();
  let currNode = head;
  let list1 = l1;
  let list2 = l2;
  
  while (list1 && list2) {
    if (list1.val < list2.val) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }
    
    currNode = currNode.next;
  }

  while (list1) {
    currNode.next = list1;
    list1 = list1.next;
    currNode = currNode.next;
  }

  while (list2) {
    currNode.next = list2;
    list2 = list2.next;
    currNode = currNode.next;
  }
  
  return head.next;
};

