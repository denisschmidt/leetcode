/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1, 2, 3],
  [1, 3],
  [2, 3],
  [1, 2],
  []
]
 */

// Approach to Backtracking !!!!!

const subsets = function (nums) {
  const ans = [];

  nums.sort((a, b) => a - b);

  const backtrack = (comb, start) => {
    ans.push([...comb]);

    for (let i = start; i < nums.length; i++) {
      comb.push(nums[i]);
      backtrack(comb, ++start);
      comb.pop();
    }
  };

  backtrack([], 0);

  return ans;
};
