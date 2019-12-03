/*
Given a 2D grid consists of 0s (land) and 1s (water).
An island is a maximal 4-directionally connected group of 0s
and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

Example 1:

  Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
  Output: 2
  Explanation:
    Islands in gray are closed because they are completely surrounded by water (group of 1s).

Example 2:
  Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
  Output: 1
  Example 3:

  Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
  Output: 2


Constraints:
  1 <= grid.length, grid[0].length <= 100
  0 <= grid[i][j] <=1

 */

// Time O(N) где N - общее количество ячеек
// Space O(N) для стека
const closedIsland = grid => {
  let n = grid.length;
  let m = grid[0].length;
  let dirs = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
        dfs(i, j);
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        dfs(i, j);
        cnt++;
      }
    }
  }

  return cnt;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === 1) {
      return;
    }

    grid[i][j] = 1;

    for (let dir of dirs) {
      dfs(dir[0] + i, dir[1] + j);
    }
  }
};

// Time O(N) + O(N) где N - общее количество ячеек
// Space O(N)
const closedIsland2 = grid => {
  let n = grid.length;
  let m = grid[0].length;
  let paths = [];
  let visited = Array(n)
    .fill(null)
    .map(() => Array(m).fill(false));
  let dirs = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0 && !visited[i][j]) {
        const path = dfs(i, j, []);
        paths.push(path);
      }
    }
  }

  visited = Array(n)
    .fill(null)
    .map(() => Array(m).fill(false));

  let cnt = 0;

  for (let path of paths) {
    let isValid = true;
    for (let [x, y] of path) {
      if (!hasWater(x, y)) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      cnt++;
    }
  }

  return cnt;

  function hasWater(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m) return false;
    if (visited[i][j] || grid[i][j] === 1) return true;

    visited[i][j] = true;

    for (let dir of dirs) {
      if (!hasWater(i + dir[0], j + dir[1])) {
        return false;
      }
    }

    return true;
  }

  function dfs(i, j, path) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== 0 || visited[i][j]) return;
    visited[i][j] = true;
    path.push([i, j]);

    for (let dir of dirs) {
      dfs(i + dir[0], j + dir[1], path);
    }

    return path;
  }
};
