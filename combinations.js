/**
 * Combinations
 * 
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 * 
 * Example:
 * 
 * Input: n = 4, k = 2
 * Output:
 * [
 *   [2,4],
 *   [3,4],
 *   [2,3],
 *   [1,2],
 *   [1,3],
 *   [1,4],
 * ]
 */

const combinations = (n, k) => {
  return backtracking(n, k);
};

const backtracking = (num, count, start = 1, list = [], result = []) => {
  
  if (list.length > count) {
    return result;
  }
  
  if (list.length === count) {
    return result.push(list.slice());
  }

  for (let i = start; i <= num; i++) {
    list.push(i);
    backtracking(num, count, i + 1, list, result);
    list.pop();
  }

  return result;
};

// function combinations (m, n) {
//   const nums = [0, 1, 2, 3, 4];
//   const result = [];

//   backtracking(nums, '', 0, 4);

//   function backtracking(nums, str, start, len) {
//     if (str.length === 3) {
//       const t = str.split('').sort().join('');
//       if (result.indexOf(t) === -1) {
//         result.push(t);
//       }
//     }

//     for (let i = start; i <= len; i++) {
//       backtracking(nums, str + nums[i], start + 1, len);
//     }

//   }


//   return result;
// }

console.log(combinations(4, 2));