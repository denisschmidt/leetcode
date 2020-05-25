/*

Given a m * n matrix mat and an integer K, 

return a matrix answer where each answer[i][j] is the sum of all elements 

mat[r][c] for i - K <= r <= i + K, j - K <= c <= j + K, and (r, c) is a valid position in the matrix.
 
Example 1:
  Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
  Output: [[12,21,16],[27,45,33],[24,39,28]]

Example 2:
  Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
  Output: [[45,45,45],[45,45,45],[45,45,45]]
 

Constraints:
  m == mat.length
  n == mat[i].length
  1 <= m, n, K <= 100
  1 <= mat[i][j] <= 100

*/

// Time O(N^4)
// Space O(N^2)
const matrixBlockSum = (mat, K) => {
  let n = mat.length;
  let m = mat[0].length;
  let ans = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let z = i - K >= 0 ? i - K : 0;
      let sum = 0;

      while (z <= i + K && z < n) {
        let h = j - K >= 0 ? j - K : 0;
        while (h <= j + K && h < m) {
          sum += mat[z][h];
          h++;
        }
        z++;
      }
      ans[i][j] = sum;
    }
  }

  return ans;
};
