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

// https://www.youtube.com/watch?v=WxpIHvsu1RI

// Тип задач из dpProblems.js
// Получите лучшее с левой и правой сторон и добавьте решение для текущей позиции.

// Time O(N^2)
// Space O(N^2)
const stoneGame = piles => {
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
