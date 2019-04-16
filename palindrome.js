/**
 * JavaScript Algorithms and Data Structures Projects: Palindrome Checker
 *
 * Return true if the given string is a palindrome. Otherwise, return false.
 *
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 *
 * Note
 * You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
 *
 * We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
 *
 * We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
 */

function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

function palindrome2(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (let i = 0, l = str.length; i < Math.ceil(l / 2); i++) {
    if (str.charAt(i) !== str.charAt(l - 1 - i)) {
      return false;
    }
  }

  return true;
}

console.time("one");
console.log(palindrome("eye") === true); // should return true.
console.log(palindrome("_eye") === true); // should return true.
console.log(palindrome("race car") === true); // should return true.
console.log(palindrome("not a palindrome") === false); // should return false.
console.log(palindrome("A man, a plan, a canal. Panama") === true); // should return true.
console.log(palindrome("never odd or even") === true); // should return true.
console.log(palindrome("nope") === false); // should return false.
console.log(palindrome("almostomla") === false); // should return false.
console.log(palindrome("My age is 0, 0 si ega ym.") === true); // should return true.
console.log(palindrome("1 eye for of 1 eye.") === false); // should return false.
console.log(palindrome("0_0 (: /-\ :) 0-0") === true); // should return true.
console.log(palindrome("five|\_/|four") === false); // should return false.
console.timeEnd("one");
