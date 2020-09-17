// Time O(N)
// Space O(sqrt(N))
const numSquares = target => {
  let dp = Array(target + 1).fill(null);

  let squareNums = new Set();

  for (let i = 1; i * i <= target; i++) {
    squareNums.add(i * i);
  }

  return dfs(target);

  function dfs(num) {
    if (num < 0) {
      return Number.MAX_VALUE;
    }

    if (num == 0) {
      return 0;
    }

    if (dp[num] != null) {
      return dp[num];
    }

    let res = Number.MAX_VALUE;

    for (let square of squareNums.values()) {
      res = Math.min(res, 1 + dfs(num - square));
    }

    dp[num] = res;

    return res;
  }
};

// DP
// Time O(N * sqrt(N))
// Space O(N)
const numSquares = target => {
  let dp = Array(target + 1).fill(Number.MAX_VALUE);

  // bottom case
  dp[0] = 0;

  // pre-calculate the square numbers.
  let maxSquare = ~~Math.sqrt(target);
  let squareNums = Array(maxSquare + 1);

  for (let i = 1; i <= maxSquare; i++) {
    squareNums[i] = i * i;
  }

  for (let i = 1; i <= target; i++) {
    for (let j = 1; j <= maxSquare; j++) {
      if (i < squareNums[j]) {
        break;
      }
      dp[i] = Math.min(dp[i], dp[i - squareNums[j]] + 1);
    }
  }

  return dp[target];
};

// DP TLE
// Have not optimization with pre-calculate the square numbers.
const numSquares_II = target => {
  let dp = Array(target + 1).fill(target + 1);

  dp[0] = 0;

  for (let i = 1; i <= target; i++) {
    for (let j = 1; j <= i; j++) {
      if (isSquare(j)) {
        dp[i] = Math.min(dp[i], dp[i - j] + 1);
      }
    }
  }

  return dp[target];

  function isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
};
