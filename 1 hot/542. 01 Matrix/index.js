/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example 1:
  Input:
  [
    [0,0,0],
    [0,1,0],
    [0,0,0]
   ]

  Output:
  [
    [0,0,0],
    [0,1,0],
    [0,0,0]
   ]

Example 2:
  Input:
  [
   [1,1,1],
   [1,1,1],
   [0,0,0]
  ]

  Output:
   [
    [0,0,0],
    [0,1,0],
    [1,2,1]
   ]

Note:
  The number of elements of the given matrix will not exceed 10,000.
  There are at least one 0 in the given matrix.
  The cells are adjacent in only four directions: up, down, left and right.
 */

// Time O(N * M)
// Space O(N * M)
const updateMatrix = matrix => {
  const n = matrix.length;
  const m = matrix[0].length;
  const dirs = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];
  let queue = [];
  let grid = Array(n)
    .fill(null)
    .map(() => Array(m).fill(Number.MAX_VALUE));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
        grid[i][j] = 0;
      }
    }
  }

  while (queue.length) {
    const [start, end] = queue.shift();

    for (let dir of dirs) {
      let x = dir[0] + start;
      let y = dir[1] + end;

      if (x >= 0 && y >= 0 && x < n && y < m) {
        if (grid[x][y] > grid[start][end] + 1) {
          grid[x][y] = grid[start][end] + 1;
          queue.push([x, y]);
        }
      }
    }
  }

  return grid;
};

const res = updateMatrix([
  [1, 1, 1],
  [1, 1, 1],
  [0, 0, 0],
]);

console.log(res);
