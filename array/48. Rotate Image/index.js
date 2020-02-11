/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

 */

// Time O(N^2)
// Space O(1)
const rotate = matrix => {
  if (matrix.length === 0) return matrix;

  const n = matrix.length;

  // транспонируем матрицу
  // строки становятся столбцами стоблцы строками
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const tmp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = tmp;
    }
  }

  for (let i = 0; i < n; i++) {
    let lo = i;
    let hi = m - 1;

    while (lo < hi) {
      let t = matrix[i][lo];
      matrix[i][lo] = matrix[i][hi];
      matrix[i][hi] = t;
      lo++;
      hi--;
    }
  }

  return matrix;
};

// Time O(N^2)
// Space O(1)
const rotate2 = matrix => {
  if (matrix.length === 0) return matrix;

  const n = matrix.length;

  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      const temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};
