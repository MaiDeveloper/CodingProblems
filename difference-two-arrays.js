/**
 * Intermediate Algorithm Scripting: Diff Two Arrays
 *
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 *
 * Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
 *
 * Note
 * You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
  const unique = new Set();

  for (let i = 0; i < arr1.length; i++) {
    unique.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (unique.has(arr2[i])) {
      unique.delete(arr2[i]);
    } else {
      unique.add(arr2[i]);
    }
  }

  return Array.from(unique.values());
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));