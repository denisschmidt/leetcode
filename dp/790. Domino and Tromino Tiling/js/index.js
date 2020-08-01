/*
We have two types of tiles: a 2x1 domino shape, and an "L" tromino shape. These shapes may be rotated.

  XX  <- domino

  XX  <- "L" tromino  
  X

Given N, how many ways are there to tile a 2 x N board? 
Return your answer modulo 10^9 + 7.

(
  In a tiling, every square must be covered by a tile. 
  Two tilings are different if and only if there are two 4-directionally adjacent cells 
  on the board such that exactly one of the tilings has both squares occupied by a tile.
)

Example:
  Input: 3
  Output: 5
  Explanation: 
    The five different ways are listed below, different letters indicates different tiles:
    XYZ XXZ XYY XXY XYY
    XYZ YYZ XZZ XYY XXY

Note: N  will be in range [1, 1000].




*/

/*
Значения растут со скоростью примерно в 2 раза больше каждый раз. 
Если вы запишите эту рекурсивную последовательность и выполните некоторые вычисления, вы можете обнаружить, что:

5 = 2 * 2 + 1
11 = 5 * 2 + 1
24 = 11 * 2 + 2
53 = 24 * 2 + 5
117 = 53 * 2 + 11

A[N] = A[N-1] * 2 + A[N-3]

Как только вы это заметите, все остальное будет легко, однако доказать это может быть непросто.

*/

// Time O(N)
// Space O(N)
const numTilings = N => {
  let dp = Array(N + 1).fill(0);
  let mod = 1e9 + 7;

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= N; i++) {
    if (i >= 3) {
      dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % mod;
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return dp[N];
};
