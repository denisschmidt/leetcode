/**
 * Priority Queue
 *
 * Binary Heap implementation
 *
 * clear: Removes all of the elements from this priority queue.
 * offer: Inserts the specified element into this priority queue.
 * peek: Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
 * poll: Retrieves and removes the head of this queue, or returns null if this queue is empty.
 * size: Returns the number of elements in this collection.
 * toArray: Returns an array containing all of the elements in this queue.
 */
class PriorityQueue {
  constructor({ comparator = (a, b) => a - b, initialValues = [] } = {}) {
    this.comparator = comparator;
    this.data = initialValues;
    this.heapify();
  }

  swap(i, j) {
    return ([this.data[i], this.data[j]] = [this.data[j], this.data[i]]);
  }

  getChildIndices(index) {
    return [2 * index + 1, 2 * index + 2];
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

  size() {
    return this.data.length;
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }

    return this.data[0];
  }

  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.data.length - 1);
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }

    const result = this.data[0];
    const last = this.data.pop();

    if (this.size() > 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return result;
  }

  heapify() {
    if (this.data.length) {
      for (let i = 1; i < this.data.length; i++) {
        this.bubbleUp(i);
      }
    }
  }

  // поднимаемся вверх
  // проверяем чтобы родитель был меньше ребенка
  bubbleUp(pos) {
    while (pos > 1) {
      let parent = (pos - 1) >>> 1; // целочисленное деление на 2

      if (this.data[pos] < this.data[parent]) {
        this.swap(parent, pos);
        pos = parent;
      } else {
        break;
      }
    }
  }

  bubbleDown(pos) {
    const lastIndex = this.data.length - 1;

    while (true) {
      let [leftIndex, rightIndex] = this.getChildIndices(pos);

      let minIndex = pos;

      if (leftIndex <= lastIndex && this.data[minIndex] > this.data[leftIndex]) {
        minIndex = leftIndex;
      }

      if (rightIndex <= lastIndex && this.data[minIndex] > this.data[rightIndex]) {
        minIndex = rightIndex;
      }

      if (minIndex !== pos) {
        this.swap(minIndex, pos);
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
