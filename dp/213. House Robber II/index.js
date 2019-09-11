/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. 
That means the first house is the neighbor of the last one. 
Meanwhile, adjacent houses have security system connected and it will automatically contact the police 
if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:
  Input: [2,3,2]
  Output: 3
  Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.
Example 2:
  Input: [1,2,3,1]
  Output: 4
  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
 */

// Time O(N) + O(N)
// Space O(N) + O(N)
var rob = function(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

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
