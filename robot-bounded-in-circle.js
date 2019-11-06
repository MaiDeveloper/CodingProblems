/**
 * Robot Bounded In Circle
 *
 * On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:
 *
 *     "G": go straight 1 unit;
 *     "L": turn 90 degrees to the left;
 *     "R": turn 90 degress to the right.
 *
 * The robot performs the instructions given in order, and repeats them forever.
 *
 * Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
 *
 * Example 1:
 *
 * Input: "GGLLGG"
 * Output: true
 * Explanation:
 * The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
 * When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
 *
 * Example 2:
 *
 * Input: "GG"
 * Output: false
 * Explanation:
 * The robot moves north indefinitely.
 *
 * Example 3:
 *
 * Input: "GL"
 * Output: true
 * Explanation:
 * The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
 *
 * Note:
 *
 *     1 <= instructions.length <= 100
 *     instructions[i] is in {'G', 'L', 'R'}
 */

/**
 * Robot Bounded In Circle
 * @param {string} instructions
 * @return {boolean}
 * @time complexity: O(n)
 * @space complexity: O(1)
 */
var isRobotBounded = function(instructions) {
  const directions = [
    [0, 1],  // Up
    [1, 0],  // Right
    [0, -1], // Down
    [-1, 0]  // Left
  ];
  let x = 0;   // Current robot position in x axis
  let y = 0;   // Current robot position in y axis
  let dir = 0; // Current robot direction

  for (let c of instructions) {
    switch (c) {
      case 'G':
        x += directions[dir][0]; // Move forward in current direction
        y += directions[dir][1]; // Move forward in current direction
        break;
      case 'L':
        dir = (dir + 3) % 4; // dir = dir - 1
        break;
      case 'R':
        dir = (dir + 1) % 4; // dir = dir + 1
    }
  }

  // If the robot returns to initially position
  // or the robot is not facing north
  // it will eventually back to the initially position
  // within 4 times of repeating the instructions
  return x === 0 && y === 0 || dir !== 0;
};

const assert = require('chai').assert;

describe('Robot Bounded In Circle', () => {

  it('should return true if \'GGLLGG\' is given', () => {
    assert.strictEqual(isRobotBounded('GGLLGG'), true);
  });

  it('should return true if \'GG\' is given', () => {
    assert.strictEqual(isRobotBounded('GG'), false);
  });

  it('should return true if \'GL\' is given', () => {
    assert.strictEqual(isRobotBounded('GL'), true);
  });

});