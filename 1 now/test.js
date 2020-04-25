const LCSubStr = (s1, s2) => {
  let dp = Array(s1.length + 1)
    .fill(0)
    .map(() => Array(s2.length + 1).fill(0));

  let result = 0;

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        result = Math.max(result, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  console.log(dp);

  return result;
};

let a = LCSubStr('zxabcdezy', 'yzabcdezx');
console.log(a);
