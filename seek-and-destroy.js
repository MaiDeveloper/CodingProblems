/**
 * Intermediate Algorithm Scripting: Seek and Destroy
 *
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 *
 * Note
 * You have to use the arguments object.
 */
function destroyer(arr) {
  const targets = new Set();
  Array.from(arguments).slice(1).forEach(v => {
    targets.add(v);
  });

  for (let i = 0; i < arr.length; i++) {
    if (targets.has(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);