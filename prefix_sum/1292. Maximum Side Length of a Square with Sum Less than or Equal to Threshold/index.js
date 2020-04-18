/*

Given a m x n matrix mat and an integer threshold. 
Return the maximum side-length of a square with a sum less than or equal to threshold or return 0 if there is no such square.

Example 1:
  Input: mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
  Output: 2
  Explanation: The maximum side length of square with sum less than 4 is 2 as shown.

Example 2:
  Input: mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
  Output: 0

Example 3:
  Input: mat = [[1,1,1,1],[1,0,0,0],[1,0,0,0],[1,0,0,0]], threshold = 6
  Output: 3

Example 4:
  Input: mat = [[18,70],[61,1],[25,85],[14,40],[11,96],[97,96],[63,45]], threshold = 40184
  Output: 2
 

Constraints:
  1 <= m, n <= 300
  m == mat.length
  n == mat[i].length
  0 <= mat[i][j] <= 10000
  0 <= threshold <= 10^5

*/

// Time O(N^2)
// Space O(N^2)
const maxSideLength = (grid, threshold) => {
  let n = grid.length;
  let m = grid[0].length;
  let prefix = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      prefix[i][j] = prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] + grid[i - 1][j - 1];
    }
  }

  let ans = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      let len = ans + 1;

      while (i + len <= n && j + len <= m && squareSum(i, j, i + len, j + len) <= threshold) {
        ans = len;
        len++;
      }
    }
  }

  return ans;

  function squareSum(x1, y1, x2, y2) {
    return prefix[x2][y2] - prefix[x1][y2] - prefix[x2][y1] + prefix[x1][y1];
  }
};
