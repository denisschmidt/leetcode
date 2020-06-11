/*

Given a rows x cols matrix grid representing a field of cherries. 

Each cell in grid represents the number of cherries that you can collect.

You have two robots that can collect cherries for you, Robot #1 is located at the top-left corner (0,0) , and Robot #2 is located at the top-right corner (0, cols-1) of the grid.

Return the maximum number of cherries collection using both robots  by following the rules below:

From a cell (i,j), robots can move to cell (i+1, j-1) , (i+1, j) or (i+1, j+1).
When any robot is passing through a cell, It picks it up all cherries, and the cell becomes an empty cell (0).
When both robots stay on the same cell, only one of them takes the cherries.
Both robots cannot move outside of the grid at any moment.
Both robots should reach the bottom row in the grid.
 

Example 1:
  Input: grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
  Output: 24
  Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
  Cherries taken by Robot #1, (3 + 2 + 5 + 2) = 12.
  Cherries taken by Robot #2, (1 + 5 + 5 + 1) = 12.
  Total of cherries: 12 + 12 = 24.

Example 2:
  Input: grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]
  Output: 28
  Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
  Cherries taken by Robot #1, (1 + 9 + 5 + 2) = 17.
  Cherries taken by Robot #2, (1 + 3 + 4 + 3) = 11.
  Total of cherries: 17 + 11 = 28.

Example 3:
  Input: grid = [[1,0,0,3],[0,0,0,3],[0,0,3,3],[9,0,3,3]]
  Output: 22

Example 4:
  Input: grid = [[1,1],[1,1]]
  Output: 4
  

Constraints:
  rows == grid.length
  cols == grid[i].length
  2 <= rows, cols <= 70
  0 <= grid[i][j] <= 100 

*/

// Top Down DP
// Time O(9 * N * M^2)
// Space O(N * M ^ 2)
const cherryPickup = grid => {
  let n = grid.length;
  let m = grid[0].length;

  // содержит максимальное кол-во вишен на i-th уровне которе могут собрать 2 робота
  let dp = Array(n)
    .fill(0)
    .map(() =>
      Array(m)
        .fill(0)
        .map(() => Array(m).fill(null)),
    );

  return dfs(0, 0, m - 1);

  function dfs(row, col1, col2) {
    if (row == n) return 0;

    if (dp[row][col1][col2] != null) return dp[row][col1][col2];

    let ans = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        // расчитываем новые позиции col для двух роботов
        let newCol1 = col1 + i;
        let newCol2 = col2 + j;

        if (newCol1 >= 0 && newCol1 < m && newCol2 >= 0 && newCol2 < m) {
          ans = Math.max(ans, dfs(row + 1, newCol1, newCol2));
        }
      }
    }

    // Если ячейки равны то забираем только 1 вишню
    let cherries = col1 == col2 ? grid[row][col1] : grid[row][col1] + grid[row][col2];

    dp[row][col1][col2] = ans + cherries;

    return dp[row][col1][col2];
  }
};
