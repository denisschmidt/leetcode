const { PriorityQueue } = require('../../algorithms/priorityQueue');

// Time O(LogN) + O(1)

/*

  Алгоритм:

  1) Обе кучи сбалансированы (или почти сбалансированы)

  2) Максимальная куча содержит все меньшие числа, в то время как минимальная куча содержит все большие числа

  maxHeap - хранит меньшую половину чисел  [7, 6, 5, 4]
  minHeap - хранит большую половину чисел  [8, 9, 11, 12]
  
  В maxHeap в худшем случае можно хранить на один элемент больше, чем miHneap. 
  
  Если k = (2 * n + 1) то maxHeap может содержать (n + 1) элементов.

  В то время как miHneap может содержать n элементов.

  Если k = 2 * n то обе кучи сбалансированы и содержат по n элементов каждый. 
  
  Это дает нам замечательные свойства !!!! 
    1) Когда кучи идеально сбалансированы, медиана может быть получена из вершин обеих куч. 
    
    2) В противном случае вершина maxHeap содержит законную медиану.

  https://www.programcreek.com/2015/01/leetcode-find-median-from-data-stream-java/


  Краткий алгоритм:

  1) Каждый элемент добавляется в minHeap 
  
  2) Затем минимальный элемент выталкавается из minHeap и добавляется в maxHeap

  3) Из этого мы получается что все элементы в minHeap больше чем элементы в maxHeap

  4) По итогу две кучи необходимо сбалансировать:

    Следовательно если maxHeap.size > minHeap.size из maxHeap мы выталкиваем 1 элемент и добавляем в minHeap

  Пример:  

  Число -> 41
  MaxHeap: []           
  MinHeap: [41]         
  Median is 41
  =======================
  Число -> 35
  MaxHeap: [35]
  MinHeap: [41]
  Median is 38
  =======================
  Число -> 62
  MaxHeap: [35]
  MinHeap: [41, 62]
  Median is 41
  =======================
  Число -> 4
  MaxHeap: [35, 4]
  MinHeap: [41, 62]
  Median is 38
  =======================
  Число -> 97
  MaxHeap: [35, 4]
  MinHeap: [41, 62, 97]
  Median is 41
  =======================
  Число -> 108
  MaxHeap: [41, 35, 4]
  MinHeap: [62, 97, 108]
  Median is 51.5

*/

class MedianFinder {
  // Space O(N)
  constructor() {
    this.maxHeap = new PriorityQueue({ comparator: (a, b) => b - a }); // [7, 6, 5, 4]

    this.minHeap = new PriorityQueue({ comparator: (a, b) => a - b }); // [8, 9, 11, 12]
  }

  // O(LogN)
  addNum(num) {
    this.minHeap.offer(num);
    this.maxHeap.offer(this.minHeap.poll());

    if (this.minHeap.size() < this.maxHeap.size()) {
      this.minHeap.offer(this.maxHeap.poll());
    }
  }

  // Time O(1)
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
