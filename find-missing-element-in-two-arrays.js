function find(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;

  if ((n !== m - 1 && m !== n - 1) || m === n) {
    throw new Error('Invalid input');
  }

  let ans = 0;

  for (let v of arr1) {
    ans ^= v;
  }

  for (let v of arr2) {
    ans ^= v;
  }

  return ans;
}


console.log(find([1,4,5,7,9], [4,5,7,9])); // 1
console.log(find([2,3,4,5], [2,3,4,5,6])); // 6
console.log(find([2,3,4,5,6], [1, 2,3,4,5,6])); // 6
// 5, 6

// 5 !== 5 && 6 !== 4