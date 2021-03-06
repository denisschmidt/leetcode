/*

Given a square grid of integers arr, a falling path with non-zero shifts is a choice of exactly one element from each row of arr, such that no two elements chosen in adjacent rows are in the same column.

Return the minimum sum of a falling path with non-zero shifts.

Example 1:
  Input: arr = [[1,2,3],[4,5,6],[7,8,9]]
  Output: 13
  Explanation: 
    The possible falling paths are:
    [1,5,9], [1,5,7], [1,6,7], [1,6,8],
    [2,4,8], [2,4,9], [2,6,7], [2,6,8],
    [3,4,8], [3,4,9], [3,5,7], [3,5,9]
    The falling path with the smallest sum is [1,5,7], so the answer is 13.
 
Constraints:
  1 <= arr.length == arr[i].length <= 200
  -99 <= arr[i][j] <= 99

*/

// Time O(N^2)
// Space O(N^2)
// Bottom-Up Recursion
const minFallingPathSum = arr => {
  let n = arr.length;
  let m = arr[0].length;
  let res = Number.MAX_VALUE;
  let dp = Array(n)
    .fill(0)
    .map(() => Array(m).fill(Number.MAX_VALUE));

  for (let j = 0; j < m; j++) {
    res = Math.min(res, dfs(1, j) + arr[0][j]);
  }
  return res;

  function dfs(i, j) {
    if (i >= n) {
      return 0;
    }

    if (dp[i][j] != Number.MAX_VALUE) {
      return dp[i][j];
    }

    let min = Number.MAX_VALUE;

    for (let k = 0; k < arr.length; k++) {
      if (k == j) continue;
      min = Math.min(min, dfs(i + 1, k) + arr[i][k]);
    }

    if (dp[i][j] > min) {
      dp[i][j] = min;
    }

    return dp[i][j];
  }
};

const minFallingPathSum_II = grid => {
  let n = grid.length;
  let m = grid[0].length;
  let min = Number.MAX_VALUE;

  let pq = new PriorityQueue({ comparator: (a, b) => a[2] - b[2] });
  let dp = Array(n)
    .fill(0)
    .map(() => Array(m).fill(Number.MAX_VALUE));

  for (let j = 0; j < m; j++) {
    dp[0][j] = grid[0][j];
    pq.offer([1, j, grid[0][j]]);
  }

  for (let i = 1; i < n; i++) {
    while (pq.size() > 0) {
      let [col, sum] = pq.poll();

      for (let j = 0; j < m; j++) {
        if (j == col) continue;
        dp[i][j] = Math.min(dp[i][j], grid[i][j] + sum);
      }
    }

    for (let j = 0; j < m; j++) {
      if (i == n - 1) {
        min = Math.min(min, dp[i][j]);
      } else {
        pq.offer([i, j, dp[i][j]]);
      }
    }
  }

  return min;
};
