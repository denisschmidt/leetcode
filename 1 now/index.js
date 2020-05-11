/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(nums, K) {
  let n = nums.length;
  let dp = Array(101)
    .fill(0)
    .map(() => Array(101).fill(0));

  return helper(0, K);

  function helper(start, cntSubarrays) {
    if (start >= n || dp[cntSubarrays][start] > 0) {
      return dp[cntSubarrays][start];
    }

    let sum = 0;

    for (let i = start; i <= n - cntSubarrays; i++) {
      sum += nums[i];

      // когда cntSubarrays == 1, мы просто накапливаем сумму, пока не достигнем конца вектора (i == nums.length - 1)
      if (i < n - 1 && cntSubarrays == 1) continue;

      dp[cntSubarrays][start] = Math.max(dp[cntSubarrays][start], sum / (i - start + 1) + helper(i + 1, cntSubarrays - 1));
    }

    return dp[cntSubarrays][start];
  }
};

console.log(largestSumOfAverages([9, 1, 2, 3, 9], 3));
