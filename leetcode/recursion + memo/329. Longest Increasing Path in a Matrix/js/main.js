// Time O(N^2)
// Space O(N^2)
// DFS + Memoization

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = matrix => {
  if (matrix.length == 0) {
    return 0;
  }

  let ans = 0;
  let n = matrix.length;
  let m = matrix[0].length;

  let dirs = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];
  let dist = Array(n)
    .fill(null)
    .map(() => Array(m).fill(null));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ans = Math.max(ans, dfs(i, j));
    }
  }

  return ans + 1;

  function dfs(i, j) {
    if (dist[i][j] != null) {
      return dist[i][j];
    }

    let max = 0;

    for (let d of dirs) {
      let x = d[0] + i;
      let y = d[1] + j;

      if (x < 0 || y < 0 || x >= n || y >= m) {
        continue;
      }

      // We don't have to maintain a visited set becouse
      // The path is increasing, we will never visit a node with smaller value
      if (matrix[i][j] < matrix[x][y]) {
        max = Math.max(max, 1 + dfs(x, y));
      }
    }

    dist[i][j] = max;

    return dist[i][j];
  }
};
