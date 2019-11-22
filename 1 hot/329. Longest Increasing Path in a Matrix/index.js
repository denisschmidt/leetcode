/*
increasing path.

From each cell, you can either move to four directions: left, right, up or down.
You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:
  Input: nums =
  [
    [9,9,4],
    [6,6,8],
    [2,1,1]
  ]
  Output: 4
  Explanation: The longest increasing path is [1, 2, 6, 9].

Example 2:
  Input: nums =
  [
    [3,4,5],
    [3,2,6],
    [2,2,1]
  ]
  Output: 4
  Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

 */
// Time O(N*M)
// Space O(N*M)
// DFS + Memoization
const longestIncreasingPath = matrix => {
  if (!matrix.length) {
    return 0;
  }

  const dirs = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];

  let maxLen = -Number.MAX_VALUE;
  const n = matrix.length;
  const m = matrix[0].length;

  // нужно так как возможны повторные вычисления
  const memo = Array(n)
    .fill(null)
    .map(() => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const cnt = helper(i, j, memo);
      maxLen = Math.max(maxLen, cnt);
    }
  }

  return maxLen;

  function helper(i, j, memo) {
    // если вычислили значение до этого
    if (memo[i][j] !== 0) return memo[i][j];

    let max = 1;

    for (let dir of dirs) {
      let x = dir[0] + i;
      let y = dir[1] + j;

      // используем условие matrix[i][j] >= matrix[x][y] поэтому нам не нужен visited[m][n]
      if (x < 0 || y < 0 || x >= n || y >= m || matrix[i][j] >= matrix[x][y]) continue;

      let len = 1 + helper(x, y, memo);
      max = Math.max(max, len);
    }

    memo[i][j] = max;

    return max;
  }
};

const res = longestIncreasingPath([
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
]);

console.log(res);
