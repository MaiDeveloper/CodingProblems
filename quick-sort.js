/**
 * Algorithms: Implement Quick Sort
 *
 * Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.
 *
 * Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.
 *
 * Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.
 */

function quickSort(array, left = 0, right = array.length - 1) {

  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}

function pivot(array, left = 0, right = array.length - 1) {
  let shift = left;

  for (let i = left + 1; i <= right; i++) {
    if (array[i] < array[left]) {
      swap(array, i, ++shift);
    }
  }

  swap(array, left, shift);

  return shift;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const leftSide = arr.slice(1).filter(v => v < pivot);
  const rightSide = arr.slice(1).filter(v => v >= pivot);

  return quick_sort(leftSide).concat([pivot]).concat(quick_sort(rightSide));
}

function merge_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = merge_sort(arr.slice(0, mid));
  const right = merge_sort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return arr.concat(left).concat(right);
}

console.time('quickSort');
quickSort([1, 9, 2, 12, 32, 132, 5454, 23543, 234, 2342, 234, 24, 34,5 ,5, 6, 6,4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.timeEnd('quickSort');

console.time('quick_sort');
quick_sort([1, 9, 2, 12, 32, 132, 5454, 23543, 234, 2342, 234, 24, 34,5 ,5, 6, 6,4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.timeEnd('quick_sort');

console.time('merge_sort');
merge_sort([1, 9, 2, 12, 32, 132, 5454, 23543, 234, 2342, 234, 24, 34,5 ,5, 6, 6,4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.timeEnd('merge_sort');