/*
Find all possible combinations of k numbers that add up to a number n,
given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
  Input: k = 3, n = 7
  Output: [[1,2,4]]

Example 2:
  Input: k = 3, n = 9
  Output: [[1,2,6], [1,3,5], [2,3,4]]
 */

// Backtracking Solution

/**
 * @param {number} len
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum3 = function(len, target) {
  let ans = [];
  const combination = (ans, comb = [], t, start) => {
    if (comb.length === len && t === 0) {
      ans.push([...comb]);
      return;
    }
    for (let i = start; i <= 9; i++) {
      comb.push(i);
      combination(ans, comb, t - i, i + 1);
      comb.pop();
    }
  };
  combination(ans, [], target, 1);
  return ans;
};

const ans = combinationSum3(3, 7);
console.log('---', ans);
