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

const wallsAndGates = rooms => {
  if (rooms.length === 0) return;

  const n = rooms.length;
  const m = rooms[0].length;
  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    const [i, j] = queue.shift();

    if (i - 1 >= 0 && rooms[i - 1][j] === 2147483647) {
      queue.push([i - 1, j]);
      rooms[i - 1][j] = rooms[i][j] + 1;
    }

    if (i + 1 < n && rooms[i + 1][j] === 2147483647) {
      queue.push([i + 1, j]);
      rooms[i + 1][j] = rooms[i][j] + 1;
    }

    if (j - 1 >= 0 && rooms[i][j - 1] === 2147483647) {
      queue.push([i, j - 1]);
      rooms[i][j - 1] = rooms[i][j] + 1;
    }

    if (j + 1 < m && rooms[i][j + 1] === 2147483647) {
      queue.push([i, j + 1]);
      rooms[i][j + 1] = rooms[i][j] + 1;
    }
  }
};
