const { PriorityQueue } = require('../algorithms/priorityQueue');

class MedianFinder {
  constructor() {
    this.pq = new PriorityQueue({ comparator: (a, b) => a - b });
  }

  addNum(num) {}

  findMedian() {}
}
