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
const numIslands = grid => {
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        helper(i, j);
        ans++;
      }
    }
  }

  return ans;

  function helper(i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 0) return;

    grid[i][j] = 0;

    for (let dir of dirs) {
      helper(dir[0] + i, dir[1] + j);
    }
  }
};
