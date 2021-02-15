// Time O(2^N) Экспонициальная сложность выполнения

// Я думаю, что сложность времени O(k * 2^N), по крайней мере, это верхняя граница.
// Потому что внутренней рекурсии требуется 2^N времени, чтобы найти хорошее подмножество.
//
// Как только 1-ое подмножество найдено, мы продолжаем находить второе, что займет примерно 2^N (потому что некоторые числа были помечены как посещенные).
// Так что T = 2^N + 2^N + 2^N + ... = k * 2 ^N.

const canPartitionKSubsets = (nums, k) => {
  let sum = nums.reduce((acc, val) => acc + val, 0);
  let visited = [];

  if (sum % k !== 0 || k === 0) return false;

  return dfs(nums, k, 0, sum / k, 0, visited);

  function dfs(nums, k, sum, target, index, visited) {
    if (k === 0) {
      return true;
    }

    if (sum === target) {
      return dfs(nums, k - 1, 0, target, 0, visited);
    }

    if (sum > target || index >= nums.length) {
      return false;
    }

    for (let i = index; i < nums.length; i++) {
      if (visited[i]) {
        continue;
      }

      visited[i] = true;

      if (dfs(nums, k, sum + nums[i], target, i + 1, visited)) {
        visited[i] = false;
        return true;
      }

      visited[i] = false;
    }

    return false;
  }
};
