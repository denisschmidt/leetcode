// recursion + memo
// Time O(N * L)
// Space O(N)
const findTargetSumWays = (nums, target) => {
  let total = nums.reduce((acc, x) => acc + x, 0);
  let dp = Array(nums.length)
    .fill(0)
    .map(() => Array(total).fill(null));

  return dfs(0, 0);

  function dfs(index, sum) {
    if (index >= nums.length) {
      if (sum == target) {
        return 1;
      }
      return 0;
    }

    if (dp[index][sum] != null) {
      return dp[index][sum];
    }

    let res = 0;

    if (index == 0) {
      res += dfs(index + 1, -nums[0]);
      res += dfs(index + 1, nums[0]);
    } else {
      res += dfs(index + 1, sum + nums[index]);
      res += dfs(index + 1, sum - nums[index]);
    }

    dp[index][sum] = res;

    return res;
  }
};

const findTargetSumWays_II = (nums, target) => {
  // dp[i][j] означает количество способов получить сумму j из первых i элементов.
  let len = nums.length;
  let sum = nums.reduce((acc, v) => acc + v, 0);

  if (sum < target || (sum + target) % 2 > 0) {
    return 0;
  }

  return coinNonRepeat(nums, (target + sum) / 2);

  // 0-1 Knapsack problem
  function coinNonRepeat(nums, target) {
    // количество способов сделать сумму из первых чисел i с использованием неповторяющихся монет
    let dp = Array(target + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
      for (let j = target; j >= nums[i]; j--) {
        dp[j] = dp[j] + dp[j - nums[i]];
      }
    }

    return dp[target];
  }
};
