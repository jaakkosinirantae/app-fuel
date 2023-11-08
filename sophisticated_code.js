/* 
 * Filename: sophisticated_code.js
 * Description: This code is a complex implementation of a sorting algorithm called Quick Sort.
 * It sorts an array of integers in ascending order using recursion and helps understand the 
 * divide and conquer approach of Quick Sort.
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [9, 7, 5, 11, 12, 2, -2, 0, 4];
const sortedArray = quickSort(unsortedArray);

console.log('Unsorted Array:', unsortedArray);
console.log('Sorted Array:', sortedArray);

// Output:
// Unsorted Array: [9, 7, 5, 11, 12, 2, -2, 0, 4]
// Sorted Array: [-2, 0, 2, 4, 5, 7, 9, 11, 12]