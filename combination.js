function combinations (m, n) {
  const nums = [0, 1, 2, 3, 4];
  const result = [];

  backtracking(nums, '', 0, 4);

  function backtracking(nums, str, start, len) {
    if (str.length === 3) {
      const t = str.split('').sort().join('');
      if (result.indexOf(t) === -1) {
        result.push(t);
      }
    }

    for (let i = start; i <= len; i++) {
      backtracking(nums, str + nums[i], start + 1, len);
    }

  }


  return result;
}

console.log(combinations(3, 5));