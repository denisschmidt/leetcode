// Important !!!
// Observe that if lines cross over each other, then they do not represent a common subsequence.

// Time O(N^2)
// Space O(N)
const longestCommonSubsequence = (text1, text2) => {
  let dp = Array(text1.length + 1)
    .fill(0)
    .map(() => Array(text2.length + 1).fill(null));

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
};

// Time O(N^2)
// Space O(N^2)
const longestCommonSubsequence_II = (text1, text2) => {
  let dp = Array(text1.length)
    .fill(0)
    .map(() => Array(text2.length).fill(null));

  return dfs(0, 0);

  function dfs(index1, index2) {
    if (index1 >= text1.length || index2 >= text2.length) {
      return 0;
    }

    if (dp[index1][index2] != null) {
      return dp[index1][index2];
    }

    let l = 0;
    let r = 0;

    if (text1[index1] == text2[index2]) {
      l = 1 + dfs(index1 + 1, index2 + 1);
    } else {
      r = Math.max(dfs(index1 + 1, index2), dfs(index1, index2 + 1));
    }

    dp[index1][index2] = Math.max(l, r);

    return dp[index1][index2];
  }
};
