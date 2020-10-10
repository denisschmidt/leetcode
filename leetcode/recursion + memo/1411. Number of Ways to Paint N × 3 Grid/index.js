/*

You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colours: 
Red, Yellow or Green while making sure that no two adjacent cells have the same colour 
(i.e no two cells that share vertical or horizontal sides have the same colour).

You are given n the number of rows of the grid.

Return the number of ways you can paint this grid. 

As the answer may grow large, the answer must be computed modulo 10^9 + 7.

Example 1:
  Input: n = 1
  Output: 12
  Explanation: There are 12 possible way to paint the grid as shown:

Example 2:
  Input: n = 2
  Output: 54

Example 3:
  Input: n = 3
  Output: 246

Example 4:
  Input: n = 7
  Output: 106494

Example 5:
  Input: n = 5000
  Output: 30228214
  

Constraints:
  n == grid.length
  grid[i].length == 3
  1 <= n <= 5000

*/

// Time O(N * 27^2) где N - количество строк сетки, N <= 5000

// В функции dfs (n, a, b, c) имеется всего n * a * b * c = n * 3 * 3 * 3 состояний (не считайте одноразовый вызов dfs (n, 0,0,0) )),
// каждому состоянию требуется максимум 3 ^ 3 (3 для циклов) для вычисления результата.
// Таким образом, сложность времени = O(N * 3 ^ 3 * 3 ^ 3) = O(N * 27 ^ 2)

// Space O(N * 4^3)
const numOfWays = n => {
  let dp = Array(n + 1)
    .fill(0)
    .map(() =>
      Array(4)
        .fill(0)
        .map(() =>
          Array(4)
            .fill(0)
            .map(() => Array(4).fill(null)),
        ),
    );

  let colors = [1, 2, 3];
  let mod = 1e9 + 7;

  return dfs(n, 0, 0, 0);

  function dfs(row, prev1col, prev2col, prev3col) {
    if (row == 0) return 1;

    if (dp[row][prev1col][prev2col][prev3col] != null) {
      return dp[row][prev1col][prev2col][prev3col];
    }

    let ans = 0;

    for (let a of colors) {
      if (a == prev1col) continue;

      for (let b of colors) {
        if (b == prev2col || b == a) continue;

        for (let c of colors) {
          if (c == prev3col || c == b) continue;

          ans += dfs(row - 1, a, b, c);
          ans = ans % mod;
        }
      }
    }

    dp[row][prev1col][prev2col][prev3col] = ans;

    return ans;
  }
};
