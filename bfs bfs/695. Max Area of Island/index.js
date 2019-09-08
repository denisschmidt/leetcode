/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.

 */

// Time O(R * C), где R - количество строк в данной сетке, а C - количество столбцов. Мы посещаем каждый один раз.
// Space: O(R * C)  пространство, используемое для отслеживания посещенных квадратов, и пространство, используемое стеком вызовов во время рекурсии.

const maxAreaOfIsland = grid => {
  if (grid === null || grid.length === 0) {
    return 0;
  }

  let n = grid.length;
  let m = grid[0].length;
  let ans = 0;
  const dirs = [[1, 0, 'd'], [0, -1, 'l'], [0, 1, 'r'], [-1, 0, 'u']];
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        count = 0;
        dfs(i, j);
        ans = Math.max(ans, count);
      }
    }
  }

  return Math.max(count, ans);

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === 0) return;

    grid[i][j] = 0;
    count++;

    for (let [start, end] of dirs) {
      dfs(i + start, j + start);
    }
  }
};
