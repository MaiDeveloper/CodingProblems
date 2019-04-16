/**
 * JavaScript Algorithms and Data Structures Projects: Caesars Cipher
 *
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 *
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) { // LBH QVQ VG!
  let decode = '';

  for (let i = 0, l = str.length; i < l; i++) {
    if (/[A-Z]/.test(str.charAt(i))) {
      const code = 65 + (str.charCodeAt(i) - 65 + 13) % 26;
      decode += String.fromCharCode(code);
    } else {
      decode += str.charAt(i);
    }
  }

  return decode;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));