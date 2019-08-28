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

// Time O(N^2)
// Space O(N)
const dfs = (grid, i, j, n, m, dirs) => {
  if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') return;
  grid[i][j] = '0';
  for (let [start, end] of dirs) {
    dfs(grid, i + start, j + end, n, m, dirs);
  }
};

const numIslands = function(grid) {
  if (grid == null || grid.length === 0) {
    return 0;
  }

  let n = grid.length;
  let m = grid[0].length;
  let count = 0;
  let dirs = [[0, 1], [-1, 0], [1, 0], [-1, 0]];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j, n, m, dirs);
        count++;
      }
    }
  }

  return count;
};
