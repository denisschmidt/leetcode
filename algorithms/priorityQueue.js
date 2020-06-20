/*

  Priority Queue
 
  Binary Heap implementation
    clear: Removes all of the elements from this priority queue.
    offer: Inserts the specified element into this priority queue.
    peek: Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
    poll: Retrieves and removes the head of this queue, or returns null if this queue is empty.
    size: Returns the number of elements in this collection.
    toArray: Returns an array containing all of the elements in this queue.
 
  Бывают кучи двух типов minHeap maxHeap:
    1) minHeap - первый элемент кучи будет меньше всех остальных элементов  // 1, 2, 3, 4, 5
    2) maxHeap - первый элемент кучи будет больше всех остальных элементов  // 7, 6, 5, 4
 
  Поиск левого потомка: left = (2 * curIndex + 1)
  Поиск правого потомка: right = (2 * curIndex + 2)
  Поиск родителя: parent = (curIndex - 1) / 2

  Вставка n элементов в кучу O(N * log(N))

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

  // Time O(LogN)
  offer(value) {
    this.data.push(value);
    // поднимаемся вверх
    // проверяем условие min heap или max heap
    this.bubbleUp(this.data.length - 1);
  }

  // Time O(LogN)
  poll() {
    if (this.size() === 0) {
      return null;
    }

    const first = this.peek();
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
  // Time O(LogN)
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
