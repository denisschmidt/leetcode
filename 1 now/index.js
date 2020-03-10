const { PriorityQueue } = require('../algorithms/priorityQueue');

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let ans = grid[0][0];

  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let visited = Array(n)
    .fill(null)
    .map(() => Array(m).fill(false));

  visited[i][j] = true;

  let pq = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });

  pq.offer([grid[0][0], i, j]);

  while (!pq.isEmpty()) {
    let [point, i, j] = pq.poll();

    for (let dir of dirs) {
      let x = i + dir[0];
      let y = j + dir[1];

      if (x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) continue;

      if (point < grid[x][y]) {
        ans += grid[x][y] - point;
      }

      visited[x][y];

      pq.offer([grid[x][y], x, y]);
    }
  }

  return ans;
};
