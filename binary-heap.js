class BinaryHeap {
  constructor(comparator = (a, b) => {
    return (a < b) ? -1 : (a === b ? 0 : 1);
  }) {
    this.heap = [];
    this.comparator = comparator;
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  insert(data) {
    if (data === undefined || data === null) {
      return false;
    }
    this.heap.push(data);
    this.bubbleUp(this.heap.length - 1);
    return true;
  }
  bubbleUp(index) {
    while (index > 0) {
      let curr = this.heap[index];
      let parentIndex = this.getParentIndex(index);
      let parent = this.heap[parentIndex];

      let compare = this.comparator(parent, curr);
      if (compare < 0 || compare === 0) {
        break;
      }

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  extract() {
    if (this.size() === 0) {
      return undefined;
    }

    if (this.size() === 1) {
      return this.heap.shift();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return value;
  }
  sinkDown(currIndex) {
    let left = this.getLeftIndex(currIndex);
    let right = this.getRightIndex(currIndex);
    let parentIndex = currIndex;

    if (this.comparator(this.heap[left], this.heap[parentIndex]) < 0) {
      parentIndex = left;
    }

    if (this.comparator(this.heap[right], this.heap[parentIndex]) < 0) {
      parentIndex = right;
    }

    if (parentIndex !== currIndex) {
      this.swap(parentIndex, currIndex);
      this.sinkDown(parentIndex);
    }
  }
  peak() {
    return this.size() > 0 ? this.heap[0] : undefined;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  size() {
    return this.heap.length;
  }
}

const assert = require('chai').assert;

describe('BinaryHeap', () => {
  let minHeap;
  beforeEach(() => {
    minHeap = new BinaryHeap();
  });
  it('should defined', () => {
    assert.equal(typeof BinaryHeap, 'function');
  });
  describe('#insert', () => {
    it('should defined', () => {
      assert.equal(typeof minHeap.insert, 'function');
    });
    it('should insert value to the heap', () => {
      minHeap.insert(2);
      minHeap.insert(5);
      assert.deepEqual(minHeap.heap, [2, 5]);
    });
  });
  describe('#size', () => {
    it('should defined', () => {
      assert.equal(typeof minHeap.size, 'function');
    });
    it('should return the length of the heap', () => {
      assert.equal(minHeap.size(), 0);
      minHeap.insert(2);
      assert.equal(minHeap.size(), 1);
    });
  });
  describe('#peak', () => {
    it('should defined', () => {
      assert.equal(typeof minHeap.peak, 'function');
    });
    it('should return the minimum value', () => {
      minHeap.insert(4);
      minHeap.insert(7);
      minHeap.insert(1);
      minHeap.insert(9);
      assert.equal(minHeap.peak(), 1);
    });
    it('should return the minimum value without deleting', () => {
      minHeap.insert(4);
      minHeap.insert(7);
      minHeap.insert(1);
      minHeap.insert(9);
      assert.equal(minHeap.size(), 4);
      minHeap.peak();
      assert.equal(minHeap.size(), 4);
    });
  });
  describe('#extract', () => {
    it('should defined', () => {
      assert.equal(typeof minHeap.extract, 'function');
    });
    it('should return the minimum value', () => {
      minHeap.insert(4);
      minHeap.insert(7);
      minHeap.insert(1);
      minHeap.insert(9);
      assert.equal(minHeap.extract(), 1);
    });
    it('should remove from the heap', () => {
      minHeap.insert(4);
      minHeap.insert(7);
      minHeap.insert(1);
      minHeap.insert(9);
      assert.equal(minHeap.size(), 4);
      minHeap.extract();
      assert.equal(minHeap.size(), 3);
    });
    it('should rearrange the heap', () => {
      minHeap.insert(4);
      minHeap.insert(7);
      minHeap.insert(1);
      minHeap.insert(9);
      assert.deepEqual(minHeap.heap, [1, 7, 4, 9]);
      minHeap.extract();
      assert.deepEqual(minHeap.heap, [4, 7, 9]);
    });
  });

  describe('MaxHeap', () => {
    it('should customize to max heap', () => {
      const max = (a, b) => b - a;
      const heap = new BinaryHeap(max);
      heap.insert(9);
      heap.insert(5);
      heap.insert(10);
      heap.insert(20);
      heap.insert(7);
      heap.insert(30);
      heap.insert(90);
      heap.insert(49);

      const sorted = [90, 49, 30, 20, 10, 9, 7, 5];
      const output = [];

      while (heap.size()) {
        output.push(heap.extract());
      }
      assert.deepEqual(output, sorted);
    });
  });
});

