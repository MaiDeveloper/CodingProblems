/**
 * Clock Angle
 *
 * Given two integers, an hour and a minute, write a function to calculate the angle between the two hands on a clock representing that time.
 *
 * Example 1:
 * Input: 3, 0
 * Output: 90
 *
 * Example 2:
 * Input: 3, 20
 * Output: 20
 *
 * Example 3:
 * Input: 12, 0
 * Output: 0
 *
 * Example 4:
 * Input: 2, 45
 * Output: 172.5
 *
 */

/**
 * Calculate the clock angle
 * @param {Number} hour
 * @param {Number} minute
 * @return {Number}
 * @time comlexity: O(1)
 * @space complexity: O(1)
 */
const clockAngle = (hour, minute) => {
  const ANGLE_PER_HOUR = 360 / 12,
        ANGLE_PER_MINUTE = 360 / 60,
        minuteHand = minute * ANGLE_PER_MINUTE,
        hourHand = hour * ANGLE_PER_HOUR + minute / 60 * ANGLE_PER_HOUR;

  const angle = Math.abs(hourHand - minuteHand);

  return Math.min(360 - angle, angle);
};


import { assert } from 'chai';

describe('Clock Angle', () => {

    it('3:00 should be 90 degree', () => {
      assert.strictEqual(clockAngle(3, 0), 90);
    });

    it('3:20 should be 20 degree', () => {
      assert.strictEqual(clockAngle(3, 20), 20);
    });

    it('12:00 should be 0 degree', () => {
      assert.strictEqual(clockAngle(12, 0), 0);
    });

    it('2:45 should be 172.5 degree', () => {
      assert.strictEqual(clockAngle(2, 45), 172.5);
    });

    it('9:00 should be 90 degree', () => {
      assert.strictEqual(clockAngle(9, 0), 90);
    });

});