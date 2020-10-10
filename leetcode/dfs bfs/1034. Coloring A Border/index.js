/*

Given a 2-dimensional grid of integers, each value in the grid represents the color of the grid square at that location.

Two squares belong to the same connected component if and only if they have the same color and are next to each other in any of the 4 directions.

The border of a connected component is all the squares in the connected component that are either 4-directionally adjacent to a square not in the component, or on the boundary of the grid (the first or last row or column).

Given a square at location (r0, c0) in the grid and a color, color the border of the connected component of that square with the given color, and return the final grid.

Example 1:
  Input: grid = [[1,1],[1,2]], r0 = 0, c0 = 0, color = 3
  Output: [[3, 3], [3, 2]]

Example 2:
  Input: grid = [[1,2,2],[2,3,2]], r0 = 0, c0 = 1, color = 3
  Output: [[1, 3, 3], [2, 3, 3]]

Example 3:
  Input: grid = [[1,1,1],[1,1,1],[1,1,1]], r0 = 1, c0 = 1, color = 2
  Output: [[2, 2, 2], [2, 1, 2], [2, 2, 2]]
  

Note:
  1 <= grid.length <= 50
  1 <= grid[0].length <= 50
  1 <= grid[i][j] <= 1000
  0 <= r0 < grid.length
  0 <= c0 < grid[0].length
  1 <= color <= 1000

*/

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
