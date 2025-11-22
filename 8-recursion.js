/**
 * Recursion: A function keeps calling itself.
 * 2 Paths:
 *  - Recursive case: function calls itself
 *  - Base case: function stops
 */

/**
 * Rules of recursion
 * 1. Identify the base case
 * 2. Identify the recursive case
 * 3. Get closer and closer and return when needed. Usually we have 2 returns. One for base & other for recursive case.
 */

let counter = 0;
function inception() {
  debugger;
  if (counter > 3) {
    return "Done!";
  }
  counter++;
  inception();
}

let counter2 = 0;
function inception2() {
  debugger;
  if (counter2 > 3) {
    return "Done!";
  }
  counter2++;
  return inception2();
}

/** Factorial */

function factorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    return 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function factorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * factorialRecursive(number - 1);
}

/** Fibonacci */
// Value is the sum of it's 2 previous values
// Given a number N return the index value of Fibonacci sequence, where a sequence is:
// 0,1,1,2,3,5,8,13,21,34,55,89,144...

// O(N)
function fibonacciIterative(index) {
  const array = [0, 1];
  for (let i = 2; i <= index; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array[index];
}

// O(2 ^ N)
// This can be converted to O(N) using dynamic prograaming
function fibonacciRecursive(index) {
  if (index < 2) {
    return index;
  }
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

// Anything you do with a recursion can be done with iteratively (Loops)
// However they exist tail call optimization: It allows recursion to be called without increasing call stack.

// Recursion
// Pros: More readble
// Cons: Less memory efficient

// Iteration
// Pros: More memory efficient
// Cons: Less readble

// Rules to follow for recursion:
// Every time you are using a tree or converting something into a tree, consider recursion.
// - 1. Divided into a number of subproblems that are smaller instances of the same problem
// - 2. Each instance of the subproblem is identical in nature
// - 3. The solutions of each subproblems can be combined to solve a problem at hand.
