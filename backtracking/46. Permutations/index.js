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

// Генерация всех только уникальных комбинаций для случая когда у нас нет дубликатов

// Time O(N!) N факториал
// Space O(N!)
const permute = function(nums) {
  let ans = [];
  let n = nums.length;

  helper([]);

  return ans;

  function helper(comb) {
    if (comb.length == n) {
      ans.push([...comb]);
      return;
    }

    for (let i = 0; i < n; i++) {
      // этой проверки достаточно так как у нас все элементы уникальные
      if (comb.includes(nums[i])) continue;

      comb.push(nums[i]);

      helper(comb);

      comb.pop();
    }
  }
};
