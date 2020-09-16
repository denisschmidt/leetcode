/*

You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. 
We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 
  
  Given the 2D grid:  
    INF  -1  0  INF
    INF INF INF  -1
    INF  -1 INF  -1
    0  -1 INF INF 
  
  After running your function, the 2D grid should be:
    3  -1   0   1
    2   2   1  -1
    1  -1   2  -1
    0  -1   3   4

*/

// BFS
// Time O(N * M)
// Space O(N * M)
const wallsAndGates = rooms => {
  if (rooms.length == 0) return [];

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let n = rooms.length;
  let m = rooms[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rooms[i][j] == 0) {
        queue.push([i, j, 0]);
      }
    }
  }

  while (queue.length) {
    let k = queue.length;

    for (let w = 0; w < k; w++) {
      let [i, j, cnt] = queue.shift();

      for (let dir of dirs) {
        let x = dir[0] + i;
        let y = dir[1] + j;

        if (x < 0 || y < 0 || x >= n || y >= m || rooms[x][y] == 0 || rooms[x][y] == -1) {
          continue;
        }

        if (rooms[x][y] > cnt + 1) {
          rooms[x][y] = cnt + 1;
          queue.push([x, y, cnt + 1]);
        }
      }
    }
  }
};
