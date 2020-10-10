const { PriorityQueue } = require('../algorithms/priorityQueue');

// Time O(N * MlogM)
// Space O(N + M)
const assignBikes = (workers, bikes) => {
  let visited = new Set();
  let visitedBike = Array(bikes.length).fill(false);

  // [distance, workerIndex, mask]
  let pq = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });

  pq.offer([0, 0, 0]);

  while (!pq.isEmpty()) {
    // mask - указывает на велосипед, который был взят.
    // Например, если есть 4 велосипеда и взято 9 (что в двоичном виде 1001), то выделяются первый и последний велосипеды.
    let [distance, workerIndex, mask] = pq.poll();
    let key = [workerIndex, mask].toString();

    if (workerIndex == workers.length) return distance;

    if (visited.has(key)) continue;

    visited.add(key);

    for (let i = 0; i < bikes.length; i++) {
      if ((mask & (1 << i)) == 0) {
        visitedBike[i] = true;
        let newDist = dist(bikes[i], workers[workerIndex]) + distance;

        pq.offer([newDist, workerIndex + 1, mask | (1 << i)]);
      }
    }
  }

  return -1;

  function dist(bike, worker) {
    return Math.abs(bike[0] - worker[0]) + Math.abs(bike[1] - worker[1]);
  }
};
