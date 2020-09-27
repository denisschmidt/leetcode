// Time O(N^2)
// Space O(N^2)
const PredictTheWinner = nums => {
  let n = nums.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(null));

  let player1 = dfs(0, n - 1);
  let total = nums.reduce((acc, x) => acc + x, 0);

  return player1 >= total - player1;

  function dfs(left, right) {
    if (left > right) {
      return 0;
    }

    if (left == right) {
      return nums[left];
    }

    if (dp[left][right] != null) {
      return dp[left][right];
    }

    dp[left][right] = Math.max(
      nums[left] + Math.min(dfs(left + 1, right - 1), dfs(left + 2, right)),
      nums[right] + Math.min(dfs(left + 1, right - 1), dfs(left, right - 2)),
    );

    return dp[left][right];
  }
};

// Time O(N^2)
// Space O(N^2)
const PredictTheWinner_II = nums => {
  let n = nums.length;

  let dp = Array(n + 1)
    .fill(0)
    .map(() =>
      Array(n + 1)
        .fill(0)
        .map(() => [null, null]),
    );

  let player1 = dfs(0, n - 1, 0);

  return player1 >= 0;

  function dfs(left, right, next) {
    let playerId = next % 2;

    if (left > right) {
      return 0;
    }

    if (dp[left][right][playerId] != null) {
      return dp[left][right][playerId];
    }

    if (playerId == 0) {
      let x = nums[left] + dfs(left + 1, right, next + 1);
      let y = nums[right] + dfs(left, right - 1, next + 1);

      dp[left][right][playerId] = Math.max(x, y);
    } else {
      let x = dfs(left + 1, right, next + 1) - nums[left];
      let y = dfs(left, right - 1, next + 1) - nums[right];

      dp[left][right][playerId] = Math.min(x, y);
    }

    return dp[left][right][playerId];
  }
};
