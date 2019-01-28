/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
  Input: candidates = [2,3,6,7], target = 7,
  A solution set is:
  [
    [7],
    [2,2,3]
  ]

Example 2:
  Input: candidates = [2,3,5], target = 8,
  A solution set is:
  [
    [2,2,2,2],
    [2,3,3],
    [3,5]
  ]

 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  let ans = [];
  const combination = (ans = [], comb = [], index = 0, sum = 0) => {
    if (sum < 0) return;
    else if (sum === 0) {
      ans.push([...comb]);
      return;
    } else {
      for (let i = index; i < candidates.length; i++) {
        comb.push(candidates[i]);
        combination(ans, comb, index++, sum - candidates[i]);
        comb.pop();
      }
    }
  };

  combination(ans, [], 0, target);
  return ans;
};

// let candidates = [7,3,2], target = 18;
let candidates = [2, 3, 5];
let target = 8;

const res = combinationSum(candidates, target);
console.log('---', res);
