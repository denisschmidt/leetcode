/*

(This problem is an interactive problem.)

A binary matrix means that all elements are 0 or 1. 

For each individual row of the matrix, this row is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

You can't access the Binary Matrix directly.  

You may only access the matrix using a BinaryMatrix interface:

BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.
Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  

Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix mat as input in the following four examples. 

You will not have access the binary matrix directly.

Example 1:
  Input: mat = [[0,0],[1,1]]
  Output: 0

Example 2:
  Input: mat = [[0,0],[0,1]]
  Output: 1

Example 3:
  Input: mat = [[0,0],[0,0]]
  Output: -1

Example 4:
  Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
  Output: 1
 

Constraints:
  1 <= mat.length, mat[i].length <= 100
  mat[i][j] is either 0 or 1.
  mat[i] is sorted in a non-decreasing way.

*/

const leftMostColumnWithOne = binaryMatrix => {
  let [n, m] = binaryMatrix.dimensions();
  let min = Number.MAX_VALUE;
  let minIndex = -1;
  let nums = Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    let index = search(i);

    if (index != null) {
      for (let k = index; k < m; k++) {
        nums[k] += 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    if (nums[i] == 0) continue;
    if (min > nums[i]) {
      min = nums[i];
      minIndex = i;
    }
  }

  return minIndex;

  function search(row) {
    let lo = 0;
    let hi = m - 1;

    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (binaryMatrix.get(row, mid) == 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    let num = binaryMatrix.get(row, lo);

    return num == 1 ? lo : null;
  }
};
