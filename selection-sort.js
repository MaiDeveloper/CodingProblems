/**
 * Algorithms: Implement Selection Sort
 * Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.
 *
 * Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */

function selectionSort(array) {
  for (let i = 0, l = array.length; i < l - 1; i++) {
    let low = i;
    for (let j = i + 1; j < l; j++) {
      if (array[j] < array[low]) {
        low = j;
      }
    }

    if (low !== i) {
      const t = array[i];
      array[i] = array[low];
      array[low] = t;
    }

  }

  return array;
}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));