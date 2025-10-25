const names = ["sahas", "kuldeep", "jay"];

names[0]; // O(1)

names.push("parth"); // O(1)
names.unshift("andrea"); // O(n)
names.splice(2, 0, "julia"); // O(n)

names.pop(); // O(1)
names.shift(); // O(n)

/**
 * Access: O(1)
 * Search: O(N)
 * Insertion: O(N)
 * Deletion: O(N)
 */

/** Static Arrays
 * Size: Fixed at compile time
 * Memory allocation: Allocated at compile time, often on the stack
 * Flexibility: Low; can't grow or shrink
 * Performance: Fast access O(1) due to contiguous memory
 * Resizing: Not possible
 */

/** Dynamic Arrays
 * Size: Can change during runtime
 * Memory allocation: Allocated at runtime, often on the heap
 * Flexibility: High; can grow or shrink
 * Performance: Slower access during resizes (which can be (O(n))) but average (O(1)) for additions
 * Resizing: Can be resized by allocating a new, larger array and copying elements over
 */

/** Arrays in javascript are just objects with an integer as a key. */

/** Strings are basically an array of characters. */

/** Searching
 * is it sorted? - yes - Divide and conquer - Binary search O(log n)
 * is it sorted? - no - Will sorting make it faster? - no - Linear search
 * is it sorted? - no - is it a string? - Trie data structure can help
 */

/** Sorting
 * Redix sort, Quick sort, Heap sort, Bubble sort, Selection sort, Insertion sort, Merge sort, Counting sort O(n log n)
 */

/** Advantages
 * Fast lookup
 * Fast push/pop
 * Ordered
 */

/** Disadvantages
 * Slow inserts
 * Slow deletes
 * Fixed size (if using static arrays)
 */

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    delete this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

/**
 * Problem 1: Create a function that reverses a string.
 * Input: 'Hi my name is andrea'
 * Output: 'aerdna si eman ym iH'
 */

function reverseString1(string) {
  const backwards = [];
  for (let i = string.length - 1; i >= 0; i--) {
    backwards.push(string[i]);
  }
  return backwards.join("");
}

const reverseString2 = (string) => string.split("").reverse().join("");

/**
 * Problem 2: Merge 2 sorted arrays in to 1 sorted array.
 * Input: [0, 3, 4, 31], [4, 6, 30]
 * Output: [0, 3, 4, 4, 6, 30, 31]
 */

/** The most efficient way to merge two sorted arrays is to use a two-pointer approach. */
/** The most efficient way to merge two unsorted arrays is to concatenate then sort (Quicksort, Mergesort, Timesort). */

// O(n + m)
function mergeSortedArrays1(array1, array2) {
  const mergedArray = [];
  let i = 0; // Pointer for array1
  let j = 0; // Pointer for array2

  // 1. Compare elements and push the smaller one
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  // 2. Add remaining elements from array1 (if any)
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }

  // 3. Add remaining elements from array2 (if any)
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }

  return mergedArray;
}

const mergeSortedArrays2 = (array1, array2) => {
  const array = [...array1, ...array2]; // O(n + m)
  return array.sort((a, b) => a - b); // O(n+m log (n+m))
};

/**
 * Problem 3: Two Sum: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * nums = [3,2,4], target = 6
 * Output: [1,2]
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

// O(n^2)
function twoSum1(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++)
      if (array[i] + array[j] === target) {
        return [i, j];
      }
  }
  return [];
}

// O(n)
const twoSum2 = (array, target) => {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    const diff = target - array[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(array[i], i);
  }

  return [];
};

/**
 * Problem 4: Maximum Subarray: Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * nums = [1]
 * Output: 1
 * Input: [5,4,-1,7,8]
 * Output: 23
 */

// (O(N^3))
function maximumSubarray1(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let globalMax = -Infinity;

  // Loop 1: Starting index (i)
  for (let i = 0; i < nums.length; i++) {
    // Loop 2: Ending index (i)
    for (let j = i; j < nums.length; j++) {
      let currentSum = 0;

      // Loop 3: Calculate the sum of subarray from i to j
      for (let k = i; k <= j; k++) {
        currentSum += nums[k];
      }

      // Update the overall maximum
      if (currentSum > globalMax) {
        globalMax = currentSum;
      }
    }
  }

  return globalMax;
}

