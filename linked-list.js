/**
 * Default comparator for checking equality of two nodes
 * @param {*} a 
 * @param {*} b
 * @return {boolean}
 * @time complexity: O(1)
 * @space complexity: O(1)
 */
const comparator = (a, b) => a === b;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(compareFunc = comparator) {
    this.length = 0;
    this.head = null;
    this.comparator = compareFunc;
  }

  /**
   * Add a node to the end
   * @param {*} data
   * @time complexity: O(N) where N is the size of linked list
   * @space complexity: O(1)
   */
  append(data) {
    // CREATE AN NEW NODE
    const node = new Node(data);

    if (this.head === null) {
      // SET THE HEAD TO CURRENT NODE
      this.head = node;
      // INCREMENT THE LENGTH
      this.length++;
      return;
    }

    let current = this.head;

    // TRAVERSE EACH NODE AND GET TO THE LAST NODE
    while (current.next) {
      current = current.next;
    }

    // ADD THE NODE TO THE END
    current.next = node;

    // INCREMENT THE LENGTH
    this.length++;
  }

  /**
   * Remove a node at a specific position
   * @param {number} index
   * @return {*}     data
   * @time complexity: O(N) where N is the size of libked list
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

      // REPLACE THE HEAD
      this.head = this.head.next;
    } else {
      const previous = this.getNodeAt(index - 1);
      
      current = previous.next;
      // REPLACE THE CURRENT NODE WITH THE NEXT NODE
      previous.next = current.next;
    }
    
    // DECREMENT THE LENGTH
    this.length--;

    return current.data;
  }

  /**
   * Insert a node into a specific position in the linked list
   * @param {number} index 
   * @param {*} data 
   * @return {boolean} return true if success, else false
   * @time complexity: O(N) where N is the size of the linked list
   * @space complexity: O(1)
   */
  insert(index, data) {
    // CHECK IF THE POSITION IS OUT OF RANGE
    if (index < 0 || index >= this.length + 1) {
      return false;
    }

    // CREATE AN NEW NODE
    const node = new Node(data);
    
    // ADD TO THE HEAD
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.length++;

      return true;
    }

    const previous = this.getNodeAt(index - 1);

    node.next = previous.next;
    previous.next = node;

    this.length++;

    return true;
  }

  /**
   * Find and get the index of the node
   * @param {*} data 
   * @return {number}
   * @time complexity: O(N) where N is the size of the linked list
   * @space complexity: O(1)
   */
  indexOf(data) {
    let current = this.head,
        index = 0;
    
    while (current) {
      if (this.comparator(current.data, data)) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  /**
   * Find and remove a node from the linked list
   * @param {*} data 
   * @return {*}
   * @time complexity: O(N) where N is the size of the linked list
   * @space complexity: O(1)
   */
  remove(data) {
    const index = this.indexOf(data);
    return this.removeAt(index);
  }

  /**
   * Check whether it contains no nodes
   * @return {boolean}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Get the number of nodes
   * @return {number}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  size() {
    return this.length;
  }

  /**
   * Get the head of the linked list
   * @return {Node}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  getHead() {
    return this.head;
  }

  /**
   * Get data at the specific index
   * @param {number} index
   * @return {*}
   * @time complexity: O(N) where N is the size of the linked list
   * @space complexity: O(1)
   */
  getNodeAt(index) {
    // CHECK IF THE POSITION IS OUT OF RANGE
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.head;
    }

    let current = this.head,
        previous,
        currentIndex = 0;    

    // LOOP THROUGH EACH NODE UNTIL REACH THE NODE BEFORE THE SPECIFIC NODE
    while (currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    return current;
  }

}

export default LinkedList;
