const { PriorityQueue } = require('../algorithms/priorityQueue');

var assignBikes = function(workers, bikes) {
  // [distance, bikeIndex, workerIndex]

  let pq = new PriorityQueue({
    comparator: (a, b) => {
      if (a[0] == b[0]) {
        if (a[2] != b[2]) {
          return a[2] - b[2];
        }
        return a[1] - b[1];
      }
      return a[0] - b[0];
    },
  });

  let visitedBikes = Array(bikes.length).fill(false);

  for (let i = 0; i < bikes.length; i++) {
    let [x1, y1] = bikes[i];
    for (let j = 0; j < workers.length; j++) {
      let [x2, y2] = workers[j];

      let distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);

      pq.offer([distance, i, j]);
    }
  }

  let ans = Array(bikes.length).fill(null);
  let cnt = 0;

  while (pq.length && cnt < bikes.length) {
    let [_, bikeIndex, workerIndex] = pq.poll();

    if (visitedBikes[bikeIndex]) continue;

    visitedBikes[bikeIndex] = true;

    ans[bikeIndex] = workerIndex;
    cnt++;
  }

  return ans;
};
