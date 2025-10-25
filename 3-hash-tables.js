/**
 * Idempotency is a property of certain operations or API requests that ensures performing the operation multiple times yields the same result as if it were executed only once
 */

/** Objects are unordered key value pairs. Where keys are hashed using hash functions and stored in memory addresses for faster read or writes */

/** Hash collisions: A hash collision is when two different inputs produce the same output hash value from a hash function.  */

/** Maps allows to store any data type as a key where as objects only allows us to store strings */

/** Sets are other data structure in javascript which only stores keys */

/**
 * Access: -
 * Search: O(1) or O(N) in case of hash collisions
 * Insertion: O(1) or O(N) in case of hash collisions
 * Deletion: O(1) or O(N) in case of hash collisions
 */

/** Advantages
 * Fastere lookups but requires good collision resolutions
 * Fastere search, insert, delete than arrays
 * Faster time but more space complexity
 * Flexible keys
 */

/** Disadvantages
 * No specific order
 * Inefficient when there are many collisions
 * Slow key iterations
 */

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }
    return keys;
  }
}

const hashTable = new HashTable(2);
hashTable.set("sahas", 0);
hashTable.set("kuldeep", 0);
hashTable.set("parth", 0);
hashTable.set("jay", 0);
hashTable.get("b", 20);
hashTable.get("ba", 20);

/**
 * Problem 1:
 * Given an array = [2,5,1,2,3,5,1,2,4]: should return 2
 * Given an array = [2,1,1,2,3,5,1,2,4]: should return 1
 * Given an array = [2,3,4,5]: should return undefined
 */

// O(N^2) Can get wrong results
function firstRecurringNumber1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; i < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
}

// O(N)
function firstRecurringNumber2(array) {
  const map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return array[i];
    } else {
      map[array[i]] = i;
    }
  }

  return undefined;
}
