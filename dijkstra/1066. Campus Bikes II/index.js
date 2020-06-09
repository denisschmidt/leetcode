/*

On a campus represented as a 2D grid, there are N workers and M bikes, with N <= M. 

Each worker and bike is a 2D coordinate on this grid.

We assign one unique bike to each worker so that the sum of the Manhattan distances between each worker and their assigned bike is minimized.

The Manhattan distance between two points p1 and p2 is Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|.

Return the minimum possible sum of Manhattan distances between each worker and their assigned bike.

Example 1:
  Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
  Output: 6
  Explanation: 
  We assign bike 0 to worker 0, bike 1 to worker 1. The Manhattan distance of both assignments is 3, so the output is 6.

Example 2:
  Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]
  Output: 4
  Explanation: 
  We first assign bike 0 to worker 0, then assign bike 1 to worker 1 or worker 2, bike 2 to worker 2 or worker 1. Both assignments lead to sum of the Manhattan distances as 4.
  

Note:
  0 <= workers[i][0], workers[i][1], bikes[i][0], bikes[i][1] < 1000
  All worker and bike locations are distinct.
  1 <= workers.length <= bikes.length <= 10

*/
const { PriorityQueue } = require('../algorithms/priorityQueue');

// Time O(N * MlogM)
// Space O(N + M)
const assignBikes = (workers, bikes) => {
  let visited = new Set();
  let visitedBike = Array(bikes.length).fill(false);

  // [distance, workerIndex, bikeIndex]
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
        pq.offer([dist(bikes[i], workers[workerIndex]) + distance, workerIndex + 1, mask | (1 << i)]);
      }
    }
  }

  return -1;

  function dist(bike, worker) {
    return Math.abs(bike[0] - worker[0]) + Math.abs(bike[1] - worker[1]);
  }
};

// Time O(M * N!)  M - workers.length N - bikes.lengths
const assignBikes_II = (workers, bikes) => {
  let min = Number.MAX_VALUE;
  let visited = Array(bikes.length).fill(false);

  dfs(0, 0);

  return min;

  function dfs(workerIndex, dist) {
    if (workerIndex >= workers.length) {
      min = Math.min(min, dist);
      return min;
    }

    if (dist > min) return;

    for (let i = 0; i < bikes.length; i++) {
      if (visited[i]) continue;

      let d = getDist(workers[workerIndex], bikes[i]);

      visited[i] = true;

      dfs(workerIndex + 1, dist + d);

      visited[i] = false;
    }
  }

  function getDist(bike, worker) {
    return Math.abs(bike[0] - worker[0]) + Math.abs(bike[1] - worker[1]);
  }
};
