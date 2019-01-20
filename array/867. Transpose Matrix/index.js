/*
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

Example 1:
  Input: [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[1,4,7],[2,5,8],[3,6,9]]

Example 2:
  Input: [[1,2,3],[4,5,6]]
  Output: [[1,4],[2,5],[3,6]]


Note:

  1 <= A.length <= 1000
  1 <= A[0].length <= 1000
 */

// Complexity Analysis
//
// Time Complexity: O(R * C), where R and C are the number of rows and columns in the given matrix A.
//
// Space Complexity: O(R * C), the space used by the answer.

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function(A) {
  let ans = [[]];
  for (let i = 0; i < A[0].length; i++) {
    if (!ans[i]) {
      ans[i] = [];
    }
    for (let j = 0; j < A.length; j++) {
      ans[i][j] = A[j][i];
    }
  }
  return ans;
};

const res = transpose([[1, 2, 3], [4, 5, 6]]);
console.log('---', res);
