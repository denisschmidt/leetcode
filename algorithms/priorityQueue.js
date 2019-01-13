/**
 * Priority Queue
 *
 * Binary Heap implementation
 *
 * clear: Removes all of the elements from this priority queue.
 * insert: Inserts the specified element into this priority queue.
 * peek: Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
 * poll: Retrieves and removes the head of this queue, or returns null if this queue is empty.
 * size: Returns the number of elements in this collection.
 * toArray: Returns an array containing all of the elements in this queue.
 */
class PriorityQueue {
  constructor({ initialValues = [], comparator = (a, b) => a - b }) {
    this.data = initialValues;
    this.comparator = comparator;
    this.heapify();
    console.log('---', this.data);
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }
    const res = this.data[0];
    const last = this.data.pop();

    if (this.data.length > 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return res;
  }

  insert(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  size() {
    return this.data.length;
  }

  clear() {
    this.data = [];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toArray() {
    return this.data.slice(0).sort(this.comparator);
  }

  heapify() {
    for (let i = 1; i < this.data.length; i++) {
      this.bubbleUp(i);
    }
  }

  bubbleUp(pos) {
    while (pos > 0) {
      let parent = (pos - 1) >>> 1;

      if (this.comparator(this.data[pos], this.data[parent]) < 0) {
        const temp = this.data[parent];
        this.data[parent] = this.data[pos];
        this.data[pos] = temp;
        pos = parent;
      } else {
        break;
      }
    }
  }

  bubbleDown(pos) {
    const last = this.data.length - 1;

    while (true) {
      let left = (pos << 1) + 1;
      let right = left + 1;
      let minIndex = pos;

      if (left <= last && this.comparator(this.data[left], this.data[minIndex]) < 0) {
        minIndex = left;
      }

      if (right <= last && this.comparator(this.data[right], this.data[minIndex]) < 0) {
        minIndex = right;
      }

      if (minIndex !== pos) {
        const temp = this.data[minIndex];
        this.data[minIndex] = this.data[pos];
        this.data[pos] = temp;
        pos = minIndex;
      } else {
        break;
      }
    }
  }
}

module.exports = {
  PriorityQueue,
};
