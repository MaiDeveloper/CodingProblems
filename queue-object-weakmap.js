const items = new WeakMap();
const begin = new WeakMap();
const end = new WeakMap();

class Queue {
  constructor() {
    // STORE DATA IN AN OBJECT
    items.set(this, {});
    
    // OBJECT KEY USED TO KEEY TRACK OF THE BEGINNING OF THE QUEUE
    begin.set(this, 0);

    // OBJECT KEY USED TO KEEY TRACK OF THE ENGING OF THE QUEUE
    end.set(this, 0);
  }

  /**
   * Add an item to the end
   * @param {*} item
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  enqueue(item) {
    items.get(this)[end.get(this)] = item;
    end.set(this, end.get(this) + 1);
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

    const _begin = begin.get(this);
    const item = items.get(this)[_begin];
    delete items.get(this)[_begin];
    begin.set(this, _begin + 1);

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

    return items.get(this)[begin.get(this)];
  }

  /**
   * Get number of items
   * @return {number}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  size() {
    return end.get(this) - begin.get(this);
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
    items.set(this, {});
    begin.set(this, 0);
    end.set(this, 0);
  }
}

export default Queue;