/*

Given a square array of integers A, we want the minimum sum of a falling path through A.

A falling path starts at any element in the first row, and chooses one element from each row.
The next row's choice must be in a column that is different from the previous row's column by at most one.

Example 1:

  Input: [[1,2,3],[4,5,6],[7,8,9]]
  Output: 12

Explanation:
  The possible falling paths are:
  [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
  [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
  [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]

The falling path with the smallest sum is [1,4,7], so the answer is 12.

 */

//Complexity Analysis

// Time Complexity: O(N^2), where N is the length of A.

// Space Complexity: O(1) in additional space complexity.

const minFallingPathSum = function(A) {
  const size = A.length;

  for (let i = size - 2; i >= 0; i--) {
    for (let j = 0; j < size; j++) {
      // val = min(A[r+1][c-1], A[r+1][c], A[r+1][c+1])
      let val = A[i + 1][j];
      if (j > 0) {
        val = Math.min(val, A[i + 1][j - 1]);
      }
      if (j + 1 < size) {
        val = Math.min(val, A[i + 1][j + 1]);
      }
      A[i][j] += val;
    }
  }

  console.log('---', A);

  let ans = Number.MAX_VALUE;
  for (let val of A[0]) {
    ans = Math.min(ans, val);
  }
  return ans;
};

const res = minFallingPathSum([[-80, -13, 22], [83, 94, -5], [73, -48, 61]]);
console.log('---', res);
