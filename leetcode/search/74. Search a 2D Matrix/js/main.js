// В этом решении мы итерируемся по массиву как будто он не 2D, а просто одномерный

// Time O(LogN)
// Space O(1)
const searchMatrix = (matrix, target) => {
  if (matrix.length == 0) return false;

  let n = matrix.length;
  let m = matrix[0].length;

  let lo = 0;
  let hi = n * m - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let row = Math.floor(mid / m);
    let col = Math.floor(mid % m);

    // Получаем значение по середине как будто у нас обычный 1D массив

    let value = matrix[row][col];

    if (value == target) {
      return true;
    }

    if (target > value) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return false;
};

// Time O(LogN)
// Space O(1)
const searchMatrix = (matrix, target) => {
  if (matrix.length == 0) return false;

  let n = matrix.length;
  let m = matrix[0].length;

  return searchByRow();

  function searchByRow() {
    let lo = 0;
    let hi = n - 1;

    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (target >= matrix[mid][0] && target <= matrix[mid][m - 1]) {
        return searchByCol(mid);
      }

      if (target > matrix[mid][m - 1]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    return false;
  }

  function searchByCol(row) {
    let lo = 0;
    let hi = m - 1;

    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (target == matrix[row][mid]) {
        return true;
      }

      if (target > matrix[row][mid]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    return false;
  }
};
