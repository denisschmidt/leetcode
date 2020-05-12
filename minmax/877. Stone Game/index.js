/*

Alex and Lee play a game with piles of stones.  

There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

The objective of the game is to end with the most stones.  

The total number of stones is odd, so there are no ties.

Alex and Lee take turns, with Alex starting first.  

Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.  

This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.

Example 1:
  Input: [5,3,4,5]
  Output: true
  Explanation: 
    Alex starts first, and can only take the first 5 or the last 5.
    Say he takes the first 5, so that the row becomes [3, 4, 5].
    If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
    If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
    This demonstrated that taking the first 5 was a winning move for Alex, so we return true.
 

Note:
  2 <= piles.length <= 500
  piles.length is even.
  1 <= piles[i] <= 500
  sum(piles) is odd.

*/

/*

  Minimax - проблема

  1) Поскольку Алекс играет оптимально, он хочет максимизировать переменную счета.
  
  Алекс выигрывает, только если score = score(Alex) - score(Lee) >= 0.
  
  Алекс должен добавить piles[i] к счету, потому что он хочет максимизировать его.

  2) Поскольку Ли также играет оптимально, он хочет минимизировать переменную счета.
  
  Поскольку, если переменная счета становится отрицательной, у Ли больше индивидуального результата, чем у Алекса. 
  
  Но поскольку у нас есть только одна переменная, Ли должен испортить оценку (или, другими словами, вычесть из оценки).

*/

// Time O(2^N)
// Space O(N^2)
const stoneGame = piles => {
  let n = piles.length + 1;

  let memo = Array(n + 1)
    .fill(0)
    .map(() =>
      Array(n + 1)
        .fill(0)
        .map(() => Array(2).fill(-1)),
    );

  return helper(0, n - 1, true) >= 0;

  function helper(left, right, isFirst) {
    if (left > right) {
      return 0;
    }

    let playerId = isFirst ? 0 : 1;

    if (memo[left][right][playerId] != -1) {
      return memo[left][right][playerId];
    }

    if (playerId == 1) {
      memo[left][right][playerId] = Math.max(piles[l] + helper(l + 1, r, !isFirst), piles[r] + helper(l, r - 1, !isFirst));
    } else {
      memo[left][right][playerId] = Math.min(-piles[l] + helper(l + 1, r, !isFirst), -piles[r] + helper(l, r - 1, !isFirst));
    }

    return memo[left][right][playerId];
  }
};

// Recursion

const gameOnInt_II = piles => {
  let n = piles.length;

  return helper(0, n - 1, true) >= 0;

  function helper(left, right, isFirst) {
    if (left > right) {
      return 0;
    }

    if (isFirst) {
      let x = helper(left + 1, right, false) + piles[left];
      let y = helper(left, right - 1, false) + piles[right];
      return Math.max(x, y);
    } else {
      let x = helper(left + 1, right, true) - piles[left];
      let y = helper(left, right - 1, true) - piles[right];
      return Math.min(x, y);
    }
  }
};

/*

  https://www.youtube.com/watch?v=WxpIHvsu1RI

  Тип задач из dpProblems.js

  Получите лучшее с левой и правой сторон и добавьте решение для текущей позиции

*/

// Time O(N^2)
// Space O(N^2)
const stoneGame_III = piles => {
  let n = piles.length;
  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = new Pair();
    }
  }

  for (let i = 0; i < n; i++) {
    dp[i][i].first = piles[i];
    dp[i][i].pick = i;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;

      if (piles[i] + dp[i + 1][j].second > piles[j] + dp[i][j - 1].second) {
        dp[i][j].first = piles[i] + dp[i + 1][j].second;
        dp[i][j].second = dp[i + 1][j].first;
        dp[i][j].pick = i;
      } else {
        dp[i][j].first = piles[j] + dp[i][j - 1].second;
        dp[i][j].second = dp[i][j - 1].first;
        dp[i][j].pick = i;
      }
    }
  }

  return dp[0][n - 1].first > dp[0][n - 1].second;
};

class Pair {
  constructor() {
    this.first = 0;
    this.second = 0;
    this.pick = 0;
  }
}
