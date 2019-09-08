/*
Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

 

Example 1:

  Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
  Output: True
  Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
 

Note:

  1 <= k <= len(nums) <= 16.
  0 < nums[i] < 10000.

 */

// Time O(2^N) Экспонициальная сложность выполнения

// Я думаю, что сложность времени O(k * 2^N), по крайней мере, это верхняя граница.
// Потому что внутренней рекурсии требуется 2^N времени, чтобы найти хорошее подмножество.
//
// Как только 1-ое подмножество найдено, мы продолжаем находить второе, что займет примерно 2^N (потому что некоторые числа были помечены как посещенные).
// Так что T = 2^N + 2^N + 2^N + ... = k * 2 ^N.

const canPartitionKSubsets = function(nums, k) {
  let sum = nums.reduce((acc, val) => acc + val, 0);
  let visited = [];

  if (sum % k !== 0 || k === 0) return false;

  sum = sum / k;

  return backtrack(nums, k, 0, sum, 0, visited);

  function backtrack(nums, k, sum, target, index, visited) {
    if (k === 0) return true;
    else if (sum > target) return false;
    else if (sum === target) {
      return backtrack(nums, k - 1, 0, target, 0, visited);
    } else {
      for (let i = index; i < nums.length; i++) {
        if (!visited[i]) {
          visited[i] = true;
          if (backtrack(nums, k, sum + nums[i], target, i + 1, visited)) {
            return true;
          }
          visited[i] = false;
        }
      }
    }
    return false;
  }
};
