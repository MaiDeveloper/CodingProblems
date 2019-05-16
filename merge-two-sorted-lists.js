/**
 * Merge Two Sorted Lists
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Merge Two Sorted Lists
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @time complexity: O(n + m)
 *  where n and m are the size of l1 and l2 respectively
 * @space complexity: O(1)
 *  not allocating extra memory space instead reference to existing list node
 */
function mergeTwoLists(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  const dummy = new ListNode();
  let curr = dummy;

  while (l1 || l2) {
    if (!l1 || (l2 && l2.val < l1.val)) {
      curr.next = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      l1 = l1.next;
    }
    curr = curr.next;
  }

  return dummy.next;
};

const assert = require('chai').assert;


function toList(arr) {
  const dummy = new ListNode();
  let curr = dummy;

  for (let n of arr) {
    curr.next = new ListNode(n);
    curr = curr.next;
  }

  return dummy.next;
}

function toArray(list) {
  const arr = [];

  while (list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr;
}

describe('Merge Two Sorted Lists', () => {
  it('should return sorted list', () => {
    const l1 = toList([1, 2, 4]);
    const l2 = toList([1, 3, 4]);
    const result = mergeTwoLists(l1, l2);
    assert.deepEqual(toArray(result), [1, 1, 2, 3, 4, 4]);
  });
  it('should return l1 list when l2 is empty', () => {
    const l1 = toList([1]);
    const l2 = toList([]);
    const result = mergeTwoLists(l1, l2);
    assert.deepEqual(toArray(result), [1]);
  });
  it('should return l2 list when l1 is empty', () => {
    const l1 = toList([]);
    const l2 = toList([1]);
    const result = mergeTwoLists(l1, l2);
    assert.deepEqual(toArray(result), [1]);
  });
  it('should return empty list', () => {
    const l1 = toList([]);
    const l2 = toList([]);
    const result = mergeTwoLists(l1, l2);
    assert.deepEqual(toArray(result), []);
  });
});