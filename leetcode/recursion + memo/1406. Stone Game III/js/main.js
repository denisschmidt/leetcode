// Time O(N)
// Space O(N)
const stoneGameIII = (stoneValue = []) => {
  let dp = Array(stoneValue.length).fill(null);
  let sum = dfs(0);

  if (sum > 0) {
    return 'Alice';
  } else if (sum < 0) {
    return 'Bob';
  }

  return 'Tie';

  function dfs(start) {
    if (start >= stoneValue.length) {
      return 0;
    }

    if (dp[start] != null) {
      return dp[start];
    }

    let sum = 0;
    let max = -Number.MAX_VALUE;
    for (let i = start; i < stoneValue.length && i < start + 3; i++) {
      sum += stoneValue[i];

      max = Math.max(max, sum - dfs(i + 1));
    }

    dp[start] = max;

    return dp[start];
  }
};
