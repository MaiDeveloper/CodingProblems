function activitySelection(arr) {
  if (arr.length === 0) {
    return 0;
  }

  // Sort by finish time
  arr.sort((a, b) => a[1] - b[1]);

  // Always select the first activity
  let i = 0;
  let result = [arr[0]];

  for (let j = 1, l = arr.length; j < l; j++) {
    if (arr[j][0] >= arr[i][1]) {
      i = j;
      result.push(arr[j]);
    }
  }
  return result;
}



const arr1 = [
  // [start, finish]
  [12, 25],
  [20, 30],
  [10, 20]
];

console.log(activitySelection(arr1)); // 2

const arr2 = [
  [8, 9],
  [5, 7],
  [3, 4],
  [0, 6],
  [5, 9],
  [1, 2],
];

console.log(activitySelection(arr2)); // 4