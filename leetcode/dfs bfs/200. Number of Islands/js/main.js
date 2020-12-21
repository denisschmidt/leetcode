// Time: O(M × N), где M - количество строк, а N - количество столбцов.
// Space: наихудший случай O(M * N) O в случае, когда карта сетки заполнена 1, где DFS проходит M * N в глубину
const numIslands = grid => {
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        helper(i, j);
        ans++;
      }
    }
  }

  return ans;

  function helper(i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 0) return;

    grid[i][j] = 0;

    for (let dir of dirs) {
      helper(dir[0] + i, dir[1] + j);
    }
  }
};
