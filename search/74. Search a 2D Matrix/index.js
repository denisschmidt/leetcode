/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.


Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true


Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

 */

// В этом решении мы итерируемся по массиву как будто он не 2D, а просто одномерный

// Time O(LogN)
// Space O(1)
const searchMatrix = (matrix, target) => {
  if (matrix.length == 0) return false;

  let n = matrix.length;
  let m = matrix[0].length;

  let begin = 0;
  let end = n * m - 1;

  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);

    // Получаем значение по середине как будто у нас обычный 1D массив
    let minValue = matrix[Math.floor(mid / m)][Math.floor(mid % m)];

    if (minValue === target) {
      return true;
    } else if (minValue < target) {
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

//  Если значение в ячейке больше target тогда поднимаеся вверх
//  Если значение в ячейке меньше чем target тогда идем право

// Time O(N + M)
// Space O(1)
const searchMatrix_II = function (matrix, target) {
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
