/*

In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position you can walk one step to the left, right, up or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.
 
Example 1:
  Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
  Output: 24
  Explanation:
  [[0,6,0],
  [5,8,7],
  [0,9,0]]
  Path to get the maximum gold, 9 -> 8 -> 7.

Example 2:
  Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]

  Output: 28
    Explanation:
    [[1,0,7],
    [2,0,6],
    [3,4,5],
    [0,3,0],
    [9,0,20]]
    Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
  

Constraints:
  1 <= grid.length, grid[i].length <= 15
  0 <= grid[i][j] <= 100
  There are at most 25 cells containing gold.

*/

// Time: O(4 * 3^K) K < 25
// Space O(K)
const getMaximumGold = grid => {
  let n = grid.length;
  let m = grid[0].length;
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] > 0) {
        max = Math.max(max, dfs(i, j));
      }
    }
  }

  return max;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] == 0) return 0;

    let localMax = 0;
    let parentVal = grid[i][j];
    grid[i][j] = 0;

    for (let dir of dirs) {
      let x = dir[0] + i;
      let y = dir[1] + j;

      localMax = Math.max(localMax, dfs(x, y));
    }

    // backtrack
    grid[i][j] = parentVal;

    return localMax + parentVal;
  }
};
