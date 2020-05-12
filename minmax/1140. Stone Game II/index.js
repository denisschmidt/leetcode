/*

Alex and Lee continue their games with piles of stones.  

There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  

The objective of the game is to end with the most stones. 

Alex and Lee take turns, with Alex starting first.  Initially, M = 1.

On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  

Then, we set M = max(M, X).

The game continues until all the stones have been taken.

Assuming Alex and Lee play optimally, return the maximum number of stones Alex can get.

Example 1:
  Input: piles = [2,7,9,4,4]
  Output: 10
  Explanation:  If Alex takes one pile at the beginning, Lee takes two piles, then Alex takes 2 piles again. Alex can get 2 + 4 + 4 = 10 piles in total. If Alex takes two piles at the beginning, then Lee can take all three piles left. In this case, Alex get 2 + 7 = 9 piles in total. So we return 10 since it's larger. 
 

Constraints:
  1 <= piles.length <= 100
  1 <= piles[i] <= 10 ^ 4

*/

// MINMAX
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
      dp[start][m][id] = Math.max(dp[start][m][id], x);
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
