/** Stacks: LIFO */

/**
 * Lookups/searching: O(N)
 * Push: O(1)
 * Pop: O(1) - Removes last element
 * Peek: O(1) - Reads last element
 */

/** Using array to build a stack is efficient as pop & push is O(1) */
/** Using linked list to build a stack is inefficient as append is 0(1) but remove is O(N). This is also good but it taks extra space and scattered across memory */

/** Advantages of stacks & queues
 * Fast operations
 * Fast peek
 * Ordered
 */

/** Disadvantages of stacks & queues
 * Slow lookups
 */

/** Stack using linked list */
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = {
      value,
      next: null,
    };
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

// const stack = new Stack();
// console.log(stack.push(100));
// console.log(stack.push(200));
// console.log(stack.push(300));
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());

/** Stack using arrays */
class StackUsingArray {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    return this.data;
  }

  pop() {
    this.data.pop();
    return this.data;
  }
}

// const stack = new StackUsingArray();
// console.log(stack.push(100));
// console.log(stack.push(200));
// console.log(stack.push(300));
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());

// =====================================

/** Queues: FIFO */

/**
 * Lookups/searching: O(N)
 * Enqueue: O(1) - Adds element to the last
 * Dequeue: O(1) - Removes first element
 * Peek: O(1) - Returns first element
 */

/** Using array to build a queue is inefficient as push is O(1) but shift is O(N) */
/** Using linked list to build a queue is efficient as updating pointers of head or tails is O(1) */

/** Queue using linked list */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(1)
  peek() {
    return this.first;
  }

  // O(1)
  enqueue(value) {
    const newNode = { value, next: null };

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  // O(1)
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.length--;
    return this;
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(1);
// console.log(queue.peek());
// queue.dequeue();
// console.log(queue.peek());
// queue.enqueue(2);
// queue.enqueue(3);

/** Queue using arrays */
class QueueUsingArray {
  constructor() {
    this.data = [];
  }

  // O(1)
  peek() {
    return this.data[this.data.length - 1];
  }

  // O(1)
  enqueue(value) {
    this.data.push(value);
    return this.data;
  }

  // O(N)
  dequeue() {
    this.data.shift();
    return this.data;
  }
}

// const queue = new QueueUsingArray();
// console.log(queue.enqueue(1));
// console.log(queue.enqueue(1));
// console.log(queue.dequeue());
// console.log(queue.enqueue(2));
// console.log(queue.enqueue(3));

// =====================================

/** Javascript is a single threaded language that can be non-blocking. */

/** Memory leak: A memory leak is a programming error where a program allocates memory but fails to release  it when it is no longer needed, causing memory to become unavailable to the system.  */

/** Stack Memory: The stack is primarily used for storing primitive data types (numbers, strings, booleans, null, undefined, symbols) and references to objects/arrays stored in the heap. It also manages the execution context of functions, including local variables and function call information (the call stack). */

/** Stack Memory Characteristics: Fixed size, Fast access, Automatic deallocation, Limited size */

/** Stack Memory Size: Node: No direct API or Call stack panel in debug mode */

/** Heap Memory: The heap is used for storing non-primitive data types, also known as reference types (objects, arrays, functions, closures). These data structures can be dynamic in size and lifetime. */

/** Heap Memory Characteristics: Dynamic size, Slower access, Garbage collection, Larger capacity, Potential for fragementation */

/** Heap Memory Size: Node: process.memoryUsage() or Memory tab in dev toops */

/** Single threaded language = One call stack | Javascript, Python, Ruby*/

/** Multi threaded language = Multiple call stack | Java, c++, c#, Go, Rust */

/** Single threaded language uses single stack which is easier to manage as comparison to multiple call stacks as it can lead to complicated scenarios like deadlocks. */

/** Synchronous code */
// console.log(1);
// console.log(2);
// console.log(3);

/** Asynchronous code */
/**
 * Call stack: console.log(4);
 * Web API: setTimeout(() => console.log(5), 1000);
 * Call stack: console.log(6);
 * Callback queue: () => console.log(5);
 * Event loop: console.log(5); - Keeps checking if call stack is empty then it executes callback function
 * Call stack: console.log(5);
 */

// console.log(4);
// setTimeout(() => console.log(5), 1000);
// console.log(6);

/**
 * Problem 1: Implement queue using stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/description/
 */
