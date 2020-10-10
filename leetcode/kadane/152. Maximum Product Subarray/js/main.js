// Time O(N)
// Space O(N)
const maxProduct = nums => {
  let n = nums.length;
  let INF = Number.MAX_VALUE;
  let dp = Array(n).fill([-INF, INF]);
  let res = nums[0];

  dp[0] = [nums[0], nums[0]];

  for (let i = 1; i < n; i++) {
    let [max, min] = dp[i - 1];
    let val = nums[i];

    dp[i][0] = Math.max(max * val, min * val, val);
    dp[i][1] = Math.min(min * val, max * val, val);

    res = Math.max(res, dp[i][0], dp[i][1]);
  }

  return res;
};

// Time O(N)
// Space O(1)
const maxProduct_II = nums => {
  let n = nums.length;

  let max = nums[0];
  let bestMin = max;
  let bestMax = max;

  for (let i = 1; i < n; i++) {
    if (nums[i] < 0) {
      let t = bestMin;
      bestMin = bestMax;
      bestMax = t;
    }

    bestMin = Math.min(nums[i], nums[i] * bestMin);
    bestMax = Math.max(nums[i], nums[i] * bestMax);

    max = Math.max(max, bestMax);
  }

  return max;
};
