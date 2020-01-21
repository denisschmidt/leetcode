/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:
  Input: [1,1,2]
  Output:
    [
      [1,1,2],
      [1,2,1],
      [2,1,1]
    ]
*/

/*

Алгоритмы работы:

1) Создать дополнительный логический массив used[] - boolean, чтобы указать, добавлено ли значение в список.

2) Отсортировать массив nums, чтобы убедиться, что мы можем пропустить одинаковые значения

3) Когда число имеет то же значение, что и его предыдущее, мы можем использовать это число, только если используется его предыдущее


https://www.youtube.com/watch?v=nYFd7VHKyWQ


*/

// Time O(N! + NLogN)
// Space O(N)
const permuteUnique = nums => {
  let n = nums.length;
  let result = [];
  let used = Array(n + 1).fill(false);

  nums.sort((a, b) => a - b);

  backtrack();

  return result;

  function backtrack(comb = []) {
    if (comb.length === n) {
      result.push([...comb]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;

      if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) continue;

      used[i] = true;
      comb.push(nums[i]);

      backtrack(comb);

      comb.pop();
      used[i] = false;
    }
  }
};

let r = permuteUnique([1, 1, 2]);
console.log(r);
