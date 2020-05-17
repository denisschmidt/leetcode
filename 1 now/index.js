const { PriorityQueue } = require('../algorithms/priorityQueue');

/**
 * @param {number[][]} arr
 * @return {number}
 */
const minFallingPathSum = grid => {
  let n = grid.length;
  let m = grid[0].length;

  let pq = new PriorityQueue({ comparator: (a, b) => a[2] - b[2] });

  for (let j = 0; j < m; j++) {
    pq.offer([1, j, grid[0][j]]);
  }

  while (!pq.isEmpty()) {
    let [row, col, sum] = pq.poll();

    if (i == n - 1) {
      return sum;
    }

    for (let j = 0; j < m; j++) {
      if (j == col) continue;

      pq.offer([row + 1, j, sum + grid[row][j]]);
    }
  }

  return -1;
};
