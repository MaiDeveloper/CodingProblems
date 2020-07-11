/**
 * Flatten a Multilevel Doubly Linked List
 * 
 * You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.
 * 
 * Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.
 */

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (head == null) {
    return null;
  }
  
  const dummy = new Node(null, null, head, null);
  const stack = [head];
  
  let prev = dummy;
  
  while (stack.length) {
    const curr = stack.pop();
    
    prev.next = curr;
    curr.prev = prev;
    prev = curr;
    
    if (curr.next) {
      stack.push(curr.next);
    }
    
    if (curr.child) {
      stack.push(curr.child);
      curr.child = null;
    }
  }
  
  dummy.next.prev = null;
  
  return dummy.next;
};