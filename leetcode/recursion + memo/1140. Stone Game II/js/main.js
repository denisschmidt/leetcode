/* 
  The idea of minimax :
    1) If am the player 1 (whose winning sum we are trying to calculate), then I recurse on all possibilities and get the max.
    2) If am the player 2 (the opponent), then I try to minimize what P1 gets, and since we are not interested in what score P2 gets
      we only calculate the min(all P1 next moves) and dont include the score P2 gets.

  if player == 1st player,
      gain = first x piles + minimax(..., 2nd player), where the gain is maximized
 
  if player == 2nd player,
      gain = 0 + minimax(..., 1st player), where the gain is minimized because the 2nd player tries to maximize his steps

  The second player minimize sum which the first player can achieve

*/

const stoneGameII = piles => {
  let n = piles.length;
  let INF = Number.MAX_VALUE;

  let dp = Array(n + 1)
    .fill(0)
    .map(() =>
      Array(n + 1)
        .fill(0)
        .map(() => [-INF, INF]),
    );

  let res = dfs(0, 1, 0);

  return res;

  function dfs(start, M, next) {
    if (start >= n) return 0;

    let playerId = next % 2;

    if (playerId == 0 && dp[start][M][playerId] != -INF) {
      return dp[start][M][playerId];
    }

    if (playerId == 1 && dp[start][M][playerId] != INF) {
      return dp[start][M][playerId];
    }

    if (playerId == 0) {
      let max = -INF;

      for (let i = 1; i <= 2 * M; i++) {
        let sum = piles.slice(start, start + i).reduce((acc, v) => acc + v, 0);
        let nextM = Math.max(i, M);

        max = Math.max(max, sum + dfs(start + i, nextM, next + 1));
      }

      dp[start][M][playerId] = Math.max(dp[start][M][playerId], max);
    } else {
      let min = INF;

      for (let i = 1; i <= 2 * M; i++) {
        let nextM = Math.max(i, M);

        min = Math.min(min, dfs(start + i, nextM, next + 1));
      }

      dp[start][M][playerId] = Math.min(dp[start][M][playerId], min);
    }

    return dp[start][M][playerId];
  }
};

const stoneGameII_II = piles => {
  let n = piles.length;
  let INF = Number.MAX_VALUE;
  let MAX_M = 2 * n + 1;

  let dp = Array(n + 1)
    .fill(0)
    .map(() =>
      Array(MAX_M)
        .fill(0)
        .map(() => [null, null]),
    );

  return dfs(0, 1, 0);

  function dfs(start, M, next) {
    let playerId = next % 2;

    if (start >= n) {
      return 0;
    }

    if (dp[start][M][playerId] != null) {
      return dp[start][M][playerId];
    }

    let minmax = playerId == 0 ? -INF : INF;
    let preSum = 0;

    for (let i = start; i < n && i < start + 2 * M; i++) {
      let distM = i - start + 1;
      let nextM = Math.max(distM, M);

      preSum += piles[i];

      let sum = dfs(i + 1, nextM, next + 1);

      if (playerId == 0) {
        minmax = Math.max(minmax, sum + preSum);
      } else {
        minmax = Math.min(minmax, sum);
      }
    }

    dp[start][M][playerId] = minmax;

    return dp[start][M][playerId];
  }
};
