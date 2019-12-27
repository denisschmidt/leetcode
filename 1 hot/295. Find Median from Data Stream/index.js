/*
Median is the middle value in an ordered integer list. 
If the size of the list is even, there is no middle value. 
So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
 
Example:
  addNum(1)
  addNum(2)
  findMedian() -> 1.5
  addNum(3) 
  findMedian() -> 2
 

Follow up:
  If all integer numbers from the stream are between 0 and 100, how would you optimize it?
  If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?


*/

const { PriorityQueue } = require('../../algorithms/priorityQueue');

class MedianFinder {
  constructor() {
    this.minHeap = new PriorityQueue({ comparator: (a, b) => a - b });
    this.maxHeap = new PriorityQueue({ comparator: (a, b) => b - a });
    this.even = true;
  }

  addNum(num) {}

  findMedian() {}
}

class MedianFinder_II {
  constructor() {
    this.nums = [];
  }

  addNum(num) {
    if (this.nums.length === 0) {
      this.nums.push(num);
    } else {
      let index = this.search(num);
      this.nums.splice(index, 0, num);
    }
  }

  findMedian() {
    let s = this.nums.length;
    let mid = Math.floor(this.nums.length / 2);
    return s % 2 === 0 ? (this.nums[mid - 1] + this.nums[mid]) / 2.0 : this.nums[mid];
  }

  search(num) {
    let l = 0;
    let r = this.nums.length - 1;

    if (!this.nums.length) {
      this.nums.push(num);
      return;
    }

    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);

      if (num[mid] === num) {
        return mid;
      }

      if (this.nums[mid] < num) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return l;
  }
}

const mid = new MedianFinder();
mid.addNum(6);
mid.addNum(10);
mid.addNum(2);
mid.addNum(6);
mid.addNum(5);
mid.addNum(0);
mid.addNum(6);
mid.addNum(3);
mid.addNum(1);
mid.addNum(0);
mid.addNum(0);

let b = mid.findMedian(); //-> 2

console.log(b);
