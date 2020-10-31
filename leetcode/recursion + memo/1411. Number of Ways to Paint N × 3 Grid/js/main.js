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
