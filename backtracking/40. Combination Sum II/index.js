/*
Given a collection of candidate numbers (candidates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sums to target.

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

Without duplicates combinations !!!!!

 */

// Time O(N^2)
// Space O(N)
const combinationSum = (candidates, target) => {
  const results = [];
  candidates.sort((a, b) => a - b);
  backtracking(candidates, target, 0, [], results);
  return results;
};

const backtracking = (candidates, target, start, solution, results) => {
  if (target < 0) {
    return;
  }

  if (target === 0) {
    results.push(solution.slice());
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    // скипаем дубли
    // Наш массив solution содержит некоторый элемент, выбранный из candidates [0 ... start-1].
    // Мы начинаем с i = start, теперь i > start, что означает, что мы уже пробовали элементы от start до i - 1 (i - 1 >= start).
    // Теперь мы  на candidate[i] и candidate[i] == candidate[i-1]. Следоватлеьно нужно попробовать другую последовательность
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue;
    }
    solution.push(candidates[i]);
    backtracking(candidates, target - candidates[i], i + 1, solution, results);
    solution.pop();
  }
};
