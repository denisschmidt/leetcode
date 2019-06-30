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

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  let ans = [];

  const combination = (ans, comb) => {
    if (comb.length === nums.length) {
      ans.push([...comb]);
      return;
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (comb.includes(nums[i])) continue;
        comb.push(nums[i]);
        combination(ans, comb);
        comb.pop();
      }
    }
  };

  combination(ans, []);
  return ans;
};

const res = permute([1, 2, 3]);
console.log('---', res);
