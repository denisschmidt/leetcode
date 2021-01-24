// Time O(N*M)
// Space O(N*M)
const colorBorder = (grid, r0, c0, color) => {
  let n = grid.length;
  let m = grid[0].length;
  let coords = [];
  let targetColor = grid[r0][c0];
  let coloredCoords = [];

  let visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));

  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  dfs(r0, c0);

  for (let [i, j] of coords) {
    let isValid = false;

    for (let dir of dirs) {
      let x = i + dir[0];
      let y = j + dir[1];

      if (x < 0 || y < 0 || x >= n || y >= m) {
        isValid = true;
        break;
      } else {
        if (grid[x][y] != targetColor) {
          isValid = true;
          break;
        }
      }
    }

    if (isValid) {
      coloredCoords.push([i, j]);
    }
  }

  // Can color a square if and only if
  // 1) Square has a neighbor that is outside the grid
  // 2) Square has a neighbor whitch has a different color
  for (let [i, j] of coloredCoords) {
    grid[i][j] = color;
  }

  return grid;

  function dfs(i, j) {
    coords.push([i, j]);
    visited[i][j] = true;

    for (let dir of dirs) {
      let x = dir[0] + i;
      let y = dir[1] + j;

      if (x >= 0 && y >= 0 && x < n && y < m && grid[x][y] == targetColor && !visited[x][y]) {
        dfs(x, y);
      }
    }
  }
};
