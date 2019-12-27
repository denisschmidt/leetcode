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

  clear() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toArray() {
    return this.data.slice(0).sort(this.comparator);
  }

  heapify() {
    if (this.data.length > 0) {
      for (let i = 1; i < this.data.length; i++) {
        this.bubbleUp(i);
      }
    }
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }

    return this.data[0];
  }

  offer(value) {
    this.data.push(value);
    // поднимаемся вверх
    // проверяем условие min heap или max heap
    this.bubbleUp(this.data.length - 1);
  }

  // извлекаем первый элемент из очереди
  // Time O(Log*N)
  poll() {
    if (this.size() === 0) {
      return null;
    }

    const first = this.data[0];
    const last = this.data.pop();

    if (this.data.length > 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return first;
  }

  getChildIndexes(index) {
    return [index * 2 + 1, index * 2 + 2];
  }

  // всплываем вверх по дереву
  // Time O(Log*N)
  bubbleUp(pos) {
    while (pos > 0) {
      let parent = (pos - 1) >>> 1; // целочисленное деление на 2

      // делаем swap если не выполняется условие min heap или max heap
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
      let [left, right] = this.getChildIndexes(pos);
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
