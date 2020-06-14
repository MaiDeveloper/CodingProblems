/**
 * Restore IP Address
 * 
 * Given a string containing only digits, restore it by returning all possible valid IP address combinations.
 * 
 * A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.
 * 
 * Example:
 * 
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 */

/**
 * @param {string} str 
 * @return {string[]}
 */
const restoreIpAddresses = str => {
  return backtracking(str);
};

const backtracking = (str, index = 0, temp = [], result = []) => {
  if (temp.length === 4 && index === str.length) {
    return result.push(temp.join('.'));
  }

  if (temp.length >= 4 || index === str.length) {
    return;
  }

  for (let i = index; i < str.length; i++) {
    const segment = str.substring(index, i + 1);

    if (valid(segment)) {
      temp.push(segment);
      backtracking(str, i + 1, temp, result);
      temp.pop();
    }

  }

  return result;
};

const valid = segment => {
  // NOT VALID IF LENGTH IS GREATER THAN 3
  if (segment.length > 3) {
    return false;
  }

  // NOT VALID IF THE LENGTH IS 1 AND IT IS NOT 0
  if (segment.length === 1 && segment.charAt(0) !== '0') {
    return false;
  }

  // VALID IF IT IS LESS THAN OR EQUAL TO 255
  return parseInt(segment) <= 255;
}

export default restoreIpAddresses;