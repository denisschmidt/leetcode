// Time O(N*M)
// Space O(N*M)
const isInterleave = (s1, s2, s3) => {
  if (s1.length + s2.length < s3.length) {
    return false;
  }

  if (s1.length == 0 || s2.length == 0) {
    return s1 == s3 || s2 == s3;
  }

  let dp = Array(s1.length)
    .fill(0)
    .map(() => Array(s2.length).fill(null));

  return dfs(0, 0, 0);

  function dfs(sIndex1, sIndex2, sIndex3) {
    if (sIndex1 >= s1.length) {
      return s2.substring(sIndex2) == s3.substring(sIndex3);
    }

    if (sIndex2 >= s2.length) {
      return s1.substring(sIndex1) == s3.substring(sIndex3);
    }

    if (dp[sIndex1][sIndex2] != null) {
      return dp[sIndex1][sIndex2];
    }

    if (
      (s1[sIndex1] == s3[sIndex3] && dfs(sIndex1 + 1, sIndex2, sIndex3 + 1)) ||
      (s2[sIndex2] == s3[sIndex3] && dfs(sIndex1, sIndex2 + 1, sIndex3 + 1))
    ) {
      dp[sIndex1][sIndex2] = true;

      return dp[sIndex1][sIndex2];
    }

    dp[sIndex1][sIndex2] = false;

    return dp[sIndex1][sIndex2];
  }
};
