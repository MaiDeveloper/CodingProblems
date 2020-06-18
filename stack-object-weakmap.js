const items = new WeakMap();
const count = new WeakMap();

class Stack {
  constructor() {
    // STORED ITEMS
    items.set(this, {});

    // TOTAL NUMBER OF ITEMS
    // ALSO USED AS A KEY TO KEEP ITEMS IN ORDER
    count.set(this, 0);
  }

  /**
   * Add an item
   * @param {*} item
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  push(item) {
    items.get(this)[count.get(this)] = item;
    count.set(this, count.get(this) + 1);
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

    count.set(this, count.get(this) - 1);

    const item = items.get(this)[count.get(this)];

    delete items.get(this)[count.get(this)];

    return item;
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

    return items.get(this)[count.get(this) - 1];
  }

  /**
   * Check whether it contains no items
   * @return {boolean}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  isEmpty() {
    return count.get(this) === 0;
  }

  /**
   * Get the total number of items
   * @return {number}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  size() {
    return count.get(this);
  }

  /**
   * Remove all items
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  clear() {
    items.set(this, {});
    count.set(this, 0);
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

    const _items = items.get(this);
    const _count = count.get(this);

    let str = _items[0];

    for (let i = 1; i < _count; i++) {
      str += ',' + _items[i];
    }

    return str;
  }
}

export default Stack;