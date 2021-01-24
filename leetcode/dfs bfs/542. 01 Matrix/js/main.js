// BFS
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

  // ВАЖНАЯ ЧАСТЬ и полезный прием
  // новую матрицу мы инициализируем как Number.MAX_VALUE
  // это те значения по которым мы еще не прошлись и которые мы еще не заполнили
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
