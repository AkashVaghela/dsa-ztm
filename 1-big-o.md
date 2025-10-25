# Big O

[Big O cheetsheet](https://www.bigocheatsheet.com/)

### Big O types

- O(1) Constants - No loops
- O(log n) Logarithmic - Usually searching algorithms have log(n) if they are sorted (Binary search & not on has maps)
- O(n) Linear - For loops, while loops etc.
- O(n \* log(n)) Log linear - Sorting operations
- O(n^2) Quadratic - Every element in a collection needs to be compared to every other element. Two nested loops.
- o(2^n) Exponential - Recursive algorithms that solves a problem of size n.
- O(n!) Factorial - Adding a loop for every element.

### Rules of calculating big O

- Worst case
- Remove constants
- Different terms for inputs
- Drop non dominants

### Pillers of good code

- Readable
- Scalable (Speed) - Time complexity
- Scalable (Memory) - Space complexity
