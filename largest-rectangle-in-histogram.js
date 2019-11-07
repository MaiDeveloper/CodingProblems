/**
 * Largest Rectangle in Histogram
 *
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.
 *
 * Example:
 *
 *       ___
 *     __| |
 *     | | |
 *     | | |__
 * ___ | | | |
 * | |_| | | |
 * | | | | | |
 * ----------------
 *       ___
 *     __| |
 *     |x|x|
 *     |x|x|__
 * ___ |x|x| |
 * | |_|x|x| |
 * | | |x|x| |
 * ----------------
 *
 * Input: [2,1,5,6,2,3]
 * Output: 10
 *
 */

/**
 * Get the largest rectangle area
 * @param {number[]} heights
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(n)
 */
const largestRectangleArea = heights => {

  const n = heights.length,
        stack = [];

  let maxArea = 0;

  for (let i = 0; i < n; i++) {

    while (stack.length && heights[i] <= heights[stack[stack.length-1]]) {
      maxArea = Math.max(maxArea, getArea(i, heights, stack));
    }

    stack.push(i);
  }

  while (stack.length) {
    maxArea = Math.max(maxArea, getArea(n, heights, stack));
  }

  return maxArea;
};

/**
 * Calcualte the area
 * @param {number} i          index element in heights
 * @param {number[]} heights
 * @param {number[]} stack
 * @return {number}
 * @time complexity: O(1)
 * @space complexity: O(1)
 */
const getArea = (i, heights, stack) => {
  const h = heights[stack.pop()],
        w = stack.length ? i - stack[stack.length-1] - 1 : i;

  return h * w;
};


import { assert } from 'chai';

describe('Largest Rectangle in Histogram', () => {

  it('should find the longest path', () => {
    assert.strictEqual(largestRectangleArea([2,1,5,6,2,3]), 10);
  });

  it('should return 2 for [1, 1]', () => {
    assert.strictEqual(largestRectangleArea([1, 1]), 2);
  });

  it('should return 1 for [1]', () => {
    assert.strictEqual(largestRectangleArea([1]), 1);
  });

});
