const stoneGameV = stoneValue => {
  let n = stoneValue.length;
  let prefixSum = Array(n + 1).fill(0);
  let dp = Array(n)
    .fill(false)
    .map(() => Array(n).fill(null));

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + stoneValue[i];
  }

  return dfs(0, n - 1);

  function dfs(left, right) {
    if (left >= right) {
      return 0;
    }

    if (dp[left][right] != null) {
      return dp[left][right];
    }

    let max = -Number.MAX_VALUE;

    for (let mid = left + 1; mid <= right; mid++) {
      let leftSum = prefixSum[mid] - prefixSum[left];
      let rightSum = prefixSum[right + 1] - prefixSum[mid];

      if (leftSum < rightSum) {
        max = Math.max(max, leftSum + dfs(left, mid - 1));
      } else if (leftSum > rightSum) {
        max = Math.max(max, rightSum + dfs(mid, right));
      } else {
        max = Math.max(max, leftSum + dfs(left, mid - 1));
        max = Math.max(max, rightSum + dfs(mid, right));
      }
    }

    dp[left][right] = max;

    return dp[left][right];
  }
};
