/**
 * Balanced brackets
 *
 * Determine whether a generated string of brackets is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.
 *
 * Examples:
 * (empty) true
 * [] true
 * ][ false
 * [][] true
 * ][][ false
 * []][[] false
 * [[[[]]]] true
 */

function isBalanced (str) {
  let bal = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "[") {
      bal += 1;
    } else {
      bal -= 1;
    }

    if (bal < 0) {
      return false;
    }
  }

  return true;
}

console.log(isBalanced('') === true);
console.log(isBalanced('[]') === true);
console.log(isBalanced('))][') === false);
console.log(isBalanced('[][]') === true);
console.log(isBalanced('))][][') === false);
console.log(isBalanced('[]][[]') === false);
console.log(isBalanced('[[[[]]]]') === true);