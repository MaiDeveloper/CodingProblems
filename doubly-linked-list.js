import LinkedList, { Node as LinkedListNode } from './linked-list';

export class Node extends LinkedListNode {
  constructor(value) {
    super(value);
    this.prev = null;
  }
}

export default class DoublyLinkedList extends LinkedList {
  constructor(comparator) {
    super(comparator);
    this.tail = null;
  }

  /**
   * Add a node to the end
   * @param {*} value 
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  push(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  /**
   * Remove a node at a specific index
   * @param {number} index
   * @return {*}     value
   * @time complexity: O(N) where N is the size of linked list
   * @space complexity: O(1)
   */
  removeAt(index) {
    // CHECK IF THE POSITION IS OUT OF RANGE
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let current;

    if (index === 0) {
      current = this.head;

      if (this.length === 1) {
        this.tail = null;
      } else {
        // REPLACE THE HEAD
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (index === this.length - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      const previous = this.getElementAt(index - 1);
      
      current = previous.next;
      // REPLACE THE CURRENT NODE WITH THE NEXT NODE
      previous.next = current.next;
      current.prev = previous;
    }
    
    // DECREMENT THE LENGTH
    this.length--;

    return current.value;
  }

  /**
   * Insert a node into a specific position in the linked list
   * @param {*} value 
   * @param {number} index 
   * @return {boolean} return true if success, else false
   * @time complexity: O(N) where N is the size of the linked list
   * @space complexity: O(1)
   */
  insert(value, index) {
    // CHECK IF THE POSITION IS OUT OF RANGE
    if (index < 0 || index >= this.length + 1) {
      return false;
    }

    // CREATE AN NEW NODE
    const node = new Node(value);
    
    // SET CURRENT NODE AS THE HEAD AND TAIL
    if (index === 0 && !this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return true;
    }

    // ADD TO THE BEGINNING
    if (index === 0 && this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.length++;

      return true;
    }

    // ADD TO THE END
    if (index === this.length) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tial = node;
      this.length++;
      return true;
    }

    const previous = this.getElementAt(index - 1);

    node.next = previous.next;
    node.prev = previous;
    node.next.prev = node;
    node.prev.next = node;
    this.length++;

    return true;
  }
}