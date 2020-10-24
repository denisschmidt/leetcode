// DFS + Memo
// Time O(N^2)
// Space O(N^2)
/**
 * @param {number[]} A
 * @return {number}
 */
const lenLongestFibSubseq = A => {
  let ans = 0;
  let map = new Set(A);
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

    if (!map.has(A[i] + A[j])) {
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
};

// Dp
// Time O(N^2)
// Space O(N^2)
/**
 * @param {number[]} A
 * @return {number}
 */
const lenLongestFibSubseq_II = A => {
  let ans = 0;
  let map = {};
  let dp = Array(A.length)
    .fill()
    .map(() => Array(A.length).fill(2));

  for (let i = 0; i < A.length; i++) {
    map[A[i]] = i;

    for (let j = 0; j < i; j++) {
      if (A[i] - A[j] < A[j] && A[i] - A[j] in map) {
        let diff = A[i] - A[j];

        let k = map[diff];

        dp[j][i] = Math.max(dp[j][i], 1 + dp[k][j]);
      }

      ans = Math.max(ans, dp[j][i]);
    }
  }

  return ans >= 3 ? ans : 0;
};
