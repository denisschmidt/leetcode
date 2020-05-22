/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  let ans = 0;
  let n = grid.length;
  let m = grid[0].length;

  let dirs = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        let cnt = bfs([i, j]);

        if (cnt > 1) {
          ans += cnt;
        }
      }
    }
  }

  function bfs(start) {
    let queue = [start];
    let cnt = 0;

    while (queue.length) {
      let size = queue.length;

      for (let k = 0; k < size; k++) {
        let [i, j] = queue.shift();

        for (let dir of dirs) {
          let x = dir[0] + i;
          let y = dir[1] + j;

          while (x >= 0 && y >= 0 && x < n && y < m) {
            if (grid[x][y] == 1) {
              queue.push([x, y]);
              grid[x][y] = 0;
            }
            x += dir[0];
            y += dir[1];
          }
        }

        cnt++;
      }
    }

    return cnt;
  }
};
