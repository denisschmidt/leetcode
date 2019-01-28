/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
  Input: candidates = [10,1,2,7,6,1,5], target = 8,
  A solution set is:
  [
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6]
  ]

Example 2:
  Input: candidates = [2,5,2,1,2], target = 5,
  A solution set is:
  [
    [1,2,2],
    [5]
  ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  let ans = [];
  candidates.sort((a, b) => a - b);
  const combination = (ans = [], comb = [], index = 0, sum = 0) => {
    if (sum < 0) return;
    else if (sum === 0) {
      ans.push([...comb]);
      return;
    } else {
      for (let i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] === candidates[i - 1]) continue;
        comb.push(candidates[i]);
        combination(ans, comb, i + 1, sum - candidates[i]);
        comb.pop();
      }
    }
  };

  combination(ans, [], 0, target);
  return ans;
};

const res = combinationSum2([2, 5, 2, 1, 2], 5);
console.log('---', res);
