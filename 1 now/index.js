/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;

  let lo = [0, 0];
  let hi = [n - 1, m - 2];

  while (lo[0] <= hi[0]) {
    let x = (lo[0] + hi[0]) / 2;
    let y = (lo[1] + hi[1]) / 2;
    let mid = matrix[x][y];

    if (mid == target) {
      return true;
    }

    if (mid > target) {
      lo[0] = x;
    } else {
      hi[1] = y;
    }
  }

  return false;
};
