/*

Given a matrix of integers A with R rows and C columns, find the maximum score of a path starting at [0,0] and ending at [R-1,C-1].

The score of a path is the minimum value in that path.  

For example, the value of the path 8 →  4 →  5 →  9 is 4.

A path moves some number of times from one visited cell to any neighbouring unvisited cell in one of the 4 cardinal directions (north, east, west, south).

 
Example 1:
  Input: [[5,4,5],[1,2,6],[7,4,6]]
  Output: 4
  Explanation: The path with the maximum score is highlighted in yellow. 

Example 2:
  Input: [[2,2,1,2,2,2],[1,2,2,2,1,2]]
  Output: 2

Example 3:
  Input: [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
  Output: 3
 

Note:
  1 <= R, C <= 100
  0 <= A[i][j] <= 10^9

*/

const { PriorityQueue } = require('../algorithms/priorityQueue');

// Алгоритм BFS Dijkstra: используем приоритетную очередь, чтобы выбрать следующий шаг с максимальным значением.
// B cледим за минимальным значением вдоль пути.

// С помощью преоритарной очереди мы всегда будем идти по максимальному пути

// Time O(N*LogN)
// Space O(N)
const maximumMinimumPath = grid => {
  // maxHeap
  let pq = new PriorityQueue({ comparator: (a, b) => b[0] - a[0] });
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  pq.offer([grid[0][0], 0, 0]);

  let n = grid.length;
  let m = grid[0].length;
  let max = grid[0][0];

  let visited = Array(n)
    .fill(null)
    .map(() => Array(m).fill(false));

  visited[0][0] = true;

  while (!pq.isEmpty()) {
    let [point, i, j] = pq.poll();

    max = Math.min(max, point);

    if (i === n - 1 && j === m - 1) break;

    for (let dir of dirs) {
      let x = dir[0] + i;
      let y = dir[1] + j;

      if (x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) continue;

      visited[x][y] = true;

      pq.offer([grid[x][y], x, y]);
    }
  }

  return max;
};

// Backtrack
// TLE
var maximumMinimumPath_II = grid => {
  let n = grid.length;
  let m = grid[0].length;
  let ans = -Number.MAX_VALUE;

  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let visited = Array(n)
    .fill(null)
    .map(() => Array(m).fill(false));

  visited[0][0] = true;

  backtrack(0, 0, grid[0][0]);

  return ans;

  function backtrack(i, j, score) {
    if (i === n - 1 && j === m - 1) {
      ans = Math.max(ans, score);
      return;
    }

    for (let dir of dirs) {
      let x = dir[0] + i;
      let y = dir[1] + j;

      if (x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) continue;

      visited[x][y] = true;

      backtrack(x, y, Math.min(score, grid[x][y]));

      visited[x][y] = false;
    }
  }
};
