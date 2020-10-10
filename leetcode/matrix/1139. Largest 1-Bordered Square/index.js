/*

Given a 2D grid of 0s and 1s, return the number of elements in the largest square subgrid that has all 1s on its border, or 0 if such a subgrid doesn't exist in the grid.

Example 1:
  Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
  Output: 9

Example 2:
  Input: grid = [[1,1,0,0]]
  Output: 1
  

Constraints:
  1 <= grid.length <= 100
  1 <= grid[0].length <= 100
  grid[i][j] is 0 or 1

*/

// Time O(n*m^2)
// Space O(1)
const largest1BorderedSquare = grid => {
  let n = grid.length;
  let m = n > 0 ? grid[0].length : 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] != 1) continue;
      let equal = grid[i][j];
      let sqrLen = 1;

      while (i + sqrLen < n && j + sqrLen < m) {
        let flag = true;
        for (let k = j; k <= j + sqrLen; k++) {
          if (grid[i + sqrLen][k] != equal || grid[i][k] != equal) {
            flag = false;
            break;
          }
        }

        for (let k = i; k <= i + sqrLen; k++) {
          if (grid[k][j + sqrLen] != equal || grid[k][j] != equal) {
            flag = false;
            break;
          }
        }

        if (flag) {
          ans = Math.max(ans, sqrLen + 1);
        }

        sqrLen++;
      }

      ans = Math.max(ans, 1);
    }
  }

  return ans * ans;
};
