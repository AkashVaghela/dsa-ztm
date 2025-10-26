/** Binary tree: A binary tree is a hierarchical data structure in computer science where each node has at most two children, referred to as the left child and the right child.  */

/** Fully (perfect) binary tree: A full binary tree is a tree where every node has either zero or two children. A perfect binary tree is a type of full binary tree where all leaf nodes are at the same level (depth). */

/** Complete binary tree: A complete binary tree is a type of binary tree in which every level, except possibly the last, is completely filled with nodes. In the last, and potentially incomplete, level, all nodes must be placed as far left as possible. */

/** Balanced tree: A balanced tree is a type of data structure where the difference in height between the left and right subtrees of any node is limited, typically to a maximum of one. */

/** Unbalanced tree: An unbalanced tree, or specifically an unbalanced binary search tree (BST), is a tree data structure where the distribution of nodes is heavily skewed to one side. */

/** Skewed binary tree: A skewed binary tree is a type of degenerate binary tree where each node has only one child, causing the tree to resemble a linked list. */

/** Balanced BST
 * lookup: O(Log N)
 * Insert: O(Log N)
 * Delete: O(Log N)
 */

/** Unbalanced BST (AVT & Red black tree can be used to balance a tree)
 * lookup: O(N)
 * Insert: O(N)
 * Delete: O(N)
 */

/** Advantages
 * Better than O(N)
 * Ordered
 * Flexible size
 */

/** Disadvantages
 * No O(1) operations
 */

//              9
//      4               20
// 1        6   15          170

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            // this.print();
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            // this.print();
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  print() {
    console.log(JSON.stringify(this));
  }
}

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(20);
// tree.insert(1);
// tree.insert(6);
// tree.insert(15);
// tree.insert(170);
// console.log(tree.lookup(170));
// console.log(tree.lookup(69));

// ==============================================
/** Binary heaps: 
A Binary Heap is a special type of complete binary tree, meaning all levels are filled except possibly the last, which is filled from left to right.
Min Heap: The value of the root node is the smallest, and this property is true for all subtrees.
Max Heap: The value of the root node is the largest, and this rule also applies to all subtrees.
Binary heaps are commonly used in priority queues and heap sort algorithms because of their efficient insertion and deletion operations.
*/

/**
 * lookup: O(N)
 * Insert: O(Log N)
 * Delete: O(Log N)
 */

/** Advantages
 * Better than O(N)
 * Priority
 * Flexible size
 * Fast insert
 */

/** Disadvantages
 * Slow lookups
 */

// ==============================================
/** Priority queue
 * A priority queue is a type of queue where each element is associated with a priority value, and elements are served based on their priority rather than their insertion order.
 * Elements with higher priority are retrieved or removed before those with lower priority.
 * When a new item is added, it is inserted according to its priority.
 */

// ==============================================
/** Trie or Prefix tree
 * The Trie data structure is used to store a set of keys represented as strings. It allows for efficient retrieval and storage of keys, making it highly effective in handling large datasets. Trie supports operations such as insertion, search, deletion of keys, and prefix searches.
 */
