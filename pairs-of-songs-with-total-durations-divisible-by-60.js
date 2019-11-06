/**
 * Pairs of Songs With Total Durations Divisible by 60
 *
 * In a list of songs, the i-th song has a duration of time[i] seconds.
 *
 * Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i < j with (time[i] + time[j]) % 60 == 0.
 *
 * Example 1:
 *
 * Input: [30,20,150,100,40]
 * Output: 3
 * Explanation: Three pairs have a total duration divisible by 60:
 * (time[0] = 30, time[2] = 150): total duration 180
 * (time[1] = 20, time[3] = 100): total duration 120
 * (time[1] = 20, time[4] = 40): total duration 60
 *
 * Example 2:
 *
 * Input: [60,60,60]
 * Output: 3
 * Explanation: All three pairs have a total duration of 120, which is divisible by 60.
 */

/**
 * @param {number[]} time
 * @return {number}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
var numPairsDivisibleBy60 = function(time) {
    const map = {};
    let count = 0;

    for (let t of time) {
        let remainder = t % 60;
        count += map[(60 - remainder) % 60] || 0;
        map[remainder] = (map[remainder] || 0) + 1;
    }

    return count;
};

/**
 * @param {number[]} time
 * @return {number}
 * @time complexity: O(n^2) where n is the size of array time
 * @space complexity: O(1)
 */
var numPairsDivisibleBy60Quadratic = function(time) {
  let pairs = 0;

  for (let i = 0; i < time.length - 1; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        pairs++;
      }
    }
  }

  return pairs;
};


const assert = require('chai').assert;

describe('Pairs of Songs With Total Durations Divisible by 60', () => {

  it('should return 3 when [30,20,150,100,40] is given', () => {
    assert.strictEqual(numPairsDivisibleBy60([30,20,150,100,40]), 3);
  });

  it('should return 3 when [60,60,60] is given', () => {
    assert.strictEqual(numPairsDivisibleBy60([60,60,60]), 3);
  });

});
