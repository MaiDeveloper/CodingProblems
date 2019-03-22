function bigSorting(arr) {
  return arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a - b;
    }
    for (let i = 0; i < a.length; i++) {
      const a1 = parseInt(a[i]);
      const b1 = parseInt(b[i]);
      if (a1 !== b1) {
        return a1 - b1;
      }
    }
  });
}

console.log(bigSorting([ '31415926535897932384626433832795', '1', '3', '10', '3', '5' ]));
// 1, 3, 3, 5, 10, 31415926535897932384626433832795