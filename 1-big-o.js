/** 

https://www.bigocheatsheet.com/
https://visualgo.net/en

Big O types

- O(1) Constants - No loops
- O(log n) Logarithmic - Usually searching algorithms have log(n) if they are sorted (Binary search & not on has maps)
- O(n) Linear - For loops, while loops etc.
- O(n \* log(n)) Log linear - Sorting operations
- O(n^2) Quadratic - Every element in a collection needs to be compared to every other element. Two nested loops.
- o(2^n) Exponential - Recursive algorithms that solves a problem of size n.
- O(n!) Factorial - Adding a loop for every element.

Rules of calculating big O

- Worst case
- Remove constants
- Different terms for inputs
- Drop non dominants

Pillers of good code

- Readable
- Scalable (Speed) - Time complexity
- Scalable (Memory) - Space complexity
*/

const everyone = new Array(100000).fill("nemo");

// Best case: O(1) if nemo is first element
// Worst case: O(n) if nemo is lase element
function findNemo(array) {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("FOUND NEMO!!!");
      break;
    }
  }
  const t1 = performance.now();
  console.log(`Time take: ${t1 - t0} ms`);
}

// findNemo(everyone); // O(n) Linear time

const getFirstItem = (array) => {
  const t0 = performance.now();
  console.log(array[50000]);
  const t1 = performance.now();
  console.log(`Time take: ${t1 - t0} ms`);
};
// getFirstItem(everyone); // O(1) Constant time

// =========================================================================
// Exercise 1

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  // O(n)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// O(1) + O(1) + O(1) + O(n) + O(n) + O(n) + O(n)
// O(3 + 4n) or O(n)

// =========================================================================
// Exercise 2

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)

  // O(n)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }

  // O(n)
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// O(1) + O(1) + O(1) + O(1) + O(n) + O(n) + O(n) + O(n) + O(n) + O(n) + O(n)
// O(4 + 7n) or O(n)

// =========================================================================
// Rule 3 Different terms for inputs

const compareBoxesTwice = (boxes) => {
  boxes.forEach((element) => {
    console.log(element);
  });
  boxes.forEach((element) => {
    console.log(element);
  });
};
// O (n)

const compareBoxesTwice2 = (boxes, boxes2) => {
  boxes.forEach((element) => {
    console.log(element);
  });
  boxes2.forEach((element) => {
    console.log(element);
  });
};
// O (n + m)

const compareBoxesTwice3 = (boxes, boxes2) => {
  boxes.forEach((element1) => {
    boxes2.forEach((element2) => {
      console.log(element1, element2);
    });
  });
};
// O (n * m)

// O(n^2)
// Log all pairs of an array
const array = [1, 2, 3, 4, 5];
function logPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(`[${array[i]}, ${array[j]}]`);
    }
  }
}
// logPairs(array);
// O(n * n) => O(n^2) // Quadratic time

// O(n!)

// =========================================================================
// Question 1

const array1 = ["a", "b", "c", "d", "e"];
const array2 = ["f", "g", "h"];

function containsCommonItem1(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }

  return false;
}

function containsCommonItem2(array1, array2) {
  const map = new Map();

  for (let i = 0; i < array1.length; i++) {
    if (!map.has(array1[i])) {
      map.set(array1[i], true);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (map.has(array2[i])) {
      return true;
    }
  }

  return false;
}

console.log(containsCommonItem1(array1, array2));
console.log(containsCommonItem2(array1, array2));
