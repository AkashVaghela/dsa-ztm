const baskets = [2, 65, 34, 2, 1, 7, 8];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://www.toptal.com/developers/sorting-algorithms

// @param compareFn
// Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.

// Sorts an array in place. This method mutates the array and returns a reference to the same array.
// console.log(baskets.sort()); // 1, 2, 2, 34, 65, 7, 8

// To sort the elements in an array without mutating the original array, use toSorted().
// console.log(baskets.toSorted()); // 1, 2, 2, 34, 65, 7, 8

console.log("2".charCodeAt(0)); // 50
console.log("65".charCodeAt(0)); // 54
console.log("34".charCodeAt(0)); // 51
console.log("2".charCodeAt(0)); // 50
console.log("1".charCodeAt(0)); // 49
console.log("7".charCodeAt(0)); // 55
console.log("8".charCodeAt(0)); // 56

// Elementry & simple sorting algos.
// - Bubble sort
// - Selection sort
// - Insertion sort

// Complex & efficient algos. (Divide & Conquer)
// - Merge sort
// - Quick sort

// 1. Bubble sort O(N^2)
// Keeps comparing pairs and interchange them if not in order.

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// 2. Selection sort O(N^2)
// Scans a list of items and swaps the smallest marked item with the first element/appropriate position

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // Set current index as minimum
      let min = i;
      let temp = array[i];
      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[min]) {
          //   Update minimum if current is lower that what we had previously
          min = j;
        }
      }
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

// 3. Insertion sort O(N^2)
// It's useful when you're pretty sure the list is almost sorted.

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // Move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move number to the right root
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

// 4. Merge sort (Divide & Conqur) & O(N log N)
// Using divide and conqur it splits into 2 lists until individual elements and then it sorts all the way up to top.

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// 5. Quick sort (Divide & Conqur) & O(N log N) average and O(N^2) in worst case when pivot is small.
// We take a pivot & put all elements smaller then pivot to left and larger to the right and then do the same to both the side using divide and conquor till it's sorted.
// Pivot: always last item of anf array
function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Rules of using sorting algos.
// Insertion: Small & mostly sorted data
// Bubble: Never or rarely
// Selection: Never or rarely
// Merge sort: When time complexity O(N log N) is important than space complexity O(N), More stable then quick sort
// Quick sort: When space complexity O(log N) is important than time complexity O(N^2), Less stable then merge sort

// Most algorithams can give at max O(N Log N) time complexity and it's mathematically impossible to go below this. But there are strategies to even reduce that using non-comparison sorts.

// Comparison sort:
// Bubble sort, Insertion sort, Selection sort, Merge sort, Quick sort

// Non-comparison sort:
// Counting sort, Radix sort (Only works with numbers and smaller size)
// https://brilliant.org/wiki/counting-sort/
// https://brilliant.org/wiki/radix-sort/

// Questions:
// 1. Sort 10 schools around your house by distance
// Insertion sort (smaller input & better space complexity)

// 2. eBay sorts listing by the current bid amount
// Counting sort, Radix sort (bid amount is fixed range number)

// 3. Sport scores of ESPN
// Quick sort (better space complexity)

// 4. Massive database (can't fit all into memory) needs to sort through past year's user data
// Merge sort (it's not in memory so avoid worst case of Quick sort)

// 5. Almost sorted udemy review data needs to update and add 2 new reviews
// Insertion sort (already sorted data)

// 6. Temprature records for the past 50 years in canada
// Counting sort, Radix sort (if temprature without decimals or negatives)
// Quick sort (better space complexity)

// 7. Large user name database needs to be sorted. Data is very random.
// Heap sort (random dataset)

// 8. You want to teach sorting for the first time.
// Bubble sort & Selection sort

// Javascript uses below algorithams for inbuilt sort function.
// V8 (Chrome & Node.js):
// Before Chrome 70: Quick sort & Insertion sort for smaller arrays
// After Chrome 70: Timsort (Merge sort + Insertion sort)

// SpiderMonkey (Firefox): Merge sort

// JavascriptCore (Safari): Variations of Merge sort & Quock sort

// Stable vs Unstable sort:
// A stable sort maintains the relative order of elements with equal keys, while an unstable sort does not guarantee this. For example, in a list of students with the same grade, a stable sort will keep them in the same alphabetical order as they were in the original list, whereas an unstable sort might change that order.

// https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important
