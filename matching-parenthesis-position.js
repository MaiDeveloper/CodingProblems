/**
 * I like parentheticals (a lot).
 *
 * "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
 *
 * Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.
 *
 * Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).
 */

function getClosingParen(sentence, openingIndex) {
  let balance = 0;

  for (let i = openingIndex, l = sentence.length; i < l; i++) {
    let char = sentence.charAt(i);

    if (char === '(') {
      balance++;
    } else if (char === ')') {
      balance--;
    }

    if (balance === 0) {
      return i;
    }
  }

  return -1;
}

let str = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';

console.log(getClosingParen(str, 10));

