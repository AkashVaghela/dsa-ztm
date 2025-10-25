/** Array has bad O(N) and hash tables are unordered that's where linked list are good as they have better o(N) than arrays and are also ordered */

/** Linked list can be singly or doubly type */

/** Pointer is a reference to another place in a memory.
 * If we try to delete obj1, it will not be deleted as obj2 still references obj1 so once obj2 stores or references something else only then obj1 will be deleted or called garbage collected.
 */
let obj1 = { name: "sahas" };
let obj2 = obj1;

/** Singly Linked List
 * prepand: O(1)
 * append: O(1)
 * lookup: O(n)
 * insert: O(n)
 * delete: O(n)
 */

/** Doubly Linked List
 * prepand: O(1)
 * append: O(1)
 * lookup: O(n)
 * insert: O(n)
 * delete: O(n)
 */

/** Advantages
 * Fast insertion
 * Fast deletion
 * Ordered
 * Flexible size
 */

/** Disadvantages
 * Slow lookup
 * More memory
 */

/**
 * Sample Linked List
 *  10 -> 5 -> 16
 * head {
 *  value: 10
 *  next: {
 *      value: 5
 *      next: {
 *          value: 16
 *          next: null
 *      }
 *  }
 * }
 */

// ======================================
/** Singly Linked List */
// ======================================

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // O(1)
  append(value) {
    const newNode = { value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    this.print();
  }

  // O(1)
  prepand(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;

    this.length++;

    this.print();
  }

  // O(N)
  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    }

    const newNode = {
      value,
      next: null,
    };

    const prevNode = this._traverseToIndex(index - 1);
    const currentNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = currentNode;

    this.length++;

    this.print();
  }

  // O(N)
  remove(index) {
    if (index >= this.length) {
      return;
    }

    const prevNode = this._traverseToIndex(index - 1);
    const currentNode = prevNode.next;
    prevNode.next = currentNode.next;

    this.length--;

    this.print();
  }

  // O(N)
  // [0, 1, 2, 3]
  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head; //0
    this.tail = this.head;
    let second = first.next; //1

    while (second) {
      const temp = second.next; //2
      second.next = first; // 2 -> 0
      first = second; // 0 -> 1
      second = temp; // 1 -> 2
    }
    this.head.next = null;
    this.head = first;

    this.print();
  }

  print() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("SinglyLinkedList values", values);
    console.log("SinglyLinkedList", this);
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const singlyLinkedList = new SinglyLinkedList(0);
singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.reverse();
// singlyLinkedList.remove(1);

// ======================================
/** Doubly Linked List */
// ======================================

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // O(1)
  append(value) {
    const newNode = { value, next: null, previous: this.tail };
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    this.print();
  }

  // O(1)
  prepand(value) {
    const newNode = { value, next: this.head, previous: null };
    this.head.previous = newNode;
    this.head = newNode;

    this.length++;

    this.print();
  }

  // O(N)
  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    }

    const newNode = {
      value,
      next: null,
      previous: null,
    };

    const prevNode = this._traverseToIndex(index - 1);
    const currentNode = prevNode.next;

    prevNode.next = newNode;
    newNode.previous = prevNode;
    newNode.next = currentNode;
    currentNode.previous = newNode;

    this.length++;

    this.print();
  }

  // O(N)
  remove(index) {
    if (index >= this.length) {
      return;
    }

    const prevNode = this._traverseToIndex(index - 1);
    const currentNode = prevNode.next;
    prevNode.next = currentNode.next;
    currentNode.previous = prevNode;

    this.length--;

    this.print();
  }

  // O(N)
  reverse() {}

  print() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("DoublyLinkedList values", values);
    console.log("DoublyLinkedList", this);
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const doublyLinkedList = new DoublyLinkedList(0);
doublyLinkedList.append(2);
doublyLinkedList.prepand(-1);
doublyLinkedList.insert(2, 1);
doublyLinkedList.remove(3);

/** Singly linkedlist are space efficient and easy to use but they can not be traversed in reverse. */
