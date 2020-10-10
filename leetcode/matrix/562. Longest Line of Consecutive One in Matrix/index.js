/*

Given a 01 matrix M, find the longest line of consecutive one in the matrix. 

The line could be horizontal, vertical, diagonal or anti-diagonal.

Example:
  Input:
  [[0,1,1,0],
  [0,1,1,0],
  [0,0,0,1]]
  Output: 3

Hint: The number of elements in the given matrix will not exceed 10,000.

*/

// Time O(N^2*K)
// Space O(1)
const longestLine = grid => {
  if (grid.length == 0) return 0;
  let n = grid.length;
  let m = grid[0].length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        let len = 1;
        let indexes = Array(4).fill(true);

        while (true) {
          if (indexes[0] && j + len && grid[i][j + len] == 1) {
          } else {
            indexes[0] = false;
          }

          if (indexes[1] && i + len < n && grid[i + len][j] == 1) {
          } else {
            indexes[1] = false;
          }

          if (indexes[2] && i + len < n && j + len < m && grid[i + len][j + len] == 1) {
          } else {
            indexes[2] = false;
          }

          if (indexes[3] && i + len < n && j - len >= 0 && grid[i + len][j - len] == 1) {
          } else {
            indexes[3] = false;
          }

          if (!indexes[0] && !indexes[1] && !indexes[2] && !indexes[3]) {
            break;
          }

          len++;
        }

        ans = Math.max(ans, len);
      }
    }
  }

  return ans;
};
