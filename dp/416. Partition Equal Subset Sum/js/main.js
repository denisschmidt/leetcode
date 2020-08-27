/*

Given a non-empty array containing only positive integers,
find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Example 1:
  Input: [1, 5, 11, 5]
  Output: true
  Explanation: The array can be partitioned as [1, 5, 5] and [11].


Example 2:
  Input: [1, 2, 3, 5]
  Output: false
  Explanation: The array cannot be partitioned into equal sum subsets.

Note:
  Each of the array element will not exceed 100.
  The array size will not exceed 200.

*/

// Задача очень похожа на 0/1 Knapsack

// Есть ли в наборе несколько чисел
// Которые могут суммироваться до определенного значения (в этой задаче это значение sum / 2).

// Time O(N^2)
// Space O(N)
const canPartition = nums => {
  let sum = nums.reduce((acc, v) => acc + v, 0);

  if (sum % 2 !== 0) {
    return false;
  }

  let target = sum >> 1;

  // Позволяет на ответить на вопрос.
  // Есть ли в наборе несколько чисел, которые могут суммироваться до определенного значения
  // C использованием неповторяющихся значений
  let dp = Array(target + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }

  return dp[target];
};

// Time O(N^2)
// Space O(N^2)
const canPartition_II = nums => {
  let totalSum = nums.reduce((acc, val) => acc + val, 0);

  if (totalSum % 2 != 0) return false;

  // Наша цель найти (сумму / 2)
  let n = nums.length;
  let target = totalSum / 2;

  // dp[i][j] означает, что конкретная сумма j может быть получена из первых i чисел
  // Если мы можем выбрать такую ​​серию чисел из 0-i, чья сумма равна j, dp[i][j] будет истинным, в противном случае - ложным.
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(target + 1).fill(false));

  dp[0][0] = true;

  // Заполнение первого столбца
  // Точно можно сделать нулевую сумму с любым количеством элементов
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let sum = 1; sum <= target; sum++) {
      // если сумма больше или равна i - 1 числу из nums
      if (sum >= nums[i - 1]) {
        // Представляем, что sum состоит из текущего значения nums[i], а остальные - из других предыдущих чисел.
        dp[i][sum] = dp[i - 1][sum] || dp[i - 1][sum - nums[i - 1]];
      } else {
        // смотрим на предыдущее значение
        dp[i][sum] = dp[i - 1][sum];
      }
    }
  }

  return dp[n][sum];
};

// TLE
// Backtracking
const canPartition_III = nums => {
  let target = nums.reduce((acc, v) => acc + v, 0);

  if (target % 2 != 0) return false;

  nums.sort((a, b) => a - b);

  return dfs(target / 2, 0);

  function dfs(target, index) {
    if (index >= nums.length || target < nums[index]) return false;
    if (target == nums[index]) return true;

    return dfs(target - nums[index], index + 1) || dfs(target, index + 1);
  }
};
