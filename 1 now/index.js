/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let cols = [];
  let rows = [];

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < m; j++) {
      max = Math.max(max, grid[i][j]);
    }
    rows.push(max);
  }

  for (let j = 0; j < m; j++) {
    let max = 0;
    for (let i = 0; i < n; i++) {
      max = Math.max(max, grid[j][i]);
    }
    cols.push(max);
  }

  for (let i = 0; i < n; i++) {
    let max = 0;
    let min = Number.MAX_VALUE;
    for (let j = 0; j < m; j++) {
      let max = Math.max(max, cols[i], rows[j]);
      let min = Math.min(min, cols[i], rows[j]);

      if (grid[i][j] != max) {
        grid[i][j] = min;
      }
    }
  }

  return grid;
};
