function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let found = false;
  let i = 0;

  while (!found) {
    let num = max * ++i;
    if (num % min === 0) {
      found = true;
      for (let i = min + 1; i < max && found; i++) {
        if (num % i !== 0) {
          found = false;
        }
      }
    }
  }

  return max * i;
}

// test here
console.log(smallestCommons([1,5]));