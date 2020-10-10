/*
Given an integer array with all positive numbers and no duplicates,
find the number of possible combinations that add up to a positive integer target.

Example:

  nums = [1, 2, 3]
  target = 4

  The possible combination ways are:
  (1, 1, 1, 1)
  (1, 1, 2)
  (1, 2, 1)
  (1, 3)
  (2, 1, 1)
  (2, 2)
  (3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.

Follow up:
  What if negative numbers are allowed in the given array?
  How does it change the problem?
  What limitation we need to add to the question to allow negative numbers?

Credits:
  Special thanks to @pbrother for adding this problem and creating all test cases.

 */

// Time O(N)
// Space O(N)
const combinationSum4 = (nums, target) => {
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let sum = 1; sum <= target; sum++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= sum) {
        dp[i] += dp[sum - nums[j]];
      }
    }
  }

  return dp[target];
};

/*
  Backtracking !!!!!!!

  Only for positive number

  Memory Limit Exceeded

  If this problem requires you output the combinations, the backtracking method is very useful.

 */
const combinationSum4_II = function (nums, target) {
  const ans = [];
  combination(ans, [], target);
  return ans.length;

  function combination(ans, comb, sum = 0) {
    if (sum < 0) {
      return;
    } else if (sum === 0) {
      ans.push([...comb]);
      return;
    } else {
      for (let i = 0; i < nums.length; i++) {
        comb.push(nums[i]);
        combination(ans, comb, sum - nums[i]);
        comb.pop();
      }
    }
  }
};

/*
  Recursion
 */
const combinationSum4Reqursion = function (nums, target) {
  if (target === 0) {
    return 1;
  }
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target >= nums[i]) {
      res += combinationSum4Reqursion(nums, target - nums[i]);
    }
  }
  return res;
};

const combinationSum4DFS = function (nums, target) {
  if (!nums.length) {
    return 0;
  }
  const map = new Map();

  const dfs = (nums, sum, map) => {
    if (sum === 0) {
      return 1;
    }

    if (sum < 0) {
      return 0;
    }

    if (map.has(sum)) {
      return map.get(sum);
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      count += dfs(nums, sum - nums[i], map);
    }

    map.set(sum, count);
    return count;
  };

  return dfs(nums, target, map);
};
