/**
 * 
 * Decode String
 * 
 * Given an encoded string, return its decoded string.
 * 
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 * 
 * You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
 * 
 * Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 * Example 2:
 * 
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 * Example 3:
 * 
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 * Example 4:
 * 
 * Input: s = "abc3[cd]xyz"
 * Output: "abccdcdcdxyz"
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let result = '';
  
  for (let c of s) {
    if (c !== ']') {
      stack.push(c);
      continue;
    }
    
    const letter = getInner(stack);
    
    let num = getNum(stack);
    
    while (num > 0) {
      stack.push(letter);
      num--;
    }
  }
  
  while (stack.length) {
    result = stack.pop() + result;
  }
  
  return result;
};

const getNum = stack => {
  let num = '';
  
  while (!isNaN(stack[stack.length - 1])) {
    num = stack.pop() + num;
  }
  
  return parseInt(num);
};

const getInner = stack => {
  let str = '';
  
  while (stack[stack.length - 1] !== '[') {
    str = stack.pop() + str;
  }
  
  stack.pop();
  
  return str;
};