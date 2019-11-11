function test(str) {
  let ans = '';
  const map = {};

  for (let i = str.length - 1; i >= 0; i--) {
    map[str[i]] = (map[str[i]] || 0) + 1;

    if (map[str[i]] === 1) {
      ans = str[i];
    }
  }

  return ans;
}

console.log(test(" tutorial horizon"));