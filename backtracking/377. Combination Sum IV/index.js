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

/*
  Backtracking !!!!!!!

  Only for positive number

  Memory Limit Exceeded

  If this problem requires you output the combinations, the backtracking method is very useful.

 */

const nums = [1, 2, 3];
const target = 4;

const combinationSum4 = function(nums, target) {
  const ans = [];

  const combination = (ans, comb, sum = 0) => {
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
  };

  combination(ans, [], target, 0);

  return ans.length;
};

const res = combinationSum4(nums, target);
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DP - Solution
/*

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

  sum
1 2 3 4  |
1        |  1
  2      |  1 2
    3    |  1 2 3
      4  |  1 2 3 4
---------|---------

target = 3 and nums[1, 2]
 1 1 1
 1 2
 2 1

Imagine we only need one more number to reach target !!!!!!!

 */
const combinationSum4DP = function(nums, target) {
  let dp = new Array(target + 1).fill(0);

  dp[0] = 1; // if the target is 0, there is only one way to get zero, which is using 0, we can set dp[0] = 1.

  nums.sort((a, b) => a - b);

  for (let sum = 1; sum <= target; sum++) {
    for (let j = 0; j < nums.length; j++) {
      const num = nums[j];
      if (num > sum) {
        break;
      } else if (sum === num) {
        dp[sum] += 1;
      } else {
        dp[sum] += dp[sum - num];
      }
    }
  }

  return dp[target];
};

const res2 = combinationSum4DP(nums, target);
console.log('---', res2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Recursion
 */
const combinationSum4Reqursion = function(nums, target) {
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

const res3 = combinationSum4Reqursion(nums, target);
console.log('---', res3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const combinationSum4DFS = function(nums, target) {
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

const res4 = combinationSum4DFS(nums, target);
console.log('---', res4);
