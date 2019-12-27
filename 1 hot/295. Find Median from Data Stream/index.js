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

// Time O(LogN) + O(1)
/*
  Алгоритм:

  1) Обе кучи сбалансированы (или почти сбалансированы)
  2) Максимальная куча содержит все меньшие числа, в то время как минимальная куча содержит все большие числа

  maxHeap, хранит меньшую половину чисел 
  minHeap хранит большую половину чисел 
  
  В maxHeap в худшем случае можно хранить на один элемент больше, чем miHneap. 
  
  Если k = 2 * n + 1 то maxHeap может содержать n + 1 элементов  
  В то время как miHneap может содержать n элементов. 
  
  Если k = 2 * n то обе кучи сбалансированы и содержат по n элементов каждый. 
  Это дает нам замечательное свойство: когда кучи идеально сбалансированы, медиана может быть получена из вершин обеих куч. 
  
  В противном случае вершина maxHeap содержит законную медиану.

  https://www.programcreek.com/2015/01/leetcode-find-median-from-data-stream-java/


  1) Каждый элемент добавляется в minHeap 
  
  2) Затем минимальный элемент выталкавается из minHeap и добавляется в maxHeap

  3) Из этого мы получается что все элементы в minHeap больше чем элементы в maxHeap

  4) В итоге две кучи необходимо сбалансировать


  */

class MedianFinder {
  constructor() {
    this.minHeap = new PriorityQueue({ comparator: (a, b) => a - b }); // 1, 2, 3, 4, 5

    this.maxHeap = new PriorityQueue({ comparator: (a, b) => b - a }); // 7, 6, 5, 4
  }

  addNum(num) {
    this.minHeap.offer(num);
    this.maxHeap.offer(this.minHeap.poll());

    if (this.minHeap.size() < this.maxHeap.size()) {
      this.minHeap.offer(this.maxHeap.poll());
    }
  }

  findMedian() {
    if (this.minHeap.size() > this.maxHeap.size()) {
      return this.minHeap.peek();
    }

    return (this.minHeap.peek() + this.maxHeap.peek()) / 2.0;
  }
}

// Time O(LogN) + O(N)
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
mid.addNum(41);
mid.addNum(35);
mid.addNum(62);
mid.addNum(5);
mid.addNum(97);
mid.addNum(108);

let b = mid.findMedian(); //-> 2

console.log(b);
