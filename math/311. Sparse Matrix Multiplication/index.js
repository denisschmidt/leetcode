/*

Given two sparse matrices A and B, return the result of AB.

You may assume that A's column number is equal to B's row number.

Example:
  Input:
    A = [
      [ 1, 0, 0],
      [-1, 0, 3]
    ]

    B = [
      [ 7, 0, 0 ],
      [ 0, 0, 0 ],
      [ 0, 0, 1 ]
    ]

  Output:

        |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
    AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                      | 0 0 1 |

*/

// Умножение матриц
// Time O(N * M * K)
// Space O(1)
const multiply = function(A, B) {
  let m = A.length;
  let n = A[0].length;
  let nB = B[0].length;

  let matrix = Array(m)
    .fill(0)
    .map(() => Array(nB).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < nB; j++) {
      let sum = 0;

      for (let k = 0; k < n; k++) {
        sum += A[i][k] * B[k][j];
      }

      matrix[i][j] = sum;
    }
  }

  return matrix;
};
