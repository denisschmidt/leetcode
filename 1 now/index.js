/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  let n = piles.length;

  let INF = Number.MAX_VALUE;

  let dp = Array(n + 1)
    .fill(0)
    .map(() =>
      Array(n + 1)
        .fill(0)
        .map(() => [-INF, INF]),
    );

  return helper(0, 1, true);

  function helper(start, m, isFirst) {
    if (start >= n) return 0;

    let id = isFirst ? 0 : 1;

    if (id == 0 && dp[start][m][id] != -INF) {
      return dp[start][m][id];
    }

    if (id == 1 && dp[start][m][id] != INF) {
      return dp[start][m][id];
    }

    if (isFirst) {
      let x = -INF;
      for (let i = 1; i <= 2 * m; i++) {
        let sum = piles.slice(start, start + i).reduce((acc, v) => acc + v, 0);
        x = Math.max(x, sum + helper(start + i, Math.max(m, i), !isFirst));
      }
      dp[start][m][id] = x;
    } else {
      let x = INF;
      for (let i = 1; i <= 2 * m; i++) {
        x = Math.min(x, helper(start + i, Math.max(m, i), !isFirst));
      }
      dp[start][m][id] = Math.min(dp[start][m][id], x);
    }

    return dp[start][m][id];
  }
};

let a = stoneGameII([2, 7, 9, 4, 4]);
console.log(a);
