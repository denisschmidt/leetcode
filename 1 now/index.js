/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let ans = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let cnt = 0;

      for (let k = 0; k < m; k++) {
        if (grid[i][k] == 1 && grid[j][k] == 1) {
          cnt++;
        }
      }

      if (cnt > 0) {
        ans += (cnt * (cnt - 1)) / 2;
      }
    }
  }

  return ans;
};

let a = countCornerRectangles([
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 1],
  [1, 0, 1],
]);

console.log(a);
