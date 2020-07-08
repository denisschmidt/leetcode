/*

Given an N x N grid containing only values 0 and 1, where 0 represents water and 1 represents land, 

find a water cell such that its distance to the nearest land cell is maximized and return the distance.

The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

If no land or water exists in the grid, return -1.

Example 1:
  Input: [[1,0,1],[0,0,0],[1,0,1]]
  Output: 2
  Explanation: 
  The cell (1, 1) is as far as possible from all the land with distance 2.

Example 2:
  Input: [[1,0,0],[0,0,0],[0,0,0]]
  Output: 4
  Explanation: 
  The cell (2, 2) is as far as possible from all the land with distance 4.
  

Note:
  1 <= grid.length == grid[0].length <= 100
  grid[i][j] is 0 or 1

*/

// Time O(N*M*N)
// Space O(N*M)
const maxDistance = grid => {
  let n = grid.length;
  let m = grid[0].length;
  let INF = Number.MAX_VALUE;
  let max = -INF;
  let distance = Array(n)
    .fill(0)
    .map(() => Array(m).fill(Number.MAX_VALUE));

  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        SPFA(i, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) continue;
      max = Math.max(max, distance[i][j]);
    }
  }

  return max == INF || max == -INF ? -1 : max;

  function SPFA(i, j) {
    let queue = [];

    queue.push([i, j]);
    distance[i][j] = 0;

    while (queue.length) {
      let size = queue.length;

      for (let z = 0; z < size; z++) {
        let [i, j] = queue.shift();

        for (let dir of dirs) {
          let x = dir[0] + i;
          let y = dir[1] + j;

          if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] != 0) continue;

          if (distance[x][y] > distance[i][j] + 1) {
            distance[x][y] = distance[i][j] + 1;
            queue.push([x, y]);
          }
        }
      }
    }
  }
};
