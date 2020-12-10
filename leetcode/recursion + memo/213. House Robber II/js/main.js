// Time O(N) + O(N)
// Space O(N) + O(N)
const rob = nums => {
  if (!nums.length) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let ans1 = getMax(0, nums.length - 2);
  let ans2 = getMax(1, nums.length - 1);

  return Math.max(ans1, ans2);

  function getMax(start, end) {
    let dp = [];

    dp[start] = nums[start];
    dp[start + 1] = nums[start + 1];

    for (let i = start + 2; i <= end; i++) {
      let max = dp[i - 3] ? Math.max(dp[i - 2], dp[i - 3]) : dp[i - 2] || 0;

      dp[i] = max + nums[i];
    }

    return Math.max(dp[end], dp[end - 1]);
  }
};
