/*

Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.
The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.

Note: You can only put the bomb at an empty cell.

Example:
  Input: [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
  Output: 3 
  Explanation: For the given grid,
    0 E 0 0 
    E 0 W E 
    0 E 0 0

Placing a bomb at (1,1) kills 3 enemies.

*/

// Time O(N^2 * K)
// Space O(1)
const maxKilledEnemies = grid => {
  if (grid.length == 0) return 0;

  let n = grid.length;
  let m = grid[0].length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 0) {
        let len = 1;
        let cnt = 0;
        let index = Array(4).fill(true);

        while (true) {
          if (i + len >= n || grid[i + len][j] == 'W') {
            index[0] = false;
          } else if (index[0] && grid[i + len][j] == 'E') {
            cnt++;
          }

          if (i - len < 0 || grid[i - len][j] == 'W') {
            index[1] = false;
          } else if (index[1] && grid[i - len][j] == 'E') {
            cnt++;
          }

          if (j + len >= m || grid[i][j + len] == 'W') {
            index[2] = false;
          } else if (index[2] && grid[i][j + len] == 'E') {
            cnt++;
          }

          if (j - len < 0 || grid[i][j - len] == 'W') {
            index[3] = false;
          } else if (index[3] && grid[i][j - len] == 'E') {
            cnt++;
          }

          if (index[0] || index[1] || index[2] || index[3]) {
            len++;
          } else {
            break;
          }
        }

        ans = Math.max(ans, cnt);
      }
    }
  }
  return ans;
};
