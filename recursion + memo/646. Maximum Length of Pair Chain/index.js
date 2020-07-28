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

  let n = pairs.length;
  let dp = Array(n).fill(-1);

  return dfs(0) + 1;

  function dfs(index) {
    if (index >= n - 1) {
      return 0;
    }

    if (dp[index] != -1) {
      return dp[index];
    }

    let res = 0;
    for (let i = index; i < n; i++) {
      // continue our search or start new search
      if (pairs[index][1] < pairs[i][0]) {
        res = Math.max(res, 1 + dfs(i));
      } else {
        res = Math.max(res, dfs(i + 1));
      }
    }

    dp[index] = res;

    return res;
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
