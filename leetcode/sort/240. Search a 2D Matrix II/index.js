/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.

 */

// Time O(N + M)
// Space O(1)
const searchMatrix = (matrix, target) => {
  //  если значение в ячейке больше target тогда поднимаеся вверх
  //  если значение в ячейке меньше чем target тогда идем право

  let i = matrix.length - 1;
  let j = 0;

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }

  return false;
};

// Time O(lg(N!)
// Space O(1)
const searchMatrix_II = (matrix, target) => {
  if (matrix == null || matrix.length === 0) {
    return false;
  }

  let shorterDim = Math.min(matrix.length, matrix[0].length);

  for (let i = 0; i < shorterDim; i++) {
    const verticalFound = binarySearch(matrix, target, i, true);
    const horizontalFound = binarySearch(matrix, target, i, false);
    if (verticalFound || horizontalFound) {
      return true;
    }
  }

  return false;
};

function binarySearch(matrix, target, start, vertical) {
  let lo = start;
  let hi = vertical ? matrix[0].length - 1 : matrix.length - 1;

  while (hi >= lo) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (vertical) {
      // searching a column
      if (matrix[start][mid] < target) {
        lo = mid + 1;
      } else if (matrix[start][mid] > target) {
        hi = mid - 1;
      } else {
        return true;
      }
    } else {
      // searching a row
      if (matrix[mid][start] < target) {
        lo = mid + 1;
      } else if (matrix[mid][start] > target) {
        hi = mid - 1;
      } else {
        return true;
      }
    }
  }

  return false;
}
