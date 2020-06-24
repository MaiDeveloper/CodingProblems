import {
  maxSubArrayGreedy
} from '../../leetcode/52-maximum-subarray';

describe('Maximum Subarray Greedy', () => {
  test('[-2,1,-3,4,-1,2,1,-5,4]', () => {
    const result = maxSubArrayGreedy([-2,1,-3,4,-1,2,1,-5,4]);
    expect(result).toEqual(6);
  });
});