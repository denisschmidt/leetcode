/*

You have some coins.  The i-th coin has a probability prob[i] of facing heads when tossed.

Return the probability that the number of coins facing heads equals target if you toss every coin exactly once.

 
Example 1:
  Input: prob = [0.4], target = 1
  Output: 0.40000

Example 2:
  Input: prob = [0.5,0.5,0.5,0.5,0.5], target = 0
  Output: 0.03125
 
Example 3:
  Input: prob = [0.5,0.5,0.5,0.5,0.5], target = 1
  Output: 0.15625

Constraints:
  1 <= prob.length <= 1000
  0 <= prob[i] <= 1
  0 <= target <= prob.length
  Answers will be accepted as correct if they are within 10^-5 of the correct answer.

*/

const probabilityOfHeads = (prob, target) => {
  let n = prob.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(target + 1).fill(null));

  return dfs(0, target);

  function dfs(index, cnt) {
    if (index == n && cnt == 0) return 1.0;

    if (index == n) return 0;

    if (dp[index][cnt] != null) {
      return dp[index][cnt];
    }

    let res = 0;

    if (cnt > 0) {
      // вероятность выпада head
      res += dfs(index + 1, cnt - 1) * prob[index];
    }

    // вероятность выпада tail
    res += dfs(index + 1, cnt) * (1 - prob[index]);

    dp[index][cnt] = res;

    return res;
  }
};

// Time O(N^2)
// Space O(N^2)
const probabilityOfHeads_II = (prob, target) => {
  let n = prob.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(target + 1).fill(0));

  dp[0][0] = 1.0;

  for (let index = 1; index <= n; index++) {
    for (let cnt = 0; cnt <= target; cnt++) {
      if (cnt == 0) {
        dp[index][cnt] = dp[index - 1][cnt] * (1 - prob[index - 1]);
      } else {
        dp[index][cnt] = dp[index - 1][cnt - 1] * prob[index - 1] + dp[index - 1][cnt] * (1.0 - prob[index - 1]);
      }
    }
  }
  return dp[n][target];
};
