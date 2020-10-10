/*
Given an integer array A, you partition the array into (contiguous) subarrays of length at most K.  
After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return the largest sum of the given array after partitioning.

Example 1:
  Input: A = [1,15,7,9,2,5,10], K = 3
  Output: 84
  Explanation: A becomes [15,15,15,9,10,10,10]
 

Note:
  1 <= K <= A.length <= 500
  0 <= A[i] <= 10^6
*/

/*
  dp[i] - будет содержать максимумальную сумму для текущего значения

  Суть в том, что для некоторых значений, максимально возможная сумма будет, если мы не будем менять значение текущего индекса
  А прибавим это значение к предыдущему состоянию массива

  Например: [1,15,7,9,2,5,10] 
  
  В данном примере для значения '9' наибольшая сумма - это предыдущее состояние + текущее значение

  Чтобы получить такой расчет нам нужен цикл по всем K от [0 - K]

  Тогда dp[i] = Math.max(dp[i], currSum * k + (i >= k ? dp[i - k] : 0))
*/

// DP
// Time O(N*K)
// Space O(N)
const maxSumAfterPartitioning = (nums, K) => {
  if (K === 1) {
    return nums.reduce((acc, v) => acc + v, 0);
  }

  let dp = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    let currSum = 0;

    for (let k = 1; k <= K && i - k + 1 >= 0; k++) {
      currSum = Math.max(currSum, nums[i - k + 1]);
      dp[i] = Math.max(dp[i], currSum * k + (i >= k ? dp[i - k] : 0));
    }
  }

  console.log(dp);

  return dp[nums.length - 1];
};
