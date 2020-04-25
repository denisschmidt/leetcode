/*

  Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.

  Examples :
    Input : X = “GeeksforGeeks”, y = “GeeksQuiz”
    Output : 5 The longest common substring is “Geeks” and is of length 5.

    Input : X = “abcdxyz”, y = “xyzabcd”
    Output : 4 The longest common substring is “abcd” and is of length 4.

    Input : X = “zxabcdezy”, y = “yzabcdezx”
    Output : 6 The longest common substring is “abcdez” and is of length 6.

*/

// Time O(N^2)
// Space O(N^2)
const LCSubStr = (str1, str2) => {
  let n = str1.length;
  let m = str2.length;
  let max = 0;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(m).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;

        if (dp[i][j] > max) {
          max = dp[i][j];
        }
      }
    }
  }

  return max;
};