// (O(N^2))
function maximumSubarray2(nums) {
  let globalMax = -Infinity;

  // Loop 1: Starting index (i)
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;

    // Loop 2: Ending index (j)
    // currentSum tracks the sum of the subarray from nums[i] to nums[j]
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j]; // Extend the subarray sum

      // Update the overall maximum
      globalMax = Math.max(globalMax, currentSum);
    }
  }

  return globalMax;
}

// Kadane's Algorithm (O(N))
function maximumSubarray3(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let globalMax = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    // 1. Calculate the maximum sum ending at the current position (i)
    // Option A: Start a new subarray (just the current number)
    // Option B: Extend the previous subarray (current number + previous currentMax)
    currentMax = Math.max(num, currentMax + num);

    // 2. Update the overall maximum sum found so far
    globalMax = Math.max(globalMax, currentMax);
  }

  return globalMax;
}

/**
 * Problem 5: Move Zeroes: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Input: nums = [0]
 * Output: [0]
 */

// Two-Pointer Approach O(N)
function moveZeros1(nums) {
  let lastNonZeroFoundAt = 0;

  // 1. Iterate through the array.
  // If the element is non-zero, swap it to the current
  // 'lastNonZeroFoundAt' position and advance the pointer.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      lastNonZeroFoundAt++;
    }
  }

  // 2. Fill the rest of the array (from lastNonZeroFoundAt to the end) with 0s.
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// Single-Pass (Swap) Implementation O(N)
function moveZeros2(nums) {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== lastNonZeroIndex) {
        let temp = nums[i];
        nums[i] = nums[lastNonZeroIndex];
        nums[lastNonZeroIndex] = temp;
      }
      lastNonZeroIndex++;
    }
  }
}

/**
 * Problem 6: Contains Duplicate: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * Input: nums = [1,2,3,1]
 * Output: true
 * Input: nums = [1,2,3,4]
 * Output: false
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */

// O(N)
function containsDuplicate1(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// O(N)
const containsDuplicate2 = (array) => {
  const uniqueElements = new Set(array);
  return uniqueElements.size < array.length;
};

/**
 * Problem 7: Rotate Array: Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 */

// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
function mergeAlternately(word1, word2) {
  const mergedString = [];
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    mergedString.push(word1[i]);
    i++;

    mergedString.push(word2[j]);
    j++;
  }

  while (i < word1.length) {
    mergedString.push(word1[i]);
    i++;
  }

  while (j < word2.length) {
    mergedString.push(word2[j]);
    j++;
  }

  return mergedString.join("");
}

// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
function kidsWithCandies(candies, extraCandies) {
  const hasHighestCandies = [];

  const highestCandies = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    const maxCandies = candies[i] + extraCandies;
    hasHighestCandies[i] = maxCandies >= highestCandies;
  }

  return hasHighestCandies;
}

// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

// flowerbed = [1,0,0,0,1], n = 1
// flowerbed = [1,0,0,0,1], n = 2

function canPlaceFlowers(flowerbed, n) {
  // 1. Pad the array with 0s at the start and end to simplify boundary checks.
  const paddedBed = [0, ...flowerbed, 0];
  let plantedCount = 0;

  // We only need to iterate over the spots in the original flowerbed,
  // which now correspond to indices 1 to paddedBed.length - 2.
  for (let i = 1; i < paddedBed.length - 1; i++) {
    if (
      paddedBed[i - 1] === 0 &&
      paddedBed[i] === 0 &&
      paddedBed[i + 1] === 0
    ) {
      paddedBed[i] = 1;
      plantedCount++;

      if (plantedCount >= n) {
        return true;
      }
    }
  }

  // 2. Return true if the total planted count meets or exceeds n
  return plantedCount >= n;
}
