/**
 * 
 * Distant Barcodes
 * 
 * In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].
 * 
 * Rearrange the barcodes so that no two adjacent barcodes are equal.  You may return any answer, and it is guaranteed an answer exists.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: [1,1,1,2,2,2]
 * Output: [2,1,2,1,2,1]
 * Example 2:
 * 
 * Input: [1,1,1,1,2,2,3,3]
 * Output: [1,3,1,3,2,1,2,1]
 *  
 * 
 * Note:
 * 
 * 1 <= barcodes.length <= 10000
 * 1 <= barcodes[i] <= 10000
 */

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const nums = {};
  const list = [];
  
  for (let i = 0; i < barcodes.length; i++) {
    const num = barcodes[i];
    
    nums[num] = (nums[num] || 0) + 1;
  }
  
  for (let num in nums) {
    list.push({
      num: parseInt(num),
      count: nums[num],
    });
  }
  
  list.sort((a, b) => b.count - a.count);
  
  const result = [];
  
  while (list.length) {
    const num1 = list[0].num;
    
    result.push(num1);
    list[0].count--;
    
    if (list.length > 1) {
      const num2 = list[1].num;
      
      result.push(num2);
      list[1].count--;
      
      if (list[1].count === 0) {
        list.splice(1, 1);
      }
    }
    
    if (list[0].count === 0) {
      list.splice(0, 1);
    }
    
    list.sort((a, b) => b.count - a.count);
  }
  
  return result;
};


/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const nums = new Map();
  const heap = new MinHeap();
  const result = [];
  
  for (const num of barcodes) {
    if (nums.has(num)) {
      nums.set(num, nums.get(num) + 1);
    } else {
      nums.set(num, 1);
    }
  }
  
  for (const [num, count] of nums) {
    heap.insert({ num, count });
  }
  
  while (!heap.isEmpty()) {
    const first = heap.extract();
    
    result.push(first.num);
    first.count--;
    
    const second = heap.extract();
    
    if (second) {
      result.push(second.num);
      second.count--;
    }
    
    if (first.count) {
      heap.insert(first);
    }
    
    if (second.count) {
      heap.insert(second);
    }
  }
  
  return result;
};

const defaultCompare = (a, b) => {
if (a.count === b.count) {
  return 0;
}

return a.count < b.count ? 1 : -1;
}

class MinHeap {
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
    this.swap(parent, index);
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