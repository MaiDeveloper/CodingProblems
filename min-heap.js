/**
 * Comparate two values
 * @param {number|string} a 
 * @param {number|string} b 
 * @return {number}
 * @time complexity: O(1)
 * @space complexity: O(1)
 */
export const defaultCompare = (a, b) => {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}

export default class MinHeap {
  constructor(compare = defaultCompare) {
    this.heap = [];
    this.compare = compare;
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }

    return Math.floor((index - 1) / 2);
  }

  insert(value) {
    if (value == null) {
      return false;
    }

    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
    return true;
  }

  bubbleUp(index) {
    let parent = this.getParentIndex(index);

    while (index > 0 && this.compare(this.heap[parent], this.heap[index]) === 1) {
      this.swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }

    if (this.size() === 1) {
      return this.heap.shift();
    }

    const removed = this.heap.shift();
    this.bubbleDown(0);
    return removed;
  }

  bubbleDown(index) {
    let currentIndex = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();

    if (left < size && this.compare(this.heap[currentIndex], this.heap[left]) === 1) {
      currentIndex = left;
    }

    if (right < size && this.compare(this.heap[currentIndex], this.heap[right]) === 1) {
      currentIndex = right;
    }

    if (currentIndex !== index) {
      this.swap(currentIndex, index);
      this.bubbleDown(currentIndex);
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}