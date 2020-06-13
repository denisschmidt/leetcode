/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let map = {};

  for (let i = 0; i < n; i++) {
    let s = '';

    for (let j = 0; j < m; j++) {
      if (matrix[i][0] == 1) {
        if (matrix[i][j] == 0) {
          s += 1;
        } else {
          s += 0;
        }
      } else {
        s += matrix[i][j];
      }
    }

    map[s] = ~~map[s] + 1;
  }

  let ans = 0;

  for (let key of Object.keys(map)) {
    ans = Math.max(ans, map[key]);
  }

  return ans;
};

let x = maxEqualRowsAfterFlips([
  [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
]);

console.log(x);
