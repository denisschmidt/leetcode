/*

Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) 
deleted without changing the relative order of the remaining characters. 
(eg, "ace" is a subsequence of "abcde" while "aec" is not). 

A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example 1:
  Input: text1 = "abcde", text2 = "ace" 
  Output: 3  
  Explanation: The longest common subsequence is "ace" and its length is 3.

  Example 2:
  Input: text1 = "abc", text2 = "abc"
  Output: 3
  Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
  Input: text1 = "abc", text2 = "def"
  Output: 0
  Explanation: There is no such common subsequence, so the result is 0.
 
Constraints:
  1 <= text1.length <= 1000
  1 <= text2.length <= 1000
  The input strings consist of lowercase English characters only.
  
Important !!!

Observe that if lines cross over each other, then they do not represent a common subsequence.

*/

// Time O(N^2)
// Space O(N)
const longestCommonSubsequence = (text1, text2) => {
  let n = text1.length;
  let m = text2.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
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
