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

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
let left = 0, right = arr.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if(arr[mid] >= search) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return arr[right] === search ? right : -1
 */

var searchMatrix2 = function(matrix, target) {
  if (!matrix.length) return false;
  let rowNum = matrix.length,
    colNum = matrix[0].length;
  let begin = 0,
    end = rowNum * colNum - 1;

  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    console.log('---', begin, end, mid);
    let minValue = matrix[Math.floor(mid / colNum)][Math.floor(mid % colNum)];

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

var searchMatrix1 = function(matrix, target) {
  let hasTarget = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        hasTarget = true;
        break;
      }
    }
  }
  return hasTarget;
};

/**
 * Решение через два бинарых поиска
 * Complexity O(log(m) + log(n)) = O(log(mn)
 * Решение проще чем решение с пересчетом индексов
 * @param matrix
 * @param target
 * @returns {boolean}
 */
var searchMatrix3 = function(matrix, target) {
  if (!matrix.length) return false;

  let left = 0,
    right = matrix.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (matrix[mid][0] < target) {
      left = mid + 1;
    } else if (matrix[mid][0] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  let row = right;
  if (row >= 0) {
    left = 0;
    right = matrix[row].length - 1;

    while (left < right) {
      mid = Math.floor((left + right) / 2);
      if (matrix[row][mid] < target) {
        left = mid + 1;
      } else if (matrix[row][mid] > target) {
        right = mid - 1;
      } else {
        return true;
      }
    }
  }

  return false;
};

const entryVal = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];

const res = searchMatrix3(entryVal, 35);
console.log('---', res);
