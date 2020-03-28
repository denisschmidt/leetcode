/**
 * @param {character[][]} grid
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(grid, click) {
  let queue = [click];
  let n = grid.length;
  let m = grid[0].length;
  let visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];

  visited[click[0]][click[1]] = true;

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let [i, j] = queue.shift();

      if (grid[i][j] == 'M') {
        grid[i][j] = 'X';
      }

      let mine = 0;
      let coords = [];

      for (let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];

        if (x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) continue;

        if ((grid[x][y] >= 1 && grid[x][y] <= 9) || grid[x][y] == 'M') {
          mine++;
        } else if (grid[x][y] == 'E') {
          coords.push([x, y]);
        }
      }

      if (mine == 0) {
        coords.forEach(coord => {
          queue.push([coord[0], coord[1]]);
          visited[coord[0]][coord[1]] = true;
        });
        grid[i][j] = 'B';
      } else {
        grid[i][j] = `${mine}`;
      }
    }
  }

  return grid;
};
