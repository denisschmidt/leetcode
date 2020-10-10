/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
 */

// Approach to Backtracking !!!!!

const subsetsWithDup = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  const combination = (ans, comb, index) => {
    ans.push([...comb]);

    for (let i = index; i < nums.length; i++) {
      // убираем дубли
      if (i > index && nums[i] === nums[i - 1]) continue;
      comb.push(nums[i]);
      combination(ans, comb, i + 1);
      comb.pop();
    }
  };

  combination(ans, [], 0);
  return ans;
};

const res = subsetsWithDup([4, 4, 4, 1, 4]);
console.log('---', res);
