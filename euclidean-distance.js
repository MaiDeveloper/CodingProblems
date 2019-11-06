
/**
 * Calculate the distance between two points in one dimensional space
 * @param {number} a first point
 * @param {number} b second point
 * @return {number}
 * @time complexity: O(1)
 * @space complexity: O(1)
 */
function oneDimensional(a, b) {
  let dist = a - b;

  if (dist < 0) {
    dist = Math.sqrt(Math.pow(dist, 2));
  }

  return dist;

  // Or
  // return Math.abs(a - b);
};

/**
 * Calculate the distance between two points in two dimensional space
 * @param {number[]} a first point, Ex. [2, 4]
 * @param {number[]} b second point, Ex. [-3, 8]
 * @return {number}
 * @time complexity: O(1)
 * @space complexity: O(1)
 */
function twoDimensional(a, b) {
  return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
}

console.log(oneDimensional(8, -3));
console.log(twoDimensional([2, 4], [-3, 8]));