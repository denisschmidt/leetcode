/*

There are N piles of stones arranged in a row.  The i-th pile has stones[i] stones.

A move consists of merging exactly K consecutive piles into one pile, and the cost of this move is equal to 
the total number of stones in these K piles.

Find the minimum cost to merge all piles of stones into one pile.  
If it is impossible, return -1.

Example 1:
  Input: stones = [3,2,4,1], K = 2
  Output: 20
  Explanation: 
    We start with [3, 2, 4, 1].
    We merge [3, 2] for a cost of 5, and we are left with [5, 4, 1].
    We merge [4, 1] for a cost of 5, and we are left with [5, 5].
    We merge [5, 5] for a cost of 10, and we are left with [10].
    The total cost was 20, and this is the minimum possible.

Example 2:
  Input: stones = [3,2,4,1], K = 3
  Output: -1
  Explanation: After any merge operation, there are 2 piles left, and we can't merge anymore.  So the task is impossible.

Example 3:
  Input: stones = [3,5,1,2,6], K = 3
  Output: 25
  Explanation: 
    We start with [3, 5, 1, 2, 6].
    We merge [5, 1, 2] for a cost of 8, and we are left with [3, 8, 6].
    We merge [3, 8, 6] for a cost of 17, and we are left with [17].
    The total cost was 25, and this is the minimum possible.
 

Note:
  1 <= stones.length <= 30
  2 <= K <= 30
  1 <= stones[i] <= 100

*/

var mergeStones = function (stones, K) {
  let n = stones.length;

  if ((n - 1) % (K - 1) !== 0) {
    return -1;
  }

  let prefix = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + stones[i];
  }

  // dp - означает минимальную стоимость, необходимую для объединения stones[i] ~ stones[j].
  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let l = K; l <= n; l++) {
    for (let i = 0; i <= n - l; i++) {
      let j = i + l - 1;

      dp[i][j] = Number.MAX_VALUE;

      for (let k = i; k < j; k = k + K - 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j]);
      }

      // Каждый раз мы должны исключить K - 1 чисел
      // Если слияние возможно делаем его
      if ((j - i) % (K - 1) === 0) {
        // получаем сумму на интервале от i до j
        dp[i][j] += prefix[j + 1] - prefix[i];
      }
    }
  }

  return dp[0][n - 1];
};

mergeStones([3, 2, 4, 1], 2);
