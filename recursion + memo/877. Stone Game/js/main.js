// Time O(2^N)
// Space O(N^2)
const stoneGame = piles => {
  let n = piles.length;

  let dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(null));

  let Alex = dfs(0, n - 1);

  let totalScore = piles.reduce((acc, x) => acc + x, 0);
  let Lee = totalScore - Alex;

  return Alex >= Lee;

  function dfs(left, right) {
    if (left > right) {
      return 0;
    }

    if (left + 1 == right && right < piles.length) {
      return piles[left];
    }

    if (dp[left][right] != null) {
      return dp[left][right];
    }

    dp[left][right] = Math.max(
      piles[left] + dfs(left + 1, right - 1),
      piles[left] + dfs(left + 2, right),
      piles[right] + dfs(left + 1, right - 1),
      piles[right] + dfs(left, right - 2),
    );

    return dp[left][right];
  }
};

/*

  Это Minimax - проблема

  1) Поскольку Алекс играет оптимально, он хочет максимизировать переменную счета.
  
  Алекс выигрывает, только если score = score(Alex) - score(Lee) >= 0.
  
  Алекс должен добавить piles[i] к счету, потому что он хочет максимизировать его.

  2) Поскольку Ли также играет оптимально, он хочет минимизировать переменную счета.
  
  Поскольку, если переменная счета становится отрицательной, у Ли больше индивидуального результата, чем у Алекса. 
  
  Но поскольку у нас есть только одна переменная, Ли должен испортить оценку (или, другими словами, вычесть из оценки).

  dp[i][j] actually means maximum(alex stone - lee stone) and maximum(lee stone - alex stone) alternatively, depending on who picks from piles[i]~piles[j] first.
  
  If alex picks from piles[i]~piles[j] first, then dp[i][j] means maximum(alex stone - lee stone);
  
  If Lee pick from piles[i]~piles[j] frist, then dp[i][j] means maximum(lee stone - alex stone) .
*/

// Time O(2^N)
// Space O(N^2)
const stoneGame_II = piles => {
  if (piles.length == 0) return false;

  let dp = Array(piles.length + 1)
    .fill(0)
    .map(() =>
      Array(piles.length + 1)
        .fill(0)
        .map(() => Array(2).fill(null)),
    );

  return dfs(0, piles.length - 1, 0) >= 1;

  function dfs(left, right, next) {
    if (left > right) {
      return 0;
    }

    let playerId = next % 2;

    if (dp[left][right][playerId] != null) {
      return dp[left][right][playerId];
    }

    if (playerId == 0) {
      let x = dfs(left + 1, right, next + 1) + piles[left];
      let y = dfs(left, right - 1, next + 1) + piles[right];

      dp[left][right][playerId] = Math.max(x, y);
    } else {
      let x = dfs(left + 1, right, next + 1) - piles[left];
      let y = dfs(left, right - 1, next + 1) - piles[right];

      dp[left][right][playerId] = Math.min(x, y);
    }

    return dp[left][right][playerId];
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
