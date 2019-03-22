function permuteString(str) {
  const result = [];

  permute(str.split(''), 0, str.length - 1, result);

  return result.map(e => e.join(''));
}

function permuteArray(arr) {
  const result = [];
  permute(arr, 0, arr.length - 1, result);
  return result;
}

function permute(arr, start, end, result) {
  if (start === end) {
    result.push(arr.slice());
    return;
  }

  for (let i = start; i <= end; i++) {
    swap(arr, i, start);
    permute(arr, start + 1, end, result);
    swap(arr, start, i);
  }
}

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}


console.log(permuteString('ABC').join(' ')); //ABC ACB BAC BCA CAB CBA
console.log(permuteArray(['A','B','C'])); //ABC ACB BAC BCA CAB CBA

