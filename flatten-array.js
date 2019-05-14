function flatten_array(arr) {
  let flatten = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      flatten = flatten.concat(flatten_array(val));
    } else {
      flatten.push(val);
    }
  }
  return flatten;
}

console.log(flatten_array([1, [2], [3, [[4]]]]));