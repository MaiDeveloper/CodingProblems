/**
 * Minimum Remove to Make Valid Parentheses
 * 
 * Given a string s of '(' , ')' and lowercase English characters. 
 * 
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
 * 
 * Formally, a parentheses string is valid if and only if:
 * 
 * It is the empty string, contains only lowercase characters, or
 * It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * It can be written as (A), where A is a valid string.
 *  
 * 
 * Example 1:
 * 
 * Input: s = "lee(t(c)o)de)"
 * Output: "lee(t(c)o)de"
 * Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
 * Example 2:
 * 
 * Input: s = "a)b(c)d"
 * Output: "ab(c)d"
 * Example 3:
 * 
 * Input: s = "))(("
 * Output: ""
 * Explanation: An empty string is also valid.
 * Example 4:
 * 
 * Input: s = "(a(b(c)d)"
 * Output: "a(b(c)d)"
 */ 

/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
  const invalidIndexes = {};
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(i);
      } else if (s[i] === ')' && stack.pop() === undefined) {
        invalidIndexes[i] = true;
      }
    }
    
    while (stack.length > 0) {
      invalidIndexes[stack.pop()] = true;
    }
    
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
      if (!invalidIndexes[i]) {
        result += s[i];
      }
    }
    
    return result;
};

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = (s) => {
  let str = '';
  let openSeen = 0;
  let balance = 0;
  let result = '';
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          openSeen++;
          balance++;
      } else if (s[i] === ')') {
          if (balance === 0) {
              continue;
          }
          balance--;
      }
      
      str += s[i];
  }
  
  let openToKeep = openSeen - balance;
  
  for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
          openToKeep--;
          if (openToKeep < 0) {
              continue;
          }
      }
      
      result += str[i];
  }
  
  return result;
};