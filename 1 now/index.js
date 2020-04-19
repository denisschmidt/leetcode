const { PriorityQueue } = require('../algorithms/priorityQueue');

var nthSuperUglyNumber = function(n, primes) {
  let pq = new PriorityQueue({ comparator: (a, b) => a - b });
  let nums = [];
  let i = 0;

  pq.offer(1);

  while (i < n) {
    let val = pq.poll();

    for (let x of primes) {
      pq.offer(x * val);
    }

    if (nums[nums.length - 1] != val) {
      nums.push(val);
      i++;
    }
  }

  return nums[n - 1];
};

let ans = nthSuperUglyNumber(12, [2, 7, 13, 19]);
console.log(ans);
