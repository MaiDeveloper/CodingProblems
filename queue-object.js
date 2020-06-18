class Queue {
  constructor() {
    // STORE DATA IN AN OBJECT
    this._items = {};
    
    // OBJECT KEY USED TO KEEY TRACK OF THE BEGINNING OF THE QUEUE
    this._begin = 0;

    // OBJECT KEY USED TO KEEY TRACK OF THE ENGING OF THE QUEUE
    this._end = 0;
  }

  /**
   * Add an item to the end
   * @param {*} item
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  enqueue(item) {
    this._items[this._end] = item;
    this._end++;
  }

  /**
   * Remove an item from the front
   * @return {*}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this._items[this._begin];
    delete this._items[this._begin];
    this._begin++;

    return item;
  }

  /**
   * Get the first item
   * @return {*}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._items[this._begin];
  }

  /**
   * Get number of items
   * @return {number}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  size() {
    return this._end - this._begin;
  }

  /**
   * Check whether or not it contains no items
   * @return {boolean}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Remove all items
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  clear() {
    this._items = {};
    this._begin = 0;
    this._end = 0;
  }
}

export default Queue;