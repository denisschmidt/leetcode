/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
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
