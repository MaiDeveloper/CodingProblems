export default class Set {
  constructor() {
    // STORE UNIQUE ITEMS
    this.items = {};
  }

  /**
   * Add an item
   * @param {string} value
   * @return {bolean}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  add(value) {
    if (this.has(value)) {
      return false;
    }

    this.items[value] = null;
    return true;
  }

  /**
   * Check whether it contains the value
   * @param {string} value 
   * @return {boolean}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  has(value) {
    return this.items[value] !== undefined;
  }

  /**
   * Remove a value
   * @param {string} value 
   * @return {boolean}
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  remove(value) {
    if (!this.has(value)) {
      return false;
    }

    delete this.items[value];
    return true;
  }

  /**
   * Remove everything
   * @time complexity: O(1)
   * @space complexity: O(1)
   */
  clear() {
    this.items = {};
  }

  /**
   * Get the total number of items
   * @return {number}
   * @time complexity: O(1)
   * @space complexity: O(N) where N is the total number of values
   */
  size() {
    return this.values().length;
  }

  /**
   * Get all the values
   * @return {string[]}
   * @time complexity: O(1)
   * @space complexity: O(N) where N is the total number of values
   */
  values() {
    return Object.keys(this.items);
  }

  /**
   * Combine values with other set
   * @param {Set} otherSet 
   * @return {Set}
   * @time complexity: O(MN) where M is the size of current set, N is the size of otherSet
   * @space complexity: O(MN) where M is the size of current set, N is the size of otherSet
   */
  union(otherSet) {
    // CREATE AN NEW SET
    const newSet = new Set();

    let values = this.values();

    for (const val of values) {
      // COPY ALL THE VALUES TO NEW SET
      newSet.add(val);
    }

    values = otherSet.values();

    for (const val of values) {
      // COPY ALL THE VALUES FROM OTHERSET TO NEW SET
      newSet.add(val);
    }

    return newSet;
  }

  /**
   * Get an new set where values exists in current set and the other set
   * @param {Set} otherSet 
   * @return {Set}
   * @time complexity: O(N) where N is the size of current set
   * @space complexity: O(N) where N is the size of current set
   */
  intersection(otherSet) {
    const newSet = new Set();

    const values = this.values();

    for (const val of values) {
      if (otherSet.has(val)) {
        newSet.add(val);
      }
    }

    return newSet;
  }

  /**
   * Get an new set that exclude values from other set
   * @param {Set} otherSet 
   * @return {Set}
   * @time complexity: O(N) where N is the size of current set
   * @space complexity: O(N) where N is the size of current set
   */
  difference(otherSet) {
    const newSet = new Set();

    const values = this.values();

    for (const val of values) {
      if (!otherSet.has(val)) {
        newSet.add(val);
      }
    }

    return newSet;
  }

  /**
   * Check whether the current set is subset of otherSet
   * @param {Set} otherSet 
   * @return {boolean}
   * @time complexity: O(N) where N is the size of current set
   * @space complexity: O(N) where N is the size of current set
   */
  subset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    const values = this.values();

    for (const val of values) {
      if (!otherSet.has(val)) {
        return false;
      }
    }

    return true;
  }
}

