// Time O(2^N)
// Space O(N)
const minSteps = n => {
  if (n <= 1) {
    return 0;
  }

  return dfs(1, 0);

  function dfs(strLen, copyLen) {
    if (strLen > n) {
      return Number.MAX_VALUE;
    }

    if (strLen == n) {
      return 0;
    }

    if (copyLen == 0) {
      return 2 + dfs(2 * strLen, strLen);
    } else {
      return Math.min(1 + dfs(strLen + copyLen, copyLen), 2 + dfs(2 * strLen, strLen));
    }
  }
};

// Time O(N^2)
// Space O(N)
// В худшем случае для простого числа сложность N^2
const minSteps_II = n => {
  let dp = [];

  // Изначально инициализируем значния как будто мы скопировали 1 символ и делаем вставку равную длине слова
  for (let i = 0; i < 1001; i++) {
    dp[i] = i;
  }

  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        dp[i] = dp[i / j] + j;
        break;
      }
    }
  }

  return dp[n];
};
