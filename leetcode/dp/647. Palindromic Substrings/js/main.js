/*

State
  state[i][j] is true if substring s[i, j] is palindromic

Aim State
  decide all possible state[i][j] and count the element that is true

State Transition
  state[i][j] is true if s[i] == s[j] and state[i+1][j-1] is true (j - i >= 2)
  state[i][j] is true if s[i] == s[j] (j - i == 1)
  state[i][j] is true (j - i == 0)

*/

// Time O(N^2)
// Space O(N^2)
const countSubstrings = s => {
  let n = s.length;
  let ans = 0;
  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(false));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
      }

      if (dp[i][j]) {
        ans++;
      }
    }
  }

  return ans;
};
