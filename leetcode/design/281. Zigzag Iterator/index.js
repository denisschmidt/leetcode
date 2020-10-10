/*

Given two 1d vectors, implement an iterator to return their elements alternately.

Example:
  Input:
  v1 = [1,2]
  v2 = [3,4,5,6] 
  Output: [1,3,2,4,5,6]
  Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,3,2,4,5,6].
  

Follow up:
  What if you are given k 1d vectors? How well can your code be extended to such cases?

  Clarification for the follow up question:
  The "Zigzag" order is not clearly defined and is ambiguous for k > 2 cases. 
  If "Zigzag" does not look right to you, replace "Zigzag" with "Cyclic". For example:

Input:
  [1,2,3]
  [4,5,6,7]
  [8,9]

Output: [1,4,8,2,5,9,3,6,7].

*/

class ZigzagIterator {
  constructor(z1, z2) {
    this.iterator = 0;

    this.total = 0;
    this.vectors = [z1, z2];
    this.size = this.vectors.length;
    this.indexes = Array(this.size).fill(0);
    this.vectors.forEach(i => (this.total += i.length));
  }

  hasNext() {
    return this.total > 0;
  }

  next() {
    while (this.indexes[this.iterator] >= this.vectors[this.iterator].length) {
      this.iterator = ++this.iterator % this.size;
    }

    let res = this.vectors[this.iterator][this.indexes[this.iterator]];

    this.indexes[this.iterator]++;
    this.iterator = ++this.iterator % this.size;
    this.total--;
    return res;
  }
}
