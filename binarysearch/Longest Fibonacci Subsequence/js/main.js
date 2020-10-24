class Solution {
  solve(A) {
    let ans = 0;
    let map = new Map();
    let dp = Array(A.length)
      .fill(0)
      .map(() => Array(A.length).fill(null));

    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
        ans = Math.max(ans, dfs(j + 1, i, j));
      }
    }

    return ans >= 1 ? ans + 2 : 0;

    function dfs(next, i, j) {
      if (j >= A.length) {
        return 0;
      }

      if (dp[i][j] != null) {
        return dp[i][j];
      }

      let max = 0;

      for (let k = next; k < A.length; k++) {
        if (A[i] + A[j] == A[k]) {
          max = Math.max(max, 1 + dfs(k + 1, j, k));
        }
      }

      dp[i][j] = max;

      return dp[i][j];
    }
  }
}
