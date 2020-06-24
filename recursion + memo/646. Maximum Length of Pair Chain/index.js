/*

You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.

Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. 

Chain of pairs can be formed in this fashion.

Given a set of pairs, find the length longest chain which can be formed. 

You needn't use up all the given pairs. 

You can select pairs in any order.

Example 1:
  Input: [[1,2], [2,3], [3,4]]
  Output: 2
  Explanation: The longest chain is [1,2] -> [3,4]

Note: The number of given pairs will be in the range [1, 1000].

*/

// Time O(NLogN)
// Space O(N)
const findLongestChain = pairs => {
  pairs.sort((a, b) => a[0] - b[0]);

  let max = 0;
  let n = pairs.length;
  let dp = Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    max = Math.max(max, dfs(pairs[i], i + 1) + 1);
  }

  return max;

  function dfs(pair, index) {
    if (index >= n) return 0;

    if (dp[index] != -1) {
      return dp[index];
    }

    let res = 0;
    for (let i = index; i < n; i++) {
      if (pair[1] < pairs[i][0]) {
        res = Math.max(res, 1 + dfs(pairs[i], i));
      }
    }

    dp[index] = res;

    return dp[index];
  }
};

// Time O(NLogN)
// Space O(N)
const findLongestChain_II = pairs => {
  pairs.sort((a, b) => a[1] - b[1]);

  let cur = -Number.MAX_VALUE;
  let ans = 0;

  for (let pair of pairs) {
    if (cur < pair[0]) {
      cur = pair[1];
      ans++;
    }
  }
  return ans;
};
