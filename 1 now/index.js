/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (matrix.length == 0) return [];
  let n = matrix.length;
  let m = matrix[0].length;
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let pQueue = [];
  let aQueue = [];
  let pacific = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));
  let atlantic = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));

  // Вертикальная линия
  for (let i = 0; i < n; i++) {
    pQueue.push([i, 0]);
    aQueue.push([i, m - 1]);
    pacific[i][0] = true;
    atlantic[i][m - 1] = true;
  }

  // Горизонтальная линия
  for (let i = 0; i < m; i++) {
    pQueue.push([0, i]);
    aQueue.push([n - 1, i]);
    pacific[0][i] = true;
    atlantic[n - 1][i] = true;
  }

  bfs(pQueue, pacific);
  bfs(aQueue, atlantic);

  let ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        ans.push([i, j]);
      }
    }
  }

  return ans;

  function bfs(queue, visited) {
    while (queue.length) {
      let size = queue.length;

      for (let k = 0; k < size; k++) {
        let [i, j] = queue.shift();

        for (let dir of dirs) {
          let x = dir[0] + i;
          let y = dir[1] + j;

          if (x < 0 || j < 0 || x >= n || y >= m || visited[x][y] || matrix[x][y] < matrix[i][j]) {
            continue;
          }
          visited[x][y] = true;
          queue.push([x, y]);
        }
      }
    }
  }
};
