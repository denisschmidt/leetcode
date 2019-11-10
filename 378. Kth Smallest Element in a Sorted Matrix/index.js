/*
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:
  matrix = [
     [ 1,  5,  9],
     [10, 14, 17],
     [12, 13, 15]
  ],
  k = 8,

  return 13.

Note: You may assume k is always valid, 1 ≤ k ≤ n2.

 */

const kthSmallest = (matrix, k) => {
  const results = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (k === 0) {
        console.log(ans);
        return ans;
      }
      if (i === 0 && j === 0) {
        k--;
        continue;
      }
    }
  }
};

// Time O(N * M * NLogN);
// Space O(N)
const kthSmallest2 = (matrix, k) => {
  const results = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      results.push(matrix[i][j]);
    }
  }

  results.sort((a, b) => a - b);
  return results[k - 1];
};
