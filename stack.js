class Stack {
  constructor() {
    // AN ARRAY TO STORED AN ORDERED COLLECTION OF ITEMS
    this._items = [];
  }

  /**
   * Add an item
   * @param {*} item
   * @time complexity: O(1)
   * @space complexity: O(N)
   */
  push(item) {
    this._items.push(item);
  }

  /**
   * Remove the most recently added item
   * @return {*}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  pop() {
    return this._items.pop();
  }

  /**
   * Get the most recently added item
   * @return {*}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  peek() {
    return this._items[this._items.length - 1];
  }

  /**
   * Check whether it contains no items
   * @return {boolean}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  isEmpty() {
    return this._items.length === 0;
  }

  /**
   * Get the total number of items
   * @return {number}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  size() {
    return this._items.length;
  }

  /**
   * Remove all items
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  clear() {
    this._items = [];
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

    for (let i = 1; i < this.size(); i++) {
      str += ',' + this._items[i];
    }

    return str;
  }
}

export default Stack;
