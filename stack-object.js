class Stack {
  constructor() {
    // STORED ITEMS
    this._items = {};
    // TOTAL NUMBER OF ITEMS
    // ALSO USED AS A KEY TO KEEP ITEMS IN ORDER
    this._count = 0;
  }

  /**
   * Add an item
   * @param {*} item
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  /**
   * Remove the most recently added item
   * @return {*}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this._count--;
    const result = this._items[this._count];
    delete this._items[this._count];

    return result;
  }

  /**
   * Get the most recently added item
   * @return {*}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._items[this._count - 1];
  }

  /**
   * Check whether it contains no items
   * @return {boolean}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  isEmpty() {
    return this._count === 0;
  }
  
  /**
   * Get the total number of items
   * @return {number}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  size() {
    return this._count;
  }

  /**
   * Remove all items
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  clear() {
    this._items = {};
    this._count = 0;
  }

  /**
   * Get a string represetation of items separated with comma
   * @return {string}
   * @time complexity: O(N) where N is the number of items
   * @space complexity: O(N) where N is the number of items
   */
  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let str = this._items[0];

    for (let i = 1; i < this._count; i++) {
      str += ',' + this._items[i];
    }

    return str;
  }
}

export default Stack;