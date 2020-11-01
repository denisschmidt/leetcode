// DP Solution
// Time: O(N^2)
// Space: O(N)
const lengthOfLIS = nums => {
  if (nums.length == 0) return 0;
  let n = nums.length;

  let dp = Array(n).fill(1);
  let maxLen = 1;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] < nums[j]) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }

      if (dp[j] > maxLen) {
        maxLen = dp[j];
      }
    }
  }

  return maxLen;
};

// Time O(N^2)
// Space O(N^2)
const lengthOfLIS_II = nums => {
  if (nums.length == 0) return 0;
  let n = nums.length;

  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(n).fill(null));

  return dfs(-1, 0);

  function dfs(prevIndex, currIndex) {
    if (currIndex == n) {
      return 0;
    }

    if (dp[prevIndex + 1][currIndex] != null) {
      return dp[prevIndex + 1][currIndex];
    }

    let taken = 0;
    if (prevIndex < 0 || nums[currIndex] > nums[prevIndex]) {
      taken = 1 + dfs(currIndex, currIndex + 1);
    }

    let nottaken = dfs(prevIndex, currIndex + 1);

    dp[prevIndex + 1][currIndex] = Math.max(taken, nottaken);

    return dp[prevIndex + 1][currIndex];
  }
};
