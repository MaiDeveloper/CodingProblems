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
 * @param {number[]} heights
 * @return {number}
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

const getArea = (i, heights, stack) => {
  const h = heights[stack.pop()],
        w = stack.length ? i - stack[stack.length-1] - 1 : i;

  return h * w;
};


const assert = require('chai').assert;

describe('Largest Rectangle in Histogram', () => {

  it('should find the longest path', () => {
    const input = [2,1,5,6,2,3],
          output = 10;

    assert.strictEqual(largestRectangleArea(input), output);
  });

  it('should return 2 for [1, 1]', () => {
    const input = [1, 1],
          output = 2;

    assert.strictEqual(largestRectangleArea(input), output);
  })

});
