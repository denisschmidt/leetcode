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
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  let ans = [];
  const combination = (ans = [], comb = [], nums, index = 0) => {
    ans.push([...comb]);
    for (let i = index; i < nums.length; i++) {
      comb.push(nums[i]);
      combination(ans, comb, nums, i + 1);
      comb.pop();
    }
  };
  nums.sort((a, b) => a - b);
  combination(ans, [], nums, 0);
  return ans;
};

const res = subsets([1, 2, 3]);
console.log('---', res);
