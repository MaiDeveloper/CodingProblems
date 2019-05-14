/**
 * Reorganize String
 * Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.
 *
 * If possible, output any possible result.  If not possible, return the empty string.
 *
 * Example 1:
 *
 * Input: S = "aab"
 * Output: "aba"
 *
 * Example 2:
 *
 * Input: S = "aaab"
 * Output: ""
 */


/**
 * @param {string} S
 * @return {string}
 */
function reorganizeString(S) {
  const count = {};
  const maxHeap = new BinaryHeap((a, b) => b.count - a.count);
  let ans = '';
  let lastChar = '';

  // Count the number of times each character appears
  for (let char of S) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let k in count) {
    // If a character appears more than half the string
    // It is not possible to reorganize the string
    if (count[k] > Math.ceil(S.length / 2)) {
      return '';
    }
    // Add to the heap
    maxHeap.insert({
      count: count[k],
      char: k
    });
  }

  while (maxHeap.size() >= 2) {
    const a = maxHeap.extract();
    const b = maxHeap.extract();

    // Make sure the character we are about to added to the ans
    // are not the same as the last character
    if (a.char === lastChar) {
      ans += b.char + a.char;
      lastChar = a.char;
    } else {
      ans += a.char + b.char;
      lastChar = b.char;
    }

    a.count--;
    b.count--;

    if (a.count > 0) {
      maxHeap.insert(a);
    }
    if (b.count > 0) {
      maxHeap.insert(b);
    }
  }

  if (maxHeap.size() > 0) {
    ans += maxHeap.extract().char;
  }

  return ans;
};

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

    if (left < this.size() && this.comparator(this.heap[left], this.heap[parentIndex]) < 0) {
      parentIndex = left;
    }

    if (right < this.size() && this.comparator(this.heap[right], this.heap[parentIndex]) < 0) {
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


const assert = require('assert');

describe('Reorganize String', () => {
  it("should return 'aba' if 'aab' is given", () => {
    assert.equal(reorganizeString('aab'), 'aba');
  });
  it("should return '' if 'aaab' is given", () => {
    assert.equal(reorganizeString('aaab'), '');
  });
});