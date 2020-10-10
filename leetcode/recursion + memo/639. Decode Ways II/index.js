/*

A message containing letters from A-Z is being encoded to numbers using the following mapping way:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Beyond that, now the encoded string can also contain the character '*', which can be treated as one of the numbers from 1 to 9.

Given the encoded message containing digits and the character '*', return the total number of ways to decode it.

Also, since the answer may be very large, you should return the output mod 109 + 7.

Example 1:
  Input: "*"
  Output: 9
  Explanation: The encoded message can be decoded to the string: "A", "B", "C", "D", "E", "F", "G", "H", "I".

Example 2:
  Input: "1*"
  Output: 9 + 9 = 18

Note:
  The length of the input string will fit in range [1, 105].
  The input string will only contain the character '*' and digits '0' - '9'.

*/

// Top-Down
// Time O(N)
// Space O(N)
const numDecodings = s => {
  let mod = 1e9 + 7;
  let n = s.length;
  let dp = Array(n).fill(-1);
  let ans = dfs(s, 0);

  return ans;

  function dfs(str, i) {
    if (i == n) {
      return 1;
    }

    if (dp[i] != -1) {
      return dp[i];
    }

    if (str[i] == '0') {
      return dp[i];
    }

    let res = 0;

    if (i + 1 < n) {
      if (str[i] == '*' && str[i + 1] == '*') {
        res += (15 * dfs(str, i + 2)) % mod;
      } else if (str[i] == '*') {
        // *x - where x <= 6 ? 2 : 1
        if (str[i + 1] <= 6) {
          res += (2 * dfs(str, i + 2)) % mod;
        } else {
          res += dfs(str, i + 2) % mod;
        }
      } else if (str[i + 1] == '*') {
        if (str[i] == '1') {
          res += (9 * dfs(str, i + 2)) % mod;
        } else if (str[i] == '2') {
          res += (6 * dfs(str, i + 2)) % mod;
        }
      } else {
        let num = str.substr(i, 2);
        if (num >= 10 && num <= 26) {
          res += dfs(str, i + 2) % mod;
        }
      }
    }

    if (str[i] == '*') {
      res += (9 * dfs(str, i + 1)) % mod;
    } else {
      res += dfs(str, i + 1) % mod;
    }

    map.set(i, res);

    return res;
  }
};

// Bottom-up
// Time O(N)
// Space O(N)
const numDecodings_II = s => {
  let memo = new Map();
  let mod = 1e9 + 7;

  return dfs(s, s.length - 1);

  function dfs(str, posIndex) {
    if (posIndex < 0) {
      return 1;
    }

    if (memo.has(posIndex)) {
      return memo.get(posIndex);
    }

    if (str[posIndex] == '*') {
      let res = (9 * dfs(str, posIndex - 1)) % mod;

      if (posIndex > 0 && str[posIndex - 1] == '1') {
        res += (9 * dfs(str, posIndex - 2)) % mod;
      } else if (posIndex > 0 && str[posIndex - 1] == '2') {
        res += (6 * dfs(str, posIndex - 2)) % mod;
      } else if (posIndex > 0 && str[posIndex - 1] == '*') {
        res += (15 * dfs(str, posIndex - 2)) % mod;
      }

      memo.set(posIndex, res);
      return memo.get(posIndex);
    }

    let res = s[posIndex] != '0' ? dfs(str, posIndex - 1) : 0;

    if (posIndex > 0 && str[posIndex - 1] == '1') {
      res += dfs(str, posIndex - 2) % mod;
    } else if (posIndex > 0 && str[posIndex - 1] == '2' && str[posIndex] <= 6) {
      res += dfs(str, posIndex - 2) % mod;
    } else if (posIndex > 0 && s[posIndex - 1] == '*') {
      let delta = str[posIndex] <= 6 ? 2 : 1;
      res += (delta * dfs(str, posIndex - 2)) % mod;
    }

    memo.set(posIndex, res % mod);
    return memo.get(posIndex);
  }
};
