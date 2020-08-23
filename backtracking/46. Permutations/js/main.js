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
const permute = nums => {
  let n = nums.length;
  let visited = Array(n).fill(false);
  let res = [];

  dfs();

  return res;

  function dfs(comb = []) {
    if (comb.length == n) {
      res.push([...comb]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      comb.push(nums[i]);

      dfs(comb);

      visited[i] = false;
      comb.pop();
    }
  }
};
