class Queue {
  constructor() {
    // STORE DATA IN AN ARRAY
    this._items = [];
  }

  /**
   * Add an item to the end
   * @param {*} item
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  enqueue(item) {
    this._items.push(item);
  }

  /**
   * Remove an item from the front
   * @return {*}
   * @time complexity: O(N) where N is the size of items
   * @space complexity: O(1)
   */
  dequeue() {
    return this._items.shift();
  }

  /**
   * Get an item from the front
   * @return {*}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  peek() {
    return this._items[0];
  }

  /**
   * Check whether or not it contains no items
   * @return {boolean}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  isEmpty() {
    return this._items.length === 0;
  }

  /**
   * Get number of items
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
}

export default Queue;