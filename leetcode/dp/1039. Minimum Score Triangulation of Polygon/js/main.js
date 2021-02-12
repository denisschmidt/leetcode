// Time O(N^3)
// Space O(N^2)
const minScoreTriangulation = nums => {
  let size = nums.length;

  // dp[i][j] означает минимальную сумму для триангуляции nums[i] ~ nums[j],
  let dp = Array(size)
    .fill(null)
    .map(() => Array(size).fill(0));

  for (let l = 2; l < size; l++) {
    for (let i = 0; i < size - l; i++) {
      let j = i + l;

      dp[i][j] = Number.MAX_VALUE;

      // Перечислим все точки nums[k] с i < k <j, чтобы сформировать треугольник.
      for (let k = i + 1; k < j; k++) {
        let product = nums[i] * nums[j] * nums[k];

        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + product);
      }
    }
  }

  return dp[0][size - 1];
};
