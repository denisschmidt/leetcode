/*
Given a collection of distinct integers, return all possible permutations.

Example:
  Input: [1,2,3]
  Output:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
 */

// Time O(N!) N факториал
// Space O(N!)
const permute = function(nums) {
  const ans = [];

  backtrack([]);
  return ans;

  function backtrack(comb) {
    if (comb.length === nums.length) {
      ans.push([...comb]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (comb.includes(nums[i])) continue;
        comb.push(nums[i]);
        backtrack(comb);
        comb.pop();
      }
    }
  }
};
