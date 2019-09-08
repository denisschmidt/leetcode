/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:
  Input:
  11110
  11010
  11000
  00000
  Output: 1

Example 2:
  Input:
  11000
  11000
  00100
  00011
  Output: 3

 */

// Time: O(M × N), где M - количество строк, а N - количество столбцов.
// Space: наихудший случай O(M * N) O в случае, когда карта сетки заполнена 1, где DFS проходит M * N в глубину
const numIslands = function(grid) {
  if (grid == null || grid.length === 0) {
    return 0;
  }

  const n = grid.length;
  const m = grid[0].length;
  const dirs = [[1, 0], [0, -1], [0, 1], [-1, 0]];
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') return;

    grid[i][j] = '0';

    for (let [start, end] of dirs) {
      dfs(i + start, j + end);
    }
  }
};
