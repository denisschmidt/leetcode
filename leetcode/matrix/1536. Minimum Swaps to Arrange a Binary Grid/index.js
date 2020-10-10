/*

Given an n x n binary grid, in one step you can choose two adjacent rows of the grid and swap them.

A grid is said to be valid if all the cells above the main diagonal are zeros.

Return the minimum number of steps needed to make the grid valid, or -1 if the grid cannot be valid.

The main diagonal of a grid is the diagonal that starts at cell (1, 1) and ends at cell (n, n).

Example 1:
  Input: grid = [[0,0,1],[1,1,0],[1,0,0]]
  Output: 3

Example 2:
  Input: grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
  Output: -1
  Explanation: All rows are similar, swaps have no effect on the grid.

Example 3:
  Input: grid = [[1,0,0],[1,1,0],[1,1,1]]
  Output: 0
 

Constraints:
  n == grid.length
  n == grid[i].length
  1 <= n <= 200
  grid[i][j] is 0 or 1

*/

const minSwaps = grid => {
  let n = grid.length;
  let m = grid[0].length;
  let d = 1;
  let res = 0;
  let i = 0;

  while (i < n && m - d > 0) {
    let k = i;
    let j = 0;

    while (k < n) {
      j = d;
      for (; j < m && grid[k][j] == 0; j++) {}

      if (j == m) {
        break;
      }

      k++;
    }

    if (j != m) {
      return -1;
    }

    if (k > i) {
      swapAll(i, k);
      res += k - i;
    }

    i++;
    d++;
  }

  return res;

  function swapAll(i, j) {
    while (j - 1 >= 0 && i < j) {
      swap(j - 1, j);
      j--;
    }
  }

  function swap(i, j) {
    for (let k = 0; k < m; k++) {
      let tmp = grid[i][k];
      grid[i][k] = grid[j][k];
      grid[j][k] = tmp;
    }
  }
};
