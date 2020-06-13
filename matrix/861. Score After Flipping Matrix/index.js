/*
We have a two dimensional matrix A where each value is 0 or 1.

A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.

After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score.

Example 1:
  Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
  Output: 39
  Explanation:
    Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
    0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 

Note:
  1 <= A.length <= 20
  1 <= A[0].length <= 20
  A[i][j] is 0 or 1.

*/

// Time O(N^2)
// Space O(1)
const matrixScore = A => {
  let n = A.length;
  let m = A[0].length;

  // Перевернуть все строки, которые начинаются с нуля;
  for (let i = 0; i < n; i++) {
    if (A[i][0] == 0) {
      flipRow(i);
    }
  }

  // Перевернуть все столбцы, где количество нулей больше, чем число единиц
  for (let j = 1; j < m; j++) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += A[i][j];
    }

    if (sum * 2 < n) {
      flipCol(j);
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ans += A[i][j] * (1 << (m - j - 1));
    }
  }

  return ans;

  function flipRow(i) {
    for (let j = 0; j < m; j++) {
      A[i][j] = A[i][j] ^ 1;
    }
  }

  function flipCol(j) {
    for (let i = 0; i < n; i++) {
      A[i][j] = A[i][j] ^ 1;
    }
  }
};
